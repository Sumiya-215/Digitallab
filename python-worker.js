"use strict";

const PYODIDE_VERSION = "314.0.7";
const PYODIDE_BASE_URL = `https://cdn.jsdelivr.net/pyodide/v${PYODIDE_VERSION}/full/`;
const loadedPackages = new Set();
const editorNamespaces = new Map();
let pyodidePromise;
let pyodide;
let executionQueue = Promise.resolve();
let requestsAdapterConfigured = false;

function sendStatus(executionId, status) {
  self.postMessage({ type: "status", executionId, status });
}

async function getPyodide(executionId) {
  if (!pyodidePromise) {
    pyodidePromise = (async () => {
      sendStatus(executionId, "Loading Python");
      const pyodideModule = await import(`${PYODIDE_BASE_URL}pyodide.mjs`);
      pyodide = await pyodideModule.loadPyodide({ indexURL: PYODIDE_BASE_URL });
      return pyodide;
    })().catch((error) => {
      pyodidePromise = undefined;
      throw error;
    });
  }
  return pyodidePromise;
}

function packagesFor(code) {
  const packagePatterns = [
    ["pandas", /^\s*(?:import\s+pandas\b|from\s+pandas\b)/m],
    ["numpy", /^\s*(?:import\s+numpy\b|from\s+numpy\b)/m],
    ["matplotlib", /^\s*(?:import\s+matplotlib\b|from\s+matplotlib\b)/m],
    ["seaborn", /^\s*(?:import\s+seaborn\b|from\s+seaborn\b)/m],
    ["requests", /^\s*(?:import\s+requests\b|from\s+requests\b)/m],
    ["openpyxl", /^\s*(?:import\s+openpyxl\b|from\s+openpyxl\b)/m]
  ];
  const required = packagePatterns
    .filter(([, pattern]) => pattern.test(code))
    .map(([name]) => name);

  if (/\b(?:tz_localize|tz_convert)\s*\(|\btz\s*=/.test(code) && !required.includes("tzdata")) {
    required.push("tzdata");
  }
  if (/\b(?:read_excel|to_excel)\s*\(/.test(code) && !required.includes("openpyxl")) {
    required.push("openpyxl");
  }
  return required;
}

async function preparePackages(runtime, executionId, code) {
  const requested = packagesFor(code);
  const missing = requested.filter((name) => !loadedPackages.has(name));

  if (missing.length) {
    sendStatus(executionId, `Installing packages: ${missing.join(", ")}`);
    try {
      const pyodidePackages = missing.filter((name) => name !== "openpyxl" && name !== "seaborn");
      if (pyodidePackages.length) await runtime.loadPackage(pyodidePackages);
      if (missing.includes("seaborn")) {
        if (!loadedPackages.has("micropip")) {
          await runtime.loadPackage("micropip");
          loadedPackages.add("micropip");
        }
        await runtime.runPythonAsync("import micropip\nawait micropip.install('seaborn')");
      }
      if (missing.includes("openpyxl")) {
        if (!loadedPackages.has("micropip")) {
          await runtime.loadPackage("micropip");
          loadedPackages.add("micropip");
        }
        await runtime.runPythonAsync("import micropip\nawait micropip.install('openpyxl')");
      }
      missing.forEach((name) => loadedPackages.add(name));
    } catch (error) {
      const message = `Unable to load ${missing.join(", ")} from the Pyodide package index. Check your internet connection and browser network access. Details: ${String(error)}`;
      sendStatus(executionId, `Python Error — package loading failed`);
      const packageError = new Error(message);
      packageError.kind = "package";
      throw packageError;
    }
  }

  if (requested.includes("requests") && !requestsAdapterConfigured) {
    try {
      runtime.runPython(`
import requests as _lab_requests
from pyodide.http import pyxhr as _lab_pyxhr

class _LabXHRResponse:
    _reason_phrases = {
        200: "OK", 201: "Created", 204: "No Content",
        301: "Moved Permanently", 302: "Found",
        400: "Bad Request", 401: "Unauthorized",
        403: "Forbidden", 404: "Not Found",
        429: "Too Many Requests", 500: "Internal Server Error",
        502: "Bad Gateway", 503: "Service Unavailable",
        504: "Gateway Timeout"
    }

    def __init__(self, response):
        self._response = response
        self.reason = self._reason_phrases.get(response.status_code, "")

    def __getattr__(self, name):
        return getattr(self._response, name)

def _lab_requests_get(url, *args, **kwargs):
    return _LabXHRResponse(_lab_pyxhr.get(url, *args, **kwargs))

_lab_requests.get = _lab_requests_get
`);
      requestsAdapterConfigured = true;
    } catch (error) {
      const message = `The requests package loaded, but its browser-compatible GET adapter could not be configured. Details: ${String(error)}`;
      sendStatus(executionId, "Python Error — requests setup failed");
      const packageError = new Error(message);
      packageError.kind = "package";
      throw packageError;
    }
  }
}

async function prepareOnlineCsv(runtime, code) {
  const urlMatch = code.match(/https:\/\/raw\.githubusercontent\.com\/mwaskom\/seaborn-data\/master\/iris\.csv/);
  if (!urlMatch) return null;

  let response;
  try {
    response = await fetch(urlMatch[0]);
  } catch (error) {
    throw new Error(`Unable to reach the online Iris CSV. Check your internet connection and browser CORS access. Details: ${String(error)}`);
  }
  if (!response.ok) {
    throw new Error(`Unable to fetch the online Iris CSV (HTTP ${response.status} ${response.statusText}). Check your connection and try again.`);
  }
  const csv = await response.text();
  if (!csv.trim()) throw new Error("The online Iris CSV response was empty.");

  runtime.globals.set("_lab_iris_csv_contents", csv);
  runtime.runPython(`
import io as _lab_csv_io
import pandas as _lab_csv_pd
_lab_original_read_csv = _lab_csv_pd.read_csv
def _lab_browser_read_csv(filepath_or_buffer, *args, **kwargs):
    if filepath_or_buffer == "${urlMatch[0]}":
        filepath_or_buffer = _lab_csv_io.StringIO(_lab_iris_csv_contents)
    return _lab_original_read_csv(filepath_or_buffer, *args, **kwargs)
_lab_csv_pd.read_csv = _lab_browser_read_csv
`);
  return () => {
    runtime.runPython("_lab_csv_pd.read_csv = _lab_original_read_csv");
    runtime.globals.delete("_lab_iris_csv_contents");
  };
}

function bytesToBase64(bytes) {
  let binary = "";
  const chunkSize = 0x8000;
  for (let offset = 0; offset < bytes.length; offset += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(offset, offset + chunkSize));
  }
  return btoa(binary);
}

function captureSavedPngFiles(runtime, code) {
  const names = [...code.matchAll(/\.savefig\s*\(\s*(['"])([^'"]+\.png)\1/g)]
    .map((match) => match[2]);
  return names.map((name) => {
    const bytes = runtime.FS.readFile(name);
    return { name: name.split(/[\\/]/).pop(), data: bytesToBase64(bytes) };
  });
}

function getEditorNamespace(runtime, editorKey) {
  if (!editorNamespaces.has(editorKey)) {
    editorNamespaces.set(editorKey, runtime.globals.get("dict")());
  }
  return editorNamespaces.get(editorKey);
}

function valueToText(value) {
  if (value === undefined || value === null) return "";
  try {
    const text = value.toString();
    return text === "None" ? "" : text;
  } finally {
    if (typeof value.destroy === "function") value.destroy();
  }
}

function captureMatplotlibFigures(runtime) {
  const globals = runtime.globals.get("dict")();
  let result;
  try {
    result = runtime.runPython(`
import base64 as _lab_base64
import io as _lab_io
import matplotlib.pyplot as _lab_pyplot
_lab_images = []
for _lab_number in _lab_pyplot.get_fignums():
    _lab_buffer = _lab_io.BytesIO()
    _lab_pyplot.figure(_lab_number).savefig(_lab_buffer, format="png", bbox_inches="tight")
    _lab_images.append(_lab_base64.b64encode(_lab_buffer.getvalue()).decode("ascii"))
    _lab_buffer.close()
_lab_pyplot.close("all")
_lab_images
`, { globals });
    return result.toJs();
  } finally {
    if (result && typeof result.destroy === "function") result.destroy();
    globals.destroy();
  }
}

function configureMatplotlib(runtime) {
  const globals = runtime.globals.get("dict")();
  try {
    runtime.runPython(
      "import matplotlib.pyplot as _lab_pyplot\n_lab_pyplot.show = lambda *args, **kwargs: None",
      { globals }
    );
  } finally {
    globals.destroy();
  }
}

async function execute(data) {
  const { executionId, editorKey, code } = data;
  try {
    const runtime = await getPyodide(executionId);
    await preparePackages(runtime, executionId, code);
    const namespace = getEditorNamespace(runtime, editorKey);
    if (packagesFor(code).includes("matplotlib")) configureMatplotlib(runtime);
    let stdout = "";
    let stderr = "";

    runtime.setStdout({ batched: (text) => { stdout += `${text}\n`; } });
    runtime.setStderr({ batched: (text) => { stderr += `${text}\n`; } });

    let restoreOnlineCsv = null;
    try {
      restoreOnlineCsv = await prepareOnlineCsv(runtime, code);
      const result = await runtime.runPythonAsync(code, { globals: namespace });
      const expressionOutput = valueToText(result);
      if (expressionOutput) stdout += `${expressionOutput}\n`;
      let figures = [];
      let files = [];
      if (packagesFor(code).includes("matplotlib")) {
        try {
          figures = captureMatplotlibFigures(runtime);
        } catch (error) {
          stderr += `Matplotlib figure capture failed: ${String(error)}\n`;
        }
      }
      if (/\.savefig\s*\(/.test(code)) {
        try {
          files = captureSavedPngFiles(runtime, code);
        } catch (error) {
          stderr += `Generated PNG download capture failed: ${String(error)}\n`;
        }
      }
      sendStatus(executionId, "Python Ready");
      self.postMessage({
        type: "result",
        executionId,
        success: true,
        output: stdout + (stderr ? `\n[Python stderr]\n${stderr}` : ""),
        figures,
        files
      });
    } catch (error) {
      const errorText = String(error);
      sendStatus(executionId, "Python Ready");
      self.postMessage({
        type: "result",
        executionId,
        success: false,
        output: `${stdout}${stderr ? `\n[Python stderr]\n${stderr}` : ""}${stdout || stderr ? "\n" : ""}[Python error]\n${errorText}`
      });
    } finally {
      if (restoreOnlineCsv) restoreOnlineCsv();
    }
  } catch (error) {
    sendStatus(executionId, `Python Error — ${error.kind === "package" ? "package setup failed" : "runtime initialization failed"}`);
    self.postMessage({
      type: "error",
      executionId,
      kind: error.kind || "runtime",
      message: String(error.message || error)
    });
  }
}

self.addEventListener("message", (event) => {
  if (event.data?.type !== "run") return;
  executionQueue = executionQueue
    .then(() => execute(event.data))
    .catch((error) => {
      self.postMessage({
        type: "error",
        executionId: event.data.executionId,
        kind: "runtime",
        message: String(error.message || error)
      });
    });
});
