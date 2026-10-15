const moduleData = [
  { number: 1, title: "Module 1", filename: "Module1INTRODUCTIONDS.pdf", path: "assets/modules/Module1INTRODUCTIONDS.pdf" },
  { number: 2, title: "Module 2", filename: "MODULE2DS.pdf", path: "assets/modules/MODULE2DS.pdf", convertedFromDocx: true },
  { number: 3, title: "Module 3" },
  { number: 4, title: "Module 4" },
  { number: 5, title: "Module 5" }
];

const experimentData = [
  {
    number: 1,
    title: "Working with Different Data Formats Using Pandas",
    aim: "To perform reading, writing and parsing operations on different data formats using the Pandas library in Python.",
    module: 2,
    courseCode: "22DS102006",
    softwareRequirements: ["Pandas", "NumPy", "io", "json", "openpyxl where required"],
    subExperiments: [
      {
        id: "1(a)",
        title: "Reading and Writing Data in Text Format",
        examples: [
          {
            id: "1a-program-1",
            title: "Read a delimited dataset using pd.read_csv()",
            generated: true,
            code: `import pandas as pd
from io import StringIO

csv_text = """Name,Age,Score
Ananya,20,88
Rahul,21,92
Sumiya,20,95
"""
df = pd.read_csv(StringIO(csv_text))

print("Comma-delimited dataset:")
print(df)`
          },
          {
            id: "1a-program-2",
            title: "Read tab-delimited data using pd.read_table()",
            generated: true,
            code: `import pandas as pd
from io import StringIO

tab_text = "Name\\tAge\\tScore\\nAnanya\\t20\\t88\\nRahul\\t21\\t92\\nSumiya\\t20\\t95\\n"
df = pd.read_table(StringIO(tab_text))

print("Tab-delimited dataset:")
print(df)`
          },
          {
            id: "1a-program-3",
            title: "Write a DataFrame into a text/CSV file using df.to_csv(index=False)",
            generated: true,
            code: `import pandas as pd

df = pd.DataFrame(
    {
        "Name": ["Ananya", "Rahul", "Sumiya"],
        "Age": [20, 21, 20],
        "Score": [88, 92, 95]
    }
)
df.to_csv("students.csv", index=False)

print("DataFrame written to students.csv without the index.")
print("Read-back verification:")
print(pd.read_csv("students.csv"))`
          }
        ]
      },
      {
        id: "1(b)",
        title: "Reading, Writing and Parsing Data in JSON Format",
        examples: [
          {
            id: "1b-program-1",
            title: "Read JSON data using pd.read_json()",
            generated: true,
            code: `import pandas as pd
from io import StringIO

json_text = """[
    {"name": "Ananya", "age": 20, "score": 88},
    {"name": "Rahul", "age": 21, "score": 92},
    {"name": "Sumiya", "age": 20, "score": 95}
]"""
df = pd.read_json(StringIO(json_text))

print("Data read from JSON:")
print(df)`
          },
          {
            id: "1b-program-2",
            title: "Parse nested JSON data using json.loads() and pd.json_normalize()",
            generated: true,
            code: `import json
import pandas as pd

json_text = """
{
    "students": [
        {"name": "Ananya", "department": "Data Science", "marks": {"python": 88, "statistics": 91}},
        {"name": "Rahul", "department": "Data Science", "marks": {"python": 92, "statistics": 86}},
        {"name": "Sumiya", "department": "Data Science", "marks": {"python": 95, "statistics": 94}}
    ]
}
"""
data = json.loads(json_text)
df = pd.json_normalize(data["students"], sep="_")

print("Flattened student records:")
print(df)`
          },
          {
            id: "1b-program-3",
            title: "Write DataFrame data into JSON format using df.to_json(), including the supplied records and columns examples",
            generated: true,
            code: `import pandas as pd

df = pd.DataFrame(
    {
        "Name": ["Ananya", "Rahul", "Sumiya"],
        "Age": [20, 21, 20],
        "Score": [88, 92, 95]
    }
)
records_json = df.to_json(orient="records", indent=2)
columns_json = df.to_json(orient="columns", indent=2)

print("JSON with records orientation:")
print(records_json)
print("\\nJSON with columns orientation:")
print(columns_json)`
          }
        ]
      },
      {
        id: "1(c)",
        title: "Reading and Writing Microsoft Excel Files",
        examples: [
          {
            id: "1c-program-1",
            title: "Read Excel data using pd.read_excel() or preserve the source's in-memory demonstration exactly as provided",
            generated: true,
            code: `import pandas as pd
from io import BytesIO

source = pd.DataFrame(
    {
        "Name": ["Ananya", "Rahul", "Sumiya"],
        "Department": ["Data Science", "Data Science", "Data Science"],
        "Score": [88, 92, 95]
    }
)
excel_file = BytesIO()
source.to_excel(excel_file, index=False)
excel_file.seek(0)

df = pd.read_excel(excel_file)
print("Data read from an in-memory Excel workbook:")
print(df)`
          },
          {
            id: "1c-program-2",
            title: "Select required Excel DataFrame columns and filter high scorers",
            generated: true,
            code: `import pandas as pd
from io import BytesIO

source = pd.DataFrame(
    {
        "Name": ["Ananya", "Rahul", "Sumiya"],
        "Department": ["Data Science", "Data Science", "Data Science"],
        "Score": [88, 72, 95],
        "Attendance": [92.0, 84.5, 96.5]
    }
)
excel_file = BytesIO()
source.to_excel(excel_file, index=False)
excel_file.seek(0)
df = pd.read_excel(excel_file)

selected_columns = df[["Name", "Score", "Attendance"]]
high_scorers = selected_columns[selected_columns["Score"] >= 85]

print("Selected columns:")
print(selected_columns)
print("\\nHigh scorers (Score >= 85):")
print(high_scorers)`
          },
          {
            id: "1c-program-3",
            title: "Write DataFrame data into an Excel file using the supplied to_excel() workflow or preserve its stated demonstration if no file-writing backend is available",
            generated: true,
            code: `import pandas as pd

df = pd.DataFrame(
    {
        "Name": ["Ananya", "Rahul", "Sumiya"],
        "Department": ["Data Science", "Data Science", "Data Science"],
        "Score": [88, 92, 95]
    }
)
df.to_excel("student_scores.xlsx", index=False)

print("DataFrame written to student_scores.xlsx without the index.")
print("Read-back verification:")
print(pd.read_excel("student_scores.xlsx"))`
          }
        ]
      }
    ]
  },
  {
    number: 2,
    title: "Interacting with Web APIs and Databases",
    aim: "To interact with web APIs (GitHub REST API) using requests and response.json(), convert and extract fields of interest into Pandas DataFrames, and interact with relational databases (SQLite) using corresponding SQL drivers for table creation, population, querying, Pandas bridging, updating, and deleting records.",
    module: 2,
    courseCode: "22DS102006",
    softwareRequirements: [
      "Operating System: Windows / Linux / macOS",
      "Python Runtime: Python 3.10+ / 3.11+",
      "Web API & HTTP Library: Python Requests (>= 2.31.0)",
      "Relational Database Driver: SQLite3 (Standard Python Library)",
      "Data Science & Tabular Toolkit: Pandas (>= 2.0.0)",
      "Target Web API: GitHub REST API v3",
      "Interactive Environment: Digital Lab Manual Python Kernel / CodeRunner Sandbox"
    ],
    theory: `Modern Data Science pipelines depend on automated data extraction from external web services and operational relational databases:

1. INTERACTING WITH WEB APIs (REST Architecture):
Representational State Transfer (REST) APIs expose resources over HTTP. The Python requests library provides high-level methods to issue HTTP requests:
- requests.get(url, headers, timeout): Issues an HTTP GET request to retrieve server data.
- Response Object: Encapsulates the HTTP status code (200 OK, 404 Not Found, 403 Forbidden), response headers, content type, and body.
- response.json(): Decodes the raw UTF-8 serialized byte stream into native Python data structures (lists of dictionaries).
- pd.DataFrame(data): Constructs a 2D labeled tabular DataFrame from dictionaries or records.
- Field Extraction: Enables isolating specific attributes of interest (such as id, number, title, state, user, created_at, updated_at, and html_url) into analytical dataframes while safely handling missing attributes and network exceptions.

2. INTERACTING WITH RELATIONAL DATABASES (SQLite Engine):
Relational Database Management Systems (RDBMS) organize data into structured tables governed by strict schemas, primary keys, and ACID (Atomicity, Consistency, Isolation, Durability) guarantees.
- SQLite is an embedded relational database engine. Unlike client-server databases such as PostgreSQL or MySQL, SQLite is serverless and does not require a separate database server process. It is self-contained and stores the entire database in a single disk file or in memory.
- Python provides built-in SQLite support through the sqlite3 library.
- Key SQL Operations:
  • Connection: sqlite3.connect('datascience_lab.db')
  • Table Creation (DDL): CREATE TABLE IF NOT EXISTS ...
  • Populating Records (DML): INSERT INTO ... VALUES (...) using parameterized placeholders (?)
  • Querying Records: SELECT ... WHERE ...
  • Moving SQL into DataFrame: pd.read_sql_query(query, conn)
  • Updating Records: UPDATE ... SET ... WHERE ...
  • Deleting Records: DELETE FROM ... WHERE ...
  • Safe Resource Cleanup: Committing transactions and closing the connection via conn.close().`,
    procedure: `Initialize the Python environment and verify imports for requests, pandas, json, and sqlite3.
Section 2(a): Send an HTTP GET request to the pandas GitHub issues API endpoint (https://api.github.com/repos/pandas-dev/pandas/issues?per_page=30).
Section 2(a): Verify response status code (200 OK) and decode the payload using response.json().
Section 2(a): Convert the JSON dataset into a pandas DataFrame.
Section 2(a): Extract designated fields of interest (id, number, title, state, user, created_at, updated_at, html_url) and render in a clean responsive table.
Section 2(b): Establish a database connection to SQLite ('datascience_lab.db') using sqlite3.connect().
Section 2(b): Execute SQL DDL statement to create the 'students' table with typed columns and primary key.
Section 2(b): Insert/populate student records into the table using cursor.executemany() and commit the transaction.
Section 2(b): Execute SQL SELECT query with filtering conditions to retrieve matching records.
Section 2(b): Move SQL query results directly into a pandas DataFrame using pd.read_sql_query().
Section 2(b): Update specific records using SQL UPDATE and verify modification in the DataFrame.
Section 2(b): Delete specific records using SQL DELETE, display the final verified table in DataFrame, and safely close the connection.`,
    result: "Web API integration with the pandas GitHub repository was successfully implemented using requests and response.json(), with extracted fields structured into clean pandas DataFrames and rendered in responsive tables. Relational database operations were successfully executed using Python's sqlite3 library (demonstrating serverless RDBMS capabilities) across table creation, record population, SELECT querying, DataFrame conversion, record updates, record deletions, and safe connection closure with 100% ACID compliance. This is the supplied report wording, not a claim that this website executed the programs.",
    sourceNotes: [
      "The supplied text rendering split several newline-containing print() strings across visual lines. Those display-only breaks are represented in the editor as escaped newline sequences (\\n); the program logic is unchanged.",
      "The supplied Program 3 reference preview is labeled 6 rows × 5 columns and shows six records, although the code calls head(5). Its terminal output separately reports a 30-row × 32-column DataFrame and displays five preview rows. These supplied references are inconsistent; the code is retained."
    ],
    apiEndpoint: "https://api.github.com/repos/pandas-dev/pandas/issues?per_page=30",
    subExperiments: [
      {
        id: "2(a)",
        title: "Interacting with Web APIs",
        examples: [
          {
            id: "2a-program-1",
            title: "Import Libraries",
            code: `import requests
import pandas as pd
import json

# Verify and display imported library versions
print("Python Data Science & Web API Libraries Imported Successfully:")
print(f"-> Requests Version : {requests.__version__}")
print(f"-> Pandas Version   : {pd.__version__}")
print(f"-> JSON Module      : {json.__name__} (Standard Library)")
print("\\nEnvironment verified: Ready for Web API communication & DataFrame creation.")`,
            referenceOutput: `Python Data Science & Web API Libraries Imported Successfully:
-> Requests Version : 2.31.0
-> Pandas Version   : 2.2.1
-> JSON Module      : json (Standard Library)

Environment verified: Ready for Web API communication & DataFrame creation.`
          },
          {
            id: "2a-program-2",
            title: "Fetch GitHub Issues",
            code: `import requests

# Target Endpoint: Pandas GitHub Repository Issues API (Last 30 Issues)
url = "https://api.github.com/repos/pandas-dev/pandas/issues?per_page=30"

try:
    print("Sending GET request to GitHub API...")
    print(f"Target URL: {url}")

    # Send GET request with custom User-Agent and timeout
    response = requests.get(url, headers={'User-Agent': 'MBU-DataScienceLab/2.0'}, timeout=10)

    # Validate HTTP response status
    response.raise_for_status()

    # Convert API response into Python data using response.json()
    issues_data = response.json()

    print(f"\\nResponse Status Code : {response.status_code} ({response.reason})")
    print(f"Content-Type         : {response.headers.get('content-type', 'application/json')}")
    print(f"Total Issues Fetched : {len(issues_data)}")
    print(f"Decoded Data Type    : {type(issues_data).__name__}")
    print(f"First Issue Title    : '{issues_data[0].get('title', 'N/A')}'")

except requests.exceptions.RequestException as err:
    print(f"API Request Failed: {err}")`,
            referenceOutput: `Sending GET request to GitHub API...
Target URL: https://api.github.com/repos/pandas-dev/pandas/issues?per_page=30

Response Status Code : 200 (OK)
Content-Type         : application/json; charset=utf-8
Total Issues Fetched : 30
Decoded Data Type    : list
First Issue Title    : 'BUG: Indexing MultiIndex with categorical slices'`
          },
          {
            id: "2a-program-3",
            title: "Convert JSON Data to DataFrame",
            code: `import requests
import pandas as pd

url = "https://api.github.com/repos/pandas-dev/pandas/issues?per_page=30"

try:
    response = requests.get(url, headers={'User-Agent': 'MBU-DataScienceLab/2.0'}, timeout=10)
    response.raise_for_status()
    issues_data = response.json()

    # Convert the extracted JSON data into a pandas DataFrame
    df_raw = pd.DataFrame(issues_data)

    print("Constructed pandas DataFrame from GitHub Issues JSON:")
    print(f"DataFrame Dimensions: {df_raw.shape[0]} rows x {df_raw.shape[1]} columns")
    print(f"\\nTotal Columns: {len(df_raw.columns)}")
    print("Preview of Top Columns:")
    print(list(df_raw.columns[:8]))
    print("\\nDataFrame Preview (First 5 Rows):")
    print(df_raw[['number', 'title', 'state', 'created_at']].head(5))

except Exception as err:
    print(f"Error converting JSON data to DataFrame: {err}")`,
            referenceOutput: `Constructed pandas DataFrame from GitHub Issues JSON:
DataFrame Dimensions: 30 rows x 32 columns

Total Columns: 32
Preview of Top Columns:
['id', 'node_id', 'number', 'title', 'user', 'labels', 'state', 'locked']

DataFrame Preview (First 5 Rows):
   number                                              title state            created_at
0   59342  BUG: Indexing MultiIndex with categorical slices   open  2024-04-12T14:22:08Z
1   59341  ENH: Add Arrow-backed StringArray to_datetime      open  2024-04-12T11:05:43Z
2   59340  DOC: Improve DataFrame.pivot_table examples        open  2024-04-12T09:18:22Z
3   59339  PERF: Optimize Series.isin() for integer dtypes    open  2024-04-11T20:44:11Z
4   59338  BUG: GroupBy.transform with nullable boolean       open  2024-04-11T18:32:09Z

The source-rendered DataFrame result separately shows 6 rows × 5 columns and six records despite head(5).`
          },
          {
            id: "2a-program-4",
            title: "Extract Fields of Interest",
            code: `import requests
import pandas as pd

url = "https://api.github.com/repos/pandas-dev/pandas/issues?per_page=30"

try:
    response = requests.get(url, headers={'User-Agent': 'MBU-DataScienceLab/2.0'}, timeout=10)
    response.raise_for_status()
    issues_data = response.json()

    # Extract useful fields of interest
    extracted_records = []
    for issue in issues_data[:30]:
        user_login = issue.get('user', {}).get('login', 'N/A') if isinstance(issue.get('user'), dict) else 'N/A'
        extracted_records.append({
            'id': issue.get('id'),
            'number': issue.get('number'),
            'title': issue.get('title'),
            'state': issue.get('state'),
            'user': user_login,
            'created_at': (issue.get('created_at') or '')[:10],
            'updated_at': (issue.get('updated_at') or '')[:10],
            'html_url': issue.get('html_url')
        })

    # Convert extracted records into pandas DataFrame
    df_extracted = pd.DataFrame(extracted_records)

    print("EXTRACTED FIELDS OF INTEREST (LATEST 30 PANDAS ISSUES):")
    print(f"Total Extracted Rows : {len(df_extracted)}")
    print(f"Fields of Interest   : {list(df_extracted.columns)}")
    print("\\nSummary Table (First 8 Issues):")
    print(df_extracted[['number', 'title', 'state', 'user', 'created_at']].head(8).to_string(index=False))

except Exception as err:
    print(f"Error extracting fields of interest: {err}")`,
            referenceOutput: `EXTRACTED FIELDS OF INTEREST (LATEST 30 PANDAS ISSUES):
Total Extracted Rows : 30
Fields of Interest   : ['id', 'number', 'title', 'state', 'user', 'created_at', 'updated_at', 'html_url']

id         number  title                                                         state   user                  created_at  updated_at  html_url
2240981101 59342   BUG: Indexing MultiIndex with categorical slices              open    mroeschke              2024-04-12  2024-04-12  https://github.com/pandas-dev/pandas/issues/59342
2240871102 59341   ENH: Add Arrow-backed StringArray to_datetime speedups         open    jorisvandenbossche     2024-04-12  2024-04-12  https://github.com/pandas-dev/pandas/issues/59341
2240751103 59340   DOC: Improve DataFrame.pivot_table examples with aggfunc dict  open    MarcoGorelli           2024-04-12  2024-04-12  https://github.com/pandas-dev/pandas/issues/59340
2240631104 59339   PERF: Optimize Series.isin() for integer dtypes               open    phofl                  2024-04-11  2024-04-12  https://github.com/pandas-dev/pandas/issues/59339
2240521105 59338   BUG: GroupBy.transform with nullable boolean casting to object open    rhshadrach             2024-04-11  2024-04-12  https://github.com/pandas-dev/pandas/issues/59338
2240411106 59337   CI: Update GitHub Actions checkout to v4 in wheel build        closed  mattip                 2024-04-11  2024-04-11  https://github.com/pandas-dev/pandas/issues/59337
2240301107 59336   ENH: Support PyCapsule protocol in DataFrame exchange          open    willayd                2024-04-11  2024-04-12  https://github.com/pandas-dev/pandas/issues/59336
2240191108 59335   BUG: DataFrame.to_json(orient="table") serializing NaT as null open    Dr-Irv                 2024-04-11  2024-04-11  https://github.com/pandas-dev/pandas/issues/59335
2240081109 59334   TST: Add regression test for Series.replace with regex dict    open    attack68               2024-04-11  2024-04-11  https://github.com/pandas-dev/pandas/issues/59334
2239971110 59333   TYP: Annotate DataFrame.merge on positional parameters         open    twoertwein             2024-04-11  2024-04-11  https://github.com/pandas-dev/pandas/issues/59333

This source table is a 10-row preview of a 30-row DataFrame. Its issue data is dated 2024-04-11 and 2024-04-12.`
          }
        ]
      },
      {
        id: "2(b)",
        title: "Interacting with Relational Databases",
        examples: [
          {
            id: "2b-program-1",
            title: "Connect to SQLite Database",
            code: `import sqlite3

# Connect to SQLite database (creates 'datascience_lab.db' if it does not exist)
# SQLite is a self-contained, serverless relational database requiring no separate server
conn = sqlite3.connect('datascience_lab.db')
cursor = conn.cursor()

print("Successfully connected to SQLite database: 'datascience_lab.db'")
print("SQLite Version      :", sqlite3.sqlite_version)
print("Connection Object   :", conn)
print("Architecture        : Embedded Serverless Relational Database (ACID Compliant)")
conn.close()`,
            referenceOutput: `Successfully connected to SQLite database: 'datascience_lab.db'
SQLite Version      : 3.42.0
Connection Object   : <sqlite3.Connection object at 0x000001F82A41C0>
Architecture        : Embedded Serverless Relational Database (ACID Compliant)`
          },
          {
            id: "2b-program-2",
            title: "Create Table",
            code: `import sqlite3

conn = sqlite3.connect('datascience_lab.db')
cursor = conn.cursor()

# Data Definition Language (DDL): Create 'students' relational table
create_table_query = """
CREATE TABLE IF NOT EXISTS students (
    student_id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    department TEXT NOT NULL,
    cgpa REAL,
    attendance REAL,
    grade TEXT
);
"""
cursor.execute(create_table_query)
conn.commit()

print("Table 'students' created successfully.")
print("\\nInspecting Schema via PRAGMA table_info(students):")
cursor.execute("PRAGMA table_info(students);")
columns = cursor.fetchall()
for col in columns:
    print(f"  Col #{col[0]}: {col[1]:12} (Type: {col[2]:8}, NotNull: {col[3]}, PK: {col[5]})")

conn.close()`,
            referenceOutput: `Table 'students' created successfully.

Inspecting Schema via PRAGMA table_info(students):
Col #0: student_id   (Type: INTEGER, NotNull: 0, PK: 1)
Col #1: name         (Type: TEXT, NotNull: 1, PK: 0)
Col #2: department   (Type: TEXT, NotNull: 1, PK: 0)
Col #3: cgpa         (Type: REAL, NotNull: 0, PK: 0)
Col #4: attendance   (Type: REAL, NotNull: 0, PK: 0)
Col #5: grade        (Type: TEXT, NotNull: 0, PK: 0)`
          },
          {
            id: "2b-program-3",
            title: "Insert / Populate Records",
            code: `import sqlite3

conn = sqlite3.connect('datascience_lab.db')
cursor = conn.cursor()

# Reset existing rows for clean reproducible execution
cursor.execute("DELETE FROM students;")

# Student records dataset
student_records = [
    (101, 'Shaik Sumiya', 'Data Science', 9.12, 96.5, 'A+'),
    (102, 'Ananya Sharma', 'Data Science', 8.85, 92.0, 'A'),
    (103, 'Rahul Verma', 'Data Science', 7.94, 84.5, 'B+'),
    (104, 'Pooja Reddy', 'Data Science', 9.45, 98.0, 'A+'),
    (105, 'Karthik Nair', 'Data Science', 8.20, 89.0, 'A')
]

insert_query = """
INSERT INTO students (student_id, name, department, cgpa, attendance, grade)
VALUES (?, ?, ?, ?, ?, ?);
"""
cursor.executemany(insert_query, student_records)
conn.commit()

print(f"Successfully inserted {cursor.rowcount} records into 'students' table.")
print("ACID Transaction Committed: Records persisted to 'datascience_lab.db'.")
print("Row IDs Allocated: 101, 102, 103, 104, 105")
conn.close()`,
            referenceOutput: `Successfully inserted 5 records into 'students' table.
ACID Transaction Committed: Records persisted to 'datascience_lab.db'.
Row IDs Allocated: 101, 102, 103, 104, 105`
          },
          {
            id: "2b-program-4",
            title: "Select Data",
            code: `import sqlite3

conn = sqlite3.connect('datascience_lab.db')
cursor = conn.cursor()

# Execute SQL SELECT query with filtering criteria
cursor.execute("SELECT student_id, name, cgpa, attendance, grade FROM students WHERE cgpa >= 8.5 ORDER BY cgpa DESC;")
rows = cursor.fetchall()

print("Selected High-Performing Records (CGPA >= 8.5):")
print(f"{'ID':<6} {'Name':<16} {'CGPA':<8} {'Attendance':<12} {'Grade':<6}")
print("-" * 52)
for row in rows:
    print(f"{row[0]:<6} {row[1]:<16} {row[2]:<8.2f} {row[3]:<11.1f}% {row[4]:<6}")

conn.close()`,
            referenceOutput: `Selected High-Performing Records (CGPA >= 8.5):
ID     Name             CGPA     Attendance   Grade
----------------------------------------------------
104    Pooja Reddy      9.45     98.0%        A+
101    Shaik Sumiya     9.12     96.5%        A+
102    Ananya Sharma    8.85     92.0%        A`
          },
          {
            id: "2b-program-5",
            title: "Move SQL Data to Pandas DataFrame",
            code: `import sqlite3
import pandas as pd

conn = sqlite3.connect('datascience_lab.db')

# Move relational database records directly into DataFrame using pd.read_sql_query()
query = "SELECT * FROM students;"
df_db = pd.read_sql_query(query, conn)

print("Relational Database Records moved into pandas DataFrame:")
print(df_db)
print(f"\\nDataFrame Shape: {df_db.shape} (Rows x Columns)")
print("\\nDataFrame Column Data Types:")
print(df_db.dtypes)

conn.close()`,
            referenceOutput: `Relational Database Records moved into pandas DataFrame:
   student_id           name    department  cgpa  attendance grade
0         101   Shaik Sumiya  Data Science  9.12        96.5    A+
1         102  Ananya Sharma  Data Science  8.85        92.0     A
2         103    Rahul Verma  Data Science  7.94        84.5    B+
3         104    Pooja Reddy  Data Science  9.45        98.0    A+
4         105   Karthik Nair  Data Science  8.20        89.0     A

DataFrame Shape: (5, 6) (Rows x Columns)
DataFrame Column Data Types:
student_id      int64
name           object
department     object
cgpa          float64
attendance    float64
grade          object
dtype: object`
          },
          {
            id: "2b-program-6",
            title: "Update Records",
            code: `import sqlite3
import pandas as pd

conn = sqlite3.connect('datascience_lab.db')
cursor = conn.cursor()

# Update Rahul Verma's CGPA and Grade (student_id = 103)
update_sql = """
UPDATE students
SET cgpa = 8.40, grade = 'A'
WHERE student_id = 103;
"""
cursor.execute(update_sql)
conn.commit()
print(f"Record updated successfully. (Rows affected: {cursor.rowcount})")

# Verify update via pandas DataFrame query
df_updated = pd.read_sql_query("SELECT student_id, name, cgpa, grade FROM students WHERE student_id = 103;", conn)
print("\\nVerified Updated Record in DataFrame:")
print(df_updated)

conn.close()`,
            referenceOutput: `Record updated successfully. (Rows affected: 1)

Verified Updated Record in DataFrame:
   student_id         name  cgpa grade
0         103  Rahul Verma   8.4     A`
          },
          {
            id: "2b-program-7",
            title: "Delete Records",
            code: `import sqlite3
import pandas as pd

conn = sqlite3.connect('datascience_lab.db')
cursor = conn.cursor()

# Delete record for student_id = 105
delete_sql = "DELETE FROM students WHERE student_id = 105;"
cursor.execute(delete_sql)
conn.commit()
print(f"Record with student_id = 105 deleted. (Rows affected: {cursor.rowcount})")

# Verify remaining records and display final table in DataFrame
df_final = pd.read_sql_query("SELECT * FROM students ORDER BY student_id ASC;", conn)
print(f"\\nFinal Verified Database State ({len(df_final)} remaining records):")
print(df_final.to_string(index=False))

# Close database connection safely
conn.close()
print("\\nDatabase connection closed safely.")`,
            referenceOutput: `Record with student_id = 105 deleted. (Rows affected: 1)

Final Verified Database State (4 remaining records):
student_id  name           department    cgpa  attendance  grade
101         Shaik Sumiya   Data Science  9.12  96.5        A+
102         Ananya Sharma  Data Science  8.85  92.0        A
103         Rahul Verma    Data Science  8.40  84.5        A
104         Pooja Reddy    Data Science  9.45  98.0        A+
Database connection closed safely.`
          }
        ]
      }
    ]
  },
  {
    number: 3,
    title: "Data Cleaning and Preparation",
    module: 2,
    courseCode: "22DS102006",
    institution: "Mohan Babu University",
    student: "Shaik Sumiya",
    rollNumber: "24102A030118",
    faculty: "S. Bosu Babu, Assistant Professor",
    aim: "",
    softwareRequirements: ["Python 3", "Pandas", "NumPy", "re (Python standard library)"],
    theory: "",
    procedure: "",
    result: "",
    subExperiments: [
      {
        id: "3(a)",
        title: "Data Cleaning – Missing Data and Duplicates",
        examples: [
          {
            id: "3a-program-1",
            title: "Identify Missing Data Using isna()",
            code: `import numpy as np
import pandas as pd

data = {'A': [1, 2, 3, np.nan], 'B': [4, np.nan, np.nan, 7]}
df = pd.DataFrame(data)

print("DataFrame:")
print(df)
print("\\nMissing Data Detection (isna):")
print(df.isna())`
          },
          {
            id: "3a-program-2",
            title: "Filter Missing Data Using dropna()",
            code: `import numpy as np
import pandas as pd

data = {'A': [1, 2, 3, np.nan], 'B': [4, np.nan, np.nan, 7]}
df = pd.DataFrame(data)

df_cleaned = df.dropna()
print("DataFrame after dropna():")
print(df_cleaned)`
          },
          {
            id: "3a-program-3",
            title: "Fill Missing Data Using fillna()",
            code: `import numpy as np
import pandas as pd

data = {'A': [1, 2, 3, np.nan], 'B': [4, np.nan, np.nan, 7]}
df = pd.DataFrame(data)

df_filled = df.fillna(0)
print("DataFrame after fillna(0):")
print(df_filled)`
          },
          {
            id: "3a-program-4",
            title: "Remove Duplicate Data",
            code: `import pandas as pd

data = {'A': [1, 2, 2, 3], 'B': ['x', 'y', 'y', 'z']}
df = pd.DataFrame(data)

print("Original DataFrame:")
print(df)
print("\\nDuplicate Rows Mask:")
print(df.duplicated())

print("\\nDataFrame after drop_duplicates():")
df_dedup = df.drop_duplicates()
print(df_dedup)`
          }
        ]
      },
      {
        id: "3(b)",
        title: "Data Transformation – map(), replace(), and rename()",
        examples: [
          {
            id: "3b-program-5",
            title: "Transform Values Using map()",
            code: `import pandas as pd

df = pd.DataFrame({'gender': ['male', 'female', 'male']})
df['gender_num'] = df['gender'].map({'male': 0, 'female': 1})

print("DataFrame with mapped numeric column:")
print(df)`
          },
          {
            id: "3b-program-6",
            title: "Replace Values Using replace()",
            code: `import pandas as pd

df = pd.DataFrame({'gender': ['male', 'female', 'male']})
df_replaced = df.replace({'male': 'M', 'female': 'F'})

print("Original DataFrame:")
print(df)
print("\\nDataFrame after replace():")
print(df_replaced)`
          },
          {
            id: "3b-program-7",
            title: "Rename Columns Using rename()",
            code: `import pandas as pd

df = pd.DataFrame({'gender': ['male', 'female', 'male']})
df_renamed = df.rename(columns={'gender': 'Gender'})

print("Transformed DataFrame (renamed column):")
print(df_renamed)`
          }
        ]
      },
      {
        id: "3(c)",
        title: "Random Sampling and Outlier Detection",
        examples: [
          {
            id: "3c-program-8",
            title: "Normally Distributed Random Sampling and Outlier Detection",
            code: `import numpy as np
import pandas as pd

np.random.seed(42)

data = pd.DataFrame(
    np.random.randn(100, 3),
    columns=['X', 'Y', 'Z']
)

outliers = (data > 3) | (data < -3)

print("Count of detected outliers per column (|z| > 3):")
print(outliers.sum())

print("\\nTotal outliers across all dimensions:", outliers.values.sum())
print("\\nFirst 5 rows of normally distributed sample:")
print(data.head())`
          }
        ]
      },
      {
        id: "3(d)",
        title: "Text Manipulation with Regular Expressions",
        examples: [
          {
            id: "3d-program-9",
            title: "Split Text Using Variable Whitespace",
            code: `import re

text = "This is \\t a\\n test"
split_text = re.split(r'\\s+', text)

print("Original Text:", repr(text))
print("Split Result:", split_text)`
          },
          {
            id: "3d-program-10",
            title: "Extract Email Patterns Using re.findall()",
            code: `import re

text = "Mohan Babu University contacts: info@mbu.asia, support@mbu.edu.in, student@mbu.ac.in"
pattern = r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}'
matches = re.findall(pattern, text)

print("Text to search:", text)
print("\\nMatched Email Patterns:")
print(matches)`
          }
        ]
      }
    ]
  },
  {
    number: 4,
    title: "Data Wrangling",
    subExperiments: [
      {
        id: "4.1",
        title: "Hierarchical Indexing",
        aim: "To create a Pandas Series with hierarchical (multi-level) indexing using a list of lists and to select subsets of data using partial indexing at the outer and inner levels.",
        description: "MultiIndex.from_arrays() creates Department and Branch index levels. Use .loc['Engineering'] to select an outer-level group and .loc[('Engineering', 'CSE')] to select one record.",
        code: `import pandas as pd

index = [
    ['Engineering', 'Engineering', 'Science', 'Science'],
    ['CSE', 'ECE', 'Physics', 'Chemistry']
]
multi_index = pd.MultiIndex.from_arrays(
    index,
    names=['Department', 'Branch']
)
marks = pd.Series(
    [85, 78, 92, 88],
    index=multi_index
)

print("Original Series:")
print(marks)
print("\\nData for Engineering:")
print(marks.loc['Engineering'])
print("\\nData for CSE:")
print(marks.loc[('Engineering', 'CSE')])
print("\\nData for Science:")
print(marks.loc['Science'])`,
        result: `Original Series:
Department   Branch
Engineering  CSE         85
             ECE         78
Science      Physics     92
             Chemistry   88
dtype: int64

Data for Engineering:
Branch
CSE    85
ECE    78
dtype: int64

Data for CSE:
85

Data for Science:
Branch
Physics      92
Chemistry    88
dtype: int64`,
        explanation: "The output shows the full two-level Series, the Engineering subset, the Engineering/CSE value (85), and the Science subset."
      },
      {
        id: "4.2",
        title: "Stack and Unstack",
        aim: "To rearrange tabular data with hierarchical indexing using the Pandas unstack() and stack() methods.",
        description: "unstack() moves the inner row-index level (Branch) into columns. stack() moves those column labels back into the hierarchical row index.",
        code: `import pandas as pd

index = pd.MultiIndex.from_tuples(
    [
        ('Engineering', 'CSE'),
        ('Engineering', 'ECE'),
        ('Science', 'Physics'),
        ('Science', 'Chemistry')
    ],
    names=['Department', 'Branch']
)
data = pd.DataFrame(
    {
        '2025': [85, 78, 92, 88],
        '2026': [90, 82, 95, 91]
    },
    index=index
)

print("Original Tabular Data:")
print(data)
unstacked_data = data.unstack()
print("\\nData after Unstack():")
print(unstacked_data)
stacked_data = unstacked_data.stack()
print("\\nData after Stack():")
print(stacked_data)`,
        result: "The example prints the original Department/Branch table, the unstacked table with Branch values as columns, and the data stacked back into hierarchical rows.",
        explanation: "unstack() reshapes index values into columns; stack() reverses the reshape. The values and two index levels are retained."
      },
      {
        id: "4.3",
        title: "Merge and Combine",
        aim: "To merge two Pandas DataFrames using their indexes as the merge key and combine overlapping data with combine_first().",
        description: "An outer index merge retains every index from either DataFrame. combine_first() keeps existing values in df1 and fills its missing values with corresponding values from df2.",
        code: `import pandas as pd

df1 = pd.DataFrame(
    {
        'Name': ['Ravi', 'Sita', 'Arun'],
        'Marks': [85, None, 78],
        'Grade': ['A', 'B', None]
    },
    index=[101, 102, 103]
)
df2 = pd.DataFrame(
    {
        'Name': ['Ravi', 'Sita', 'Kiran'],
        'Marks': [90, 88, 82],
        'Grade': [None, 'A', 'B']
    },
    index=[101, 102, 104]
)

merged = pd.merge(
    df1,
    df2,
    left_index=True,
    right_index=True,
    how='outer',
    suffixes=('_DF1', '_DF2')
)
print("Merged DataFrame:")
print(merged)
print("\\nDataFrame after combine_first():")
print(df1.combine_first(df2))`,
        result: "The outer merge includes index values 101–104 and suffixes overlapping columns. combine_first() fills Sita's missing Marks with 88 and adds Kiran at index 104.",
        explanation: "The merged result shows both source values side by side. combine_first() prioritizes non-missing values in the first DataFrame and fills only its gaps."
      },
      {
        id: "4.4",
        title: "Additional Hierarchical Indexing",
        aim: "To create and select values from a Series with a two-level hierarchical index.",
        description: "This additional example follows the supplied program's use of a random Series indexed by letter and number, then selects one outer group and the values at inner level 1.",
        code: `import numpy as np
import pandas as pd

data = pd.Series(
    np.random.randn(6),
    index=[
        ['a', 'a', 'b', 'b', 'c', 'c'],
        [1, 2, 1, 2, 1, 2]
    ]
)
print(data)
print("\\nValues for b:")
print(data['b'])
print("\\nValues at inner level 1:")
print(data[:, 1])`
      },
      {
        id: "4.5",
        title: "Additional Stack and Unstack",
        aim: "To reshape a two-level Series with the unstack() and stack() methods.",
        description: "This example continues the additional hierarchical-indexing example by moving the inner index level to columns and stacking the result back into rows.",
        code: `import numpy as np
import pandas as pd

data = pd.Series(
    np.random.randn(6),
    index=[
        ['a', 'a', 'b', 'b', 'c', 'c'],
        [1, 2, 1, 2, 1, 2]
    ]
)
unstacked_data = data.unstack()
print("After unstack():")
print(unstacked_data)
print("\\nAfter stack():")
print(unstacked_data.stack())`
      },
      {
        id: "4.6",
        title: "Additional Merge and Combine",
        aim: "To combine overlapping DataFrame values by filling missing entries from a second DataFrame.",
        description: "The supplied additional example uses combine_first() so values in the first DataFrame take priority and missing values are filled from the second.",
        code: `import numpy as np
import pandas as pd

df1 = pd.DataFrame({
    'a': [1, np.nan, 3],
    'b': [4, 5, 6]
})
df2 = pd.DataFrame({
    'a': [7, 8, 9],
    'b': [np.nan, 11, 12]
})
combined = df1.combine_first(df2)
print(combined)`
      }
    ]
  }
];

const experiment5Data = {
  number: 5,
  title: "Perform Data Visualization with Matplotlib and Seaborn Considering an Online Dataset for Processing",
  module: 2,
  courseCode: "22DS102006",
  institution: "Mohan Babu University",
  student: "Shaik Sumiya",
  rollNumber: "24102A030118",
  faculty: "S. Bosu Babu, Assistant Professor",
  aim: "To perform data visualization using Matplotlib and Seaborn by loading an online dataset, processing the data, and representing it using different types of plots such as line plot, bar plot, histogram, and scatter plot.",
  softwareRequirements: ["Python 3.x", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook / Google Colab / Python IDE"],
  syntax: "Read an online CSV dataset: pd.read_csv(\"URL\")\nMatplotlib: plt.plot(x, y), plt.xlabel(\"X-axis\"), plt.ylabel(\"Y-axis\"), plt.title(\"Title\"), plt.show()\nSeaborn: sns.scatterplot(data=df, x=\"column1\", y=\"column2\")",
  subExperiments: [
    {
      id: "5.1",
      title: "Line Plot with Titles, Axis Labels, Ticks, Annotations and Save to File",
      aim: "To create a line plot using Matplotlib by setting the title, axis labels, ticks, tick labels, and annotations on subplots, and save the generated plot to an image file.",
      syntax: "fig, ax = plt.subplots(2, 1, figsize=(10, 8))\nax.set_title(\"Title\")\nax.set_xlabel(\"X-axis Label\")\nax.set_ylabel(\"Y-axis Label\")\nax.set_xticks(x)\nax.set_xticklabels(labels)\nax.annotate(\"Text\", xy=(x, y), xytext=(x1, y1), arrowprops=dict(arrowstyle=\"->\"))\nplt.savefig(\"filename.png\", dpi=300, bbox_inches=\"tight\")",
      theory: "A line plot connects observations to show change across an ordered sequence. Matplotlib subplots allow the sales and expenses series to be displayed independently. Titles, axis labels, ticks, tick labels, legends, grids, and annotations make the values readable; savefig() writes the figure to an image file.",
      procedure: "Create the monthly sales and expenses series; create two vertical subplots; draw and annotate each series; set titles, labels, ticks, legends and grids; add an overall title; apply tight layout; save at 300 DPI with a tight bounding box; display the figure.",
      output: "The source describes two subplots under “Monthly Sales and Expenses Analysis”: Monthly Sales (120, 150, 180, 160, 220, 250) and Monthly Expenses (80, 100, 120, 110, 140, 160), with the highest sales and highest expense annotated. It specifies saving monthly_sales_expenses.png at 300 DPI.",
      result: "Thus, a line plot with titles, axis labels, ticks, tick labels, annotations, and multiple subplots was successfully created using Matplotlib and saved to an image file.",
      examples: [{
        id: "exp5-program-1",
        sourceDocument: true,
        programNumber: 1,
        title: "Monthly Sales and Expenses Line Plot",
        code: `import matplotlib.pyplot as plt

# Data
months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
sales = [120, 150, 180, 160, 220, 250]
expenses = [80, 100, 120, 110, 140, 160]

# Create subplots
fig, ax = plt.subplots(2, 1, figsize=(10, 8))

# Subplot 1: Sales
ax[0].plot(
    months,
    sales,
    marker="o",
    linewidth=2,
    label="Sales"
)
ax[0].set_title("Monthly Sales")
ax[0].set_xlabel("Month")
ax[0].set_ylabel("Sales")
ax[0].set_xticks(range(len(months)))
ax[0].set_xticklabels(months)
ax[0].annotate(
    "Highest Sales",
    xy=(5, 250),
    xytext=(3.5, 270),
    arrowprops=dict(arrowstyle="->")
)
ax[0].legend()
ax[0].grid(True)

# Subplot 2: Expenses
ax[1].plot(
    months,
    expenses,
    marker="s",
    linewidth=2,
    label="Expenses"
)
ax[1].set_title("Monthly Expenses")
ax[1].set_xlabel("Month")
ax[1].set_ylabel("Expenses")
ax[1].set_xticks(range(len(months)))
ax[1].set_xticklabels(months)
ax[1].annotate(
    "Highest Expense",
    xy=(5, 160),
    xytext=(3.5, 180),
    arrowprops=dict(arrowstyle="->")
)
ax[1].legend()
ax[1].grid(True)

fig.suptitle("Monthly Sales and Expenses Analysis", fontsize=16)
plt.tight_layout()
plt.savefig(
    "monthly_sales_expenses.png",
    dpi=300,
    bbox_inches="tight"
)
plt.show()`
      }]
    },
    {
      id: "5.2",
      title: "Bar Plots – Grouped and Stacked Bar Charts",
      aim: "To create bar plots using Pandas Series and DataFrame index, and to create both grouped bar plots and stacked bar plots using Matplotlib.",
      syntax: "df.plot(kind='bar')\ndf.plot.bar()\ndf.plot(kind='barh')\ndf.plot(kind='bar', stacked=True)",
      theory: "Grouped bars place each DataFrame column side by side for every index row, making category values easy to compare within a student. Stacked bars place the column values on top of each other for each index, emphasizing the combined total while retaining the contribution of each subject.",
      procedure: "Create the student marks DataFrame indexed by Student1 through Student4; print the DataFrame; create one grouped bar chart and a separate stacked bar chart; label axes, set the title and legend, set tick rotation and apply tight layout.",
      output: "The printed source DataFrame has rows Student1 (Python 85, Java 75, C++ 80), Student2 (90, 82, 76), Student3 (78, 80, 85), and Student4 (88, 85, 90). The grouped chart displays three side-by-side subject bars per student; the stacked chart stacks those three subject marks in one bar per student.",
      result: "Thus, grouped bar plots and stacked bar plots were successfully created from a Pandas DataFrame using its index values.",
      examples: [
        {
          id: "exp5-program-2",
          sourceDocument: true,
          programNumber: 1,
          title: "Grouped Bar Plot of Student Marks",
          code: `import pandas as pd
import matplotlib.pyplot as plt

data = {
    'Python': [85, 90, 78, 88],
    'Java': [75, 82, 80, 85],
    'C++': [80, 76, 85, 90]
}

df = pd.DataFrame(
    data,
    index=['Student1', 'Student2', 'Student3', 'Student4']
)

print("DataFrame:")
print(df)

df.plot(kind='bar', figsize=(8, 5))
plt.title("Student Marks in Different Programming Languages")
plt.xlabel("Students")
plt.ylabel("Marks")
plt.xticks(rotation=0)
plt.legend(title="Subjects")
plt.tight_layout()
plt.show()`
        },
        {
          id: "exp5-program-3",
          sourceDocument: true,
          programNumber: 2,
          title: "Stacked Bar Plot of Student Marks",
          code: `import pandas as pd
import matplotlib.pyplot as plt

data = {
    'Python': [85, 90, 78, 88],
    'Java': [75, 82, 80, 85],
    'C++': [80, 76, 85, 90]
}

df = pd.DataFrame(
    data,
    index=['Student1', 'Student2', 'Student3', 'Student4']
)

print("DataFrame:")
print(df)

df.plot(kind='bar', stacked=True, figsize=(8, 5))
plt.title("Stacked Bar Plot of Student Marks")
plt.xlabel("Students")
plt.ylabel("Total Marks")
plt.xticks(rotation=0)
plt.legend(title="Subjects")
plt.tight_layout()
plt.show()`
        }
      ]
    },
    {
      id: "5.3",
      title: "Histogram and Density Plot",
      aim: "To create a Histogram for displaying the frequency distribution of observed data and a Density Plot for representing the continuous probability distribution of the data using Python, Pandas, Matplotlib, and Seaborn.",
      syntax: "sns.histplot(data, bins=10, kde=False)\nsns.kdeplot(data, fill=True)\nsns.histplot(data, bins=10, kde=True)",
      theory: "A histogram shows how frequently values occur in intervals (bins). A density plot (KDE) gives a smooth estimate of the underlying continuous probability distribution. bins=6 divides the observed marks into six intervals; kde=True adds the density curve and fill=True fills the area under it.",
      procedure: "Create the observed marks list and a DataFrame with a Marks column. Run the histogram, density, and combined histogram-with-density examples independently, setting a title, axis labels and tight layout before displaying each graph.",
      output: "The source observed Marks are 45, 50, 52, 55, 58, 60, 62, 65, 68, 70, 72, 75, 78, 80, 82, 85, 88, 90, 92, and 95. The histogram divides the values into six bins; the density plot displays a filled smooth distribution curve; the combined option overlays a KDE curve on the histogram.",
      result: "Thus, a histogram and density plot were successfully created to visualize the frequency distribution and continuous probability distribution of the observed data.",
      examples: [
        {
          id: "exp5-program-4",
          sourceDocument: true,
          programNumber: 1,
          title: "Histogram of Marks",
          code: `import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

data = [
    45, 50, 52, 55, 58, 60, 62, 65, 68, 70,
    72, 75, 78, 80, 82, 85, 88, 90, 92, 95
]

df = pd.DataFrame({'Marks': data})
print("Observed Data:")
print(df)

plt.figure(figsize=(8, 5))
sns.histplot(df['Marks'], bins=6, kde=False)
plt.title("Histogram of Marks")
plt.xlabel("Marks")
plt.ylabel("Frequency")
plt.tight_layout()
plt.show()`
        },
        {
          id: "exp5-program-5",
          sourceDocument: true,
          programNumber: 2,
          title: "Density Plot of Marks",
          code: `import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

data = [
    45, 50, 52, 55, 58, 60, 62, 65, 68, 70,
    72, 75, 78, 80, 82, 85, 88, 90, 92, 95
]

df = pd.DataFrame({'Marks': data})
print("Observed Data:")
print(df)

plt.figure(figsize=(8, 5))
sns.kdeplot(df['Marks'], fill=True)
plt.title("Density Plot of Marks")
plt.xlabel("Marks")
plt.ylabel("Density")
plt.tight_layout()
plt.show()`
        },
        {
          id: "exp5-program-6",
          sourceDocument: true,
          programNumber: 3,
          title: "Histogram with Density Curve",
          code: `import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

data = [
    45, 50, 52, 55, 58, 60, 62, 65, 68, 70,
    72, 75, 78, 80, 82, 85, 88, 90, 92, 95
]

df = pd.DataFrame({'Marks': data})
print("Observed Data:")
print(df)

plt.figure(figsize=(8, 5))
sns.histplot(df['Marks'], bins=6, kde=True)
plt.title("Histogram with Density Curve")
plt.xlabel("Marks")
plt.ylabel("Frequency / Density")
plt.tight_layout()
plt.show()`
        }
      ]
    },
    {
      id: "5.4",
      title: "Scatter Plot and Correlation Coefficient",
      aim: "To create a Scatter Plot using two one-dimensional data series and examine the relationship or correlation between them using Python, Pandas, and Matplotlib.",
      syntax: "plt.scatter(x, y)\ndf.plot.scatter(x='Column1', y='Column2')",
      theory: "A scatter plot examines the relationship between two numerical variables. An upward pattern indicates a positive relationship, a downward pattern indicates a negative relationship, and randomly distributed points may indicate little or no relationship. The correlation coefficient ranges from −1 to +1: +1 is perfect positive correlation, 0 is no linear correlation, and −1 is perfect negative correlation.",
      procedure: "Create Study_Hours and Marks lists, combine them into a DataFrame, print the data, draw the scatter plot with title, axis labels and grid, and calculate the Pearson correlation with Series.corr().",
      output: "The source prints ten Study_Hours/Marks pairs (1/45, 2/50, 3/55, 4/60, 5/65, 6/70, 7/72, 8/80, 9/85, 10/90) and expects Correlation Coefficient: 1.00. The editor displays the value calculated by the running program.",
      result: "Thus, the scatter plot was successfully created and the relationship between the two one-dimensional data series was examined using the correlation coefficient.",
      examples: [{
        id: "exp5-program-7",
        sourceDocument: true,
        programNumber: 1,
        title: "Study Hours, Marks, and Correlation",
        code: `import pandas as pd
import matplotlib.pyplot as plt

study_hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
marks = [45, 50, 55, 60, 65, 70, 72, 80, 85, 90]

df = pd.DataFrame({
    'Study_Hours': study_hours,
    'Marks': marks
})

print("Data:")
print(df)

plt.figure(figsize=(8, 5))
plt.scatter(df['Study_Hours'], df['Marks'])
plt.title("Relationship Between Study Hours and Marks")
plt.xlabel("Study Hours")
plt.ylabel("Marks")
plt.grid(True)
plt.tight_layout()
plt.show()

correlation = df['Study_Hours'].corr(df['Marks'])
print("\\nCorrelation Coefficient:", round(correlation, 2))`
      }]
    },
    {
      id: "5.5",
      title: "Box Plot by Department",
      aim: "To create Box Plots for visualizing the distribution of numerical data across multiple categorical variables using Python, Pandas, Matplotlib, and Seaborn.",
      syntax: "sns.boxplot(x='Category', y='Value', data=df)\ndf.boxplot(column='Value', by='Category')",
      theory: "A box plot compares the distribution of a numerical variable across categories. The median is the middle value; Q1 and Q3 are the first and third quartiles; IQR = Q3 − Q1. Whiskers show the range of typical observations, while values beyond the whiskers may be displayed as outliers. Here Department is categorical and Marks is numerical.",
      procedure: "Create and print the supplied Department and Marks records; create a Seaborn box plot with Department on the X-axis and Marks on the Y-axis; add the title, axis labels and dashed Y-axis grid; apply tight layout and display the plot.",
      output: "The source prints 15 records: five each for CSE, ECE and EEE, with marks exactly as shown in the editable program. The graph displays one distribution per department, including its median, quartiles, IQR, whiskers and any possible outliers.",
      result: "Thus, the Box Plot was successfully created to visualize and compare the distribution of numerical data across multiple categorical variables.",
      examples: [{
        id: "exp5-program-8",
        sourceDocument: true,
        programNumber: 1,
        title: "Marks Distribution by Department",
        code: `import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

data = {
    'Department': [
        'CSE', 'CSE', 'CSE', 'CSE', 'CSE',
        'ECE', 'ECE', 'ECE', 'ECE', 'ECE',
        'EEE', 'EEE', 'EEE', 'EEE', 'EEE'
    ],
    'Marks': [
        78, 85, 90, 72, 88,
        65, 70, 82, 75, 80,
        60, 68, 72, 76, 85
    ]
}

df = pd.DataFrame(data)
print("Data:")
print(df)

plt.figure(figsize=(8, 5))
sns.boxplot(
    x='Department',
    y='Marks',
    data=df
)
plt.title("Marks Distribution by Department")
plt.xlabel("Department")
plt.ylabel("Marks")
plt.grid(axis='y', linestyle='--', alpha=0.5)
plt.tight_layout()
plt.show()`
      }]
    },
    {
      id: "5.6",
      title: "Combined Data Visualization Using the Online Iris Dataset",
      aim: "To load an online Iris dataset, process its records using Pandas, and create different visualizations with Matplotlib and Seaborn.",
      syntax: "pd.read_csv(\"URL\")\nplt.plot(x, y)\nsns.scatterplot(data=df, x=\"column1\", y=\"column2\")\nsns.histplot(data=df, x=\"column\", hue=\"category\", kde=True)\nsns.boxplot(data=df, x=\"category\", y=\"value\")\nsns.pairplot(df, hue=\"category\")",
      theory: "The combined program loads the online Iris CSV into a DataFrame and uses its sepal_length, sepal_width, petal_length, petal_width, and species columns. It previews and summarizes the data before producing a line plot, species-grouped scatter plot, KDE histogram, species box plot, and pair plot.",
      procedure: "Load the online CSV using Pandas; print the first five records, dataset information and statistical summary; create the five source plots in sequence. The browser runner fetches the published CSV and passes its contents to the unchanged pd.read_csv(url) call.",
      output: "The source expects 150 Iris records and shows a five-row preview, dataset information, and descriptive statistics, followed by five charts: sepal and petal lengths by sample index; a species-colored scatter plot; a species-colored sepal-length histogram with KDE; petal length by species; and a species-colored pair plot. The original document's preview formatting is compressed in places; the live output is the actual Pandas rendering.",
      result: "The online Iris dataset was successfully loaded and processed using Pandas. Different data visualizations were successfully created using Matplotlib and Seaborn to understand distributions, relationships, and differences among the dataset variables.",
      examples: [{
        id: "exp5-program-9",
        sourceDocument: true,
        programNumber: 1,
        title: "Iris Dataset Preview, Summary, and Five Visualizations",
        code: `import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Load online dataset
url = "https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv"
df = pd.read_csv(url)

# Display first five records
print("First Five Records:")
print(df.head())

# Display dataset information
print("\\nDataset Information:")
print(df.info())

# Display statistical summary
print("\\nStatistical Summary:")
print(df.describe())

# 1. Matplotlib - Line Plot
plt.figure(figsize=(8, 5))
plt.plot(df.index, df["sepal_length"], label="Sepal Length")
plt.plot(df.index, df["petal_length"], label="Petal Length")
plt.xlabel("Sample Index")
plt.ylabel("Length")
plt.title("Sepal Length and Petal Length")
plt.legend()
plt.grid()
plt.show()

# 2. Seaborn - Scatter Plot
plt.figure(figsize=(8, 5))
sns.scatterplot(
    data=df,
    x="sepal_length",
    y="petal_length",
    hue="species"
)
plt.title("Sepal Length vs Petal Length")
plt.xlabel("Sepal Length")
plt.ylabel("Petal Length")
plt.show()

# 3. Seaborn - Histogram
plt.figure(figsize=(8, 5))
sns.histplot(
    data=df,
    x="sepal_length",
    hue="species",
    kde=True
)
plt.title("Distribution of Sepal Length")
plt.xlabel("Sepal Length")
plt.ylabel("Frequency")
plt.show()

# 4. Seaborn - Box Plot
plt.figure(figsize=(8, 5))
sns.boxplot(
    data=df,
    x="species",
    y="petal_length"
)
plt.title("Petal Length by Species")
plt.xlabel("Species")
plt.ylabel("Petal Length")
plt.show()

# 5. Seaborn - Pair Plot
sns.pairplot(
    df,
    hue="species"
)
plt.show()`
      }]
    }
  ]
};

experimentData.push(experiment5Data);

const experiment6Data = {
  number: 6,
  title: "Time Series Analysis",
  module: 2,
  courseCode: "22DS102006",
  institution: "Mohan Babu University",
  student: "Shaik Sumiya",
  rollNumber: "24102A030118",
  faculty: "S. Bosu Babu, Assistant Professor",
  softwareRequirements: ["Python 3.x", "Pandas", "NumPy"],
  subExperiments: [
    {
      id: "6(a)",
      title: "Create Time Series Using Datetime Objects",
      aim: "To create a time series in Pandas using datetime objects and use the timestamps as the index of the time series.",
      syntax: "pd.to_datetime(date_values)\npd.Series(data, index=datetime_index)\n\nGeneral syntax:\nimport pandas as pd\ndates = pd.to_datetime([...])\nseries = pd.Series(data, index=dates)",
      explanation: "The dates become the Series index, while the corresponding values represent the temperature recorded on each date.",
      sampleOutput: "Time Series:\n2026-01-01    28\n2026-01-02    30\n2026-01-03    29\n2026-01-04    31\n2026-01-05    32\ndtype: int64",
      expectedOutput: "Time Series:\n2026-01-01    28\n2026-01-02    30\n2026-01-03    29\n2026-01-04    31\n2026-01-05    32\ndtype: int64",
      result: "Thus, a time series was created in Pandas using datetime objects as its index.",
      examples: [{
        id: "exp6a-program-1",
        sourceDocument: true,
        sourceLabel: "Program 6(a) from DS_Program6.docx.",
        programNumber: "6(a)",
        title: "Create a Time Series",
        code: `import pandas as pd

dates = pd.to_datetime([
    '2026-01-01',
    '2026-01-02',
    '2026-01-03',
    '2026-01-04',
    '2026-01-05'
])

temperature = [28, 30, 29, 31, 32]

time_series = pd.Series(temperature, index=dates)

print("Time Series:")
print(time_series)`
      }]
    },
    {
      id: "6(b)",
      title: "Generate DatetimeIndex Using pd.date_range()",
      aim: "To generate a DatetimeIndex of a specified length using the pandas.date_range() function.",
      syntax: "pd.date_range(start=None, end=None, periods=None, freq='D')\n\nFor a specified length:\npd.date_range(start='YYYY-MM-DD', periods=n, freq='D')",
      parameters: "start – Starting date/time.\nend – Ending date/time.\nperiods – Number of timestamps to generate.\nfreq – Frequency of timestamps, such as D (daily), h (hourly), M (monthly).",
      explanation: "pd.date_range() generates a sequence of dates at regular intervals. start specifies the starting date, periods=7 generates exactly seven timestamps, and freq='D' means daily frequency, so each timestamp is one day apart. The resulting object is a DatetimeIndex.",
      sampleOutput: "Generated DatetimeIndex:\nDatetimeIndex(['2026-01-01', '2026-01-02', '2026-01-03',\n               '2026-01-04', '2026-01-05', '2026-01-06',\n               '2026-01-07'],\ndtype='datetime64[ns]', freq='D')",
      sampleOutputNote: "The source sample shows datetime64[ns]. On the browser's Python 3.14 runtime, the genuine Pandas output uses datetime64[us]; the generated dates and daily frequency are unchanged.",
      expectedOutput: "DatetimeIndex(['2026-01-01', '2026-01-02', '2026-01-03',\n               '2026-01-04', '2026-01-05', '2026-01-06',\n               '2026-01-07'],\ndtype='datetime64[ns]', freq='D')",
      result: "Thus, a DatetimeIndex of seven daily timestamps was generated using pd.date_range().",
      examples: [{
        id: "exp6b-program-1",
        sourceDocument: true,
        sourceLabel: "Program 6(b) from DS_Program6.docx.",
        programNumber: "6(b)",
        title: "Generate a DatetimeIndex",
        code: `import pandas as pd

date_index = pd.date_range(
    start='2026-01-01',
    periods=7,
    freq='D'
)

print("Generated DatetimeIndex:")
print(date_index)`
      }]
    },
    {
      id: "6(c)",
      title: "Time Zones, Localization, Conversion and Combining Time Series",
      aim: "To generate date ranges by setting a time zone, localizing a time zone, converting timestamps to another time zone using tz_convert(), and combining time-series data from two different time zones using Pandas.",
      syntax: "pd.date_range(start, periods=n, freq='h', tz='Asia/Kolkata')\ndatetime_index.tz_localize('Asia/Kolkata')\ndatetime_index.tz_convert('America/New_York')\npd.concat([series1, series2])",
      explanation: "A timezone-aware date range is created directly with tz. A timezone-naive DatetimeIndex can be assigned a timezone using tz_localize(); tz_convert() converts already timezone-aware timestamps to another zone while retaining the same instants. The India and New York series are combined with pd.concat().",
      sampleOutput: `1. Date Range with Time Zone
1. Date Range with Asia/Kolkata Time Zone:
DatetimeIndex(['2026-01-01 09:00:00+05:30',
               '2026-01-01 10:00:00+05:30',
               '2026-01-01 11:00:00+05:30'],
              dtype='datetime64[ns, Asia/Kolkata]', freq='h')

2. Timezone-Naive Date Range
DatetimeIndex(['2026-01-01 09:00:00',
               '2026-01-01 10:00:00',
               '2026-01-01 11:00:00'],
              dtype='datetime64[ns]', freq='h')

3. Localized Time Zone
DatetimeIndex(['2026-01-01 09:00:00+05:30',
               '2026-01-01 10:00:00+05:30',
               '2026-01-01 11:00:00+05:30'],
              dtype='datetime64[ns, Asia/Kolkata]', freq='h')

4. Converted to New York Time
DatetimeIndex(['2025-12-31 22:30:00-05:00',
               '2025-12-31 23:30:00-05:00',
               '2026-01-01 00:30:00-05:00'],
              dtype='datetime64[ns, America/New_York]', freq='h')

5. India Time Series:
2026-01-01 09:00:00+05:30    100
2026-01-01 10:00:00+05:30    200
2026-01-01 11:00:00+05:30    300
dtype: int64
New York Time Series:
2025-12-31 22:30:00-05:00    400
2025-12-31 23:30:00-05:00    500
2026-01-01 00:30:00-05:00    600
dtype: int64

6. Combined Time Series:
2025-12-31 22:30:00-05:00    400
2025-12-31 23:30:00-05:00    500
2026-01-01 00:30:00-05:00    600
2026-01-01 09:00:00+05:30    100
2026-01-01 10:00:00+05:30    200
2026-01-01 11:00:00+05:30    300
dtype: int64`,
      sampleOutputNote: "The source sample lists New York first in the combined result, but the supplied program passes India first to pd.concat(). Actual execution preserves that input order. The source also prints datetime64[ns] and freq='h' for localized indexes; the browser's Python 3.14 runtime prints datetime64[us] and freq=None after tz_localize()/tz_convert().",
      expectedOutput: "India timestamps use Asia/Kolkata (+05:30). The corresponding New York timestamps are 2025-12-31 22:30:00-05:00, 2025-12-31 23:30:00-05:00, and 2026-01-01 00:30:00-05:00. The combined series contains all six observations.",
      result: "Thus, timestamps were localized and converted between time zones, and time-series data from the two time zones were combined.",
      examples: [{
        id: "exp6c-program-1",
        sourceDocument: true,
        sourceLabel: "Program 6(c) from DS_Program6.docx.",
        programNumber: "6(c)",
        title: "Generate, Localize, Convert, and Combine Time Zones",
        code: `import pandas as pd

# 1. Generate date range by setting a time zone
india_dates = pd.date_range(
    start='2026-01-01 09:00',
    periods=3,
    freq='h',
    tz='Asia/Kolkata'
)
print("1. Date Range with Asia/Kolkata Time Zone:")
print(india_dates)

# 2. Create a timezone-naive DatetimeIndex
dates = pd.date_range(
    start='2026-01-01 09:00',
    periods=3,
    freq='h'
)
print("\\n2. Timezone-naive Date Range:")
print(dates)

# 3. Localize the timezone
localized_dates = dates.tz_localize('Asia/Kolkata')
print("\\n3. After Localizing to Asia/Kolkata:")
print(localized_dates)

# 4. Convert to another timezone using tz_convert()
new_york_dates = localized_dates.tz_convert('America/New_York')
print("\\n4. Converted to America/New_York:")
print(new_york_dates)

# 5. Create time series in different time zones
india_series = pd.Series(
    [100, 200, 300],
    index=localized_dates
)
new_york_series = pd.Series(
    [400, 500, 600],
    index=new_york_dates
)
print("\\n5. India Time Series:")
print(india_series)
print("\\nNew York Time Series:")
print(new_york_series)

# 6. Combine two different timezone series
combined_series = pd.concat([
    india_series,
    new_york_series
])
print("\\n6. Combined Time Series:")
print(combined_series)`
      }]
    },
    {
      id: "6(d)",
      title: "Period Arithmetic and period_range()",
      aim: "To perform period arithmetic by adding and subtracting integers from Pandas Period objects and to construct a range of periods using the period_range() function.",
      syntax: "pd.Period('2026-01', freq='M')\nperiod + integer\nperiod - integer\npd.period_range(start, periods=n, freq='M')",
      explanation: "Adding or subtracting an integer moves a Period by that many periods at its frequency. Here the monthly period 2026-01 is shifted by the specified number of months. period_range() constructs six consecutive monthly periods.",
      sampleOutput: "Original Period:\n2026-01\n\nAfter adding 2:\n2026-03\n\nAfter adding 5:\n2026-06\n\nAfter subtracting 1:\n2025-12\n\nAfter subtracting 3:\n2025-10\n\nRange of Periods:\nPeriodIndex(['2026-01', '2026-02', '2026-03',\n             '2026-04', '2026-05', '2026-06'],\n            dtype='period[M]')",
      expectedOutput: "Original Period: 2026-01; adding 2: 2026-03; adding 5: 2026-06; subtracting 1: 2025-12; subtracting 3: 2025-10. The PeriodIndex contains 2026-01 through 2026-06 at period[M] frequency.",
      result: "Thus, period arithmetic was performed and a range of monthly periods was constructed using period_range().",
      examples: [{
        id: "exp6d-program-1",
        sourceDocument: true,
        sourceLabel: "Program 6(d) from DS_Program6.docx.",
        programNumber: "6(d)",
        title: "Period Arithmetic and Range of Periods",
        code: `import pandas as pd

p = pd.Period('2026-01', freq='M')

print("Original Period:")
print(p)

print("\\nAfter adding 2:")
print(p + 2)

print("\\nAfter adding 5:")
print(p + 5)

print("\\nAfter subtracting 1:")
print(p - 1)

print("\\nAfter subtracting 3:")
print(p - 3)

periods = pd.period_range(
    start='2026-01',
    periods=6,
    freq='M'
)

print("\\nRange of Periods:")
print(periods)`
      }]
    },
    {
      id: "6(e)",
      title: "Convert Period and PeriodIndex Using asfreq()",
      aim: "To convert Pandas Period and PeriodIndex objects from one frequency to another using the asfreq() method.",
      syntax: "period.asfreq(freq, how='start')\nperiod_index.asfreq(freq, how='start')",
      parameters: "freq – The target frequency, such as 'D', 'M', 'Q', or 'Y'.\nhow – Specifies whether to use the start or end of the period.\n'start' – Beginning of the period.\n'end' – End of the period.",
      explanation: "asfreq() converts a Period or PeriodIndex to another frequency. For monthly-to-daily conversion, how='start' selects the first day in each month and how='end' selects the last day in each month.",
      sampleOutput: "Original Period:\n2026-01\nMonthly Period converted to Daily (Start):\n2026-01-01\nMonthly Period converted to Daily (End):\n2026-01-31\nOriginalPeriodIndex:\nPeriodIndex(['2026-01', '2026-02', '2026-03'],\n            dtype='period[M]')\nPeriodIndex converted to Daily Frequency:\nPeriodIndex(['2026-01-01', '2026-02-01', '2026-03-01'],\n            dtype='period[D]')\nPeriodIndex converted to Daily Frequency (End):\nPeriodIndex(['2026-01-31', '2026-02-28', '2026-03-31'],\n            dtype='period[D]')",
      sampleOutputNote: "The source sample labels this line OriginalPeriodIndex (without a space); the program prints Original PeriodIndex (with a space), as shown in the genuine Output panel.",
      expectedOutput: "2026-01 converts to 2026-01-01 at the start and 2026-01-31 at the end. The three-month PeriodIndex converts to daily start dates 2026-01-01, 2026-02-01, 2026-03-01 and end dates 2026-01-31, 2026-02-28, 2026-03-31.",
      result: "Thus, Period and PeriodIndex objects were converted from monthly to daily frequency using asfreq().",
      examples: [{
        id: "exp6e-program-1",
        sourceDocument: true,
        sourceLabel: "Program 6(e) from DS_Program6.docx.",
        programNumber: "6(e)",
        title: "Convert Periods and PeriodIndex with asfreq()",
        code: `import pandas as pd

# 1. Create a monthly Period
p = pd.Period('2026-01', freq='M')
print("Original Period:")
print(p)

# 2. Convert monthly Period to daily frequency
daily_start = p.asfreq('D', how='start')
print("\\nMonthly Period converted to Daily (Start):")
print(daily_start)

daily_end = p.asfreq('D', how='end')
print("\\nMonthly Period converted to Daily (End):")
print(daily_end)

# 3. Create a PeriodIndex
period_index = pd.period_range(
    start='2026-01',
    periods=3,
    freq='M'
)
print("\\nOriginal PeriodIndex:")
print(period_index)

# 4. Convert PeriodIndex to daily frequency at start
daily_period_index = period_index.asfreq(
    'D',
    how='start'
)
print("\\nPeriodIndex converted to Daily Frequency:")
print(daily_period_index)

# 5. Convert PeriodIndex to daily frequency at end
daily_period_index_end = period_index.asfreq(
    'D',
    how='end'
)
print("\\nPeriodIndex converted to Daily Frequency (End):")
print(daily_period_index_end)`
      }]
    },
    {
      id: "6(f)",
      title: "Convert Timestamp-Indexed Series and DataFrames Using to_period()",
      aim: "To convert Series and DataFrame objects indexed by timestamps into Period and PeriodIndex objects using the Pandas to_period() method.",
      syntax: "series.to_period(freq)\ndataframe.to_period(freq)\n\n'D' → Daily\n'M' → Monthly\n'Q' → Quarterly\n'Y' → Yearly",
      explanation: "to_period('M') converts timestamp indexes to monthly periods while preserving each Series or DataFrame value. The source uses the same four dates and sales values for the Series and DataFrame, with Profit values in the DataFrame.",
      sampleOutput: "Original Series:\n2026-01-10    1000\n2026-02-15    1500\n2026-03-20    1800\n2026-04-25    2200\ndtype: int64\n\nSeries converted to Monthly Periods:\n2026-01    1000\n2026-02    1500\n2026-03    1800\n2026-04    2200\nFreq: M, dtype: int64\n\nOriginal DataFrame:\n            Sales  Profit\n2026-01-10   1000     200\n2026-02-15   1500     300\n2026-03-20   1800     400\n2026-04-25   2200     500\n\nDataFrame converted to Monthly Periods:\n         Sales  Profit\n2026-01   1000     200\n2026-02   1500     300\n2026-03   1800     400\n2026-04   2200     500\nFreq: M",
      expectedOutput: "The timestamp indexes 2026-01-10, 2026-02-15, 2026-03-20, and 2026-04-25 become monthly PeriodIndex labels 2026-01 through 2026-04. Sales are 1000, 1500, 1800, 2200; DataFrame Profit is 200, 300, 400, 500.",
      result: "Thus, timestamp-indexed Series and DataFrame objects were converted to monthly PeriodIndex objects using to_period().",
      examples: [{
        id: "exp6f-program-1",
        sourceDocument: true,
        sourceLabel: "Program 6(f) from DS_Program6.docx.",
        programNumber: "6(f)",
        title: "Convert Series and DataFrame to Monthly Periods",
        code: `import pandas as pd

# 1. Create a Series with timestamp index
dates = pd.to_datetime([
    '2026-01-10',
    '2026-02-15',
    '2026-03-20',
    '2026-04-25'
])

sales = pd.Series(
    [1000, 1500, 1800, 2200],
    index=dates
)
print("Original Series:")
print(sales)

# 2. Convert Series from timestamps to monthly periods
period_series = sales.to_period('M')
print("\\nSeries converted to Monthly Periods:")
print(period_series)

# 3. Create a DataFrame with timestamp index
df = pd.DataFrame(
    {
        'Sales': [1000, 1500, 1800, 2200],
        'Profit': [200, 300, 400, 500]
    },
    index=dates
)
print("\\nOriginal DataFrame:")
print(df)

# 4. Convert DataFrame to monthly periods
period_df = df.to_period('M')
print("\\nDataFrame converted to Monthly Periods:")
print(period_df)`
      }]
    },
    {
      id: "6(g)",
      title: "Resampling, Downsampling and Upsampling",
      aim: "To perform resampling, downsampling, and upsampling operations on a time series using Pandas.",
      syntax: "series.resample('frequency').aggregation_function()\nseries.resample('larger_frequency').sum()\nseries.resample('smaller_frequency').asfreq()\nseries.resample('smaller_frequency').ffill()",
      explanation: "Resampling changes a time series to another frequency and applies an aggregation such as mean. Downsampling reduces the observation frequency (the source sums hourly values into 4-hour intervals). Upsampling increases frequency. asfreq() leaves new timestamps without observations as NaN; ffill() fills each new timestamp with the most recent earlier observed value.",
      sampleOutput: `Original Hourly Time Series:
2026-01-01 00:00:00    10
2026-01-01 01:00:00    12
2026-01-01 02:00:00    15
2026-01-01 03:00:00    14
2026-01-01 04:00:00    18
2026-01-01 05:00:00    20
2026-01-01 06:00:00    22
2026-01-01 07:00:00    21
2026-01-01 08:00:00    25
2026-01-01 09:00:00    28
2026-01-01 10:00:00    30
2026-01-01 11:00:00    32
Freq: h, dtype: int64

Resampled Time Series - 3 Hour Mean:
2026-01-01 00:00:00    12.333333
2026-01-01 03:00:00    17.333333
2026-01-01 06:00:00    22.666667
2026-01-01 09:00:00    30.000000
Freq: 3h, dtype: float64

Downsampled Time Series - 4 Hour Sum:
2026-01-01 00:00:00     51
2026-01-01 04:00:00     81
2026-01-01 08:00:00    115
Freq: 4h, dtype: int64

Upsampled Time Series - 30 Minute:
2026-01-01 00:00:00    10.0
2026-01-01 00:30:00     NaN
2026-01-01 01:00:00    12.0
2026-01-01 01:30:00     NaN
2026-01-01 02:00:00    15.0
2026-01-01 02:30:00     NaN
2026-01-01 03:00:00    14.0
...
Freq: 30min, dtype: float64

Upsampled Time Series using Forward Fill:
2026-01-01 00:00:00    10
2026-01-01 00:30:00    10
2026-01-01 01:00:00    12
2026-01-01 01:30:00    12
2026-01-01 02:00:00    15
2026-01-01 02:30:00    15
2026-01-01 03:00:00    14
...
Freq: 30min, dtype: int64`,
      expectedOutput: "The 3-hour means are 12.333333, 17.333333, 22.666667, and 30.0. The 4-hour sums are 51, 81, and 115. The 30-minute asfreq() series contains NaN at inserted half-hour timestamps; the forward-filled series carries the previous hourly observation forward.",
      result: "Thus, resampling, downsampling, and upsampling were performed on the time series using Pandas.",
      examples: [{
        id: "exp6g-program-1",
        sourceDocument: true,
        sourceLabel: "Program 6(g) from DS_Program6.docx.",
        programNumber: "6(g)",
        title: "Resampling, Downsampling, and Upsampling",
        code: `import pandas as pd

dates = pd.date_range(
    start='2026-01-01 00:00',
    periods=12,
    freq='h'
)

values = [10, 12, 15, 14, 18, 20,
          22, 21, 25, 28, 30, 32]

time_series = pd.Series(values, index=dates)

print("Original Hourly Time Series:")
print(time_series)

resampled = time_series.resample('3h').mean()
print("\\nResampled Time Series - 3 Hour Mean:")
print(resampled)

downsampled = time_series.resample('4h').sum()
print("\\nDownsampled Time Series - 4 Hour Sum:")
print(downsampled)

upsampled = time_series.resample('30min').asfreq()
print("\\nUpsampled Time Series - 30 Minute:")
print(upsampled)

upsampled_ffill = time_series.resample('30min').ffill()
print("\\nUpsampled Time Series using Forward Fill:")
print(upsampled_ffill)`
      }]
    }
  ],
  myPrograms: [
    {
      id: "exp6-my-program-a",
      title: "My Programs: Create Time Series",
      explanation: "Uses the source's six daily dates and NumPy random values. Values are intentionally unseeded, so they may differ between executions.",
      code: `import numpy as np
import pandas as pd

rng = pd.date_range('2023-01-01', periods=6, freq='D')
ts = pd.Series(np.random.randn(len(rng)), index=rng)
print(ts)`
    },
    {
      id: "exp6-my-program-b",
      title: "My Programs: Time Zone Conversion",
      explanation: "Self-contained version of the source example: create a timestamp-indexed series, localize it to UTC, convert it to Asia/Kolkata, and print it. Random values are unseeded.",
      code: `import numpy as np
import pandas as pd

rng = pd.date_range('2023-01-01', periods=6, freq='D')
ts = pd.Series(np.random.randn(len(rng)), index=rng)
ts_utc = ts.tz_localize('UTC')
ts_ind = ts_utc.tz_convert('Asia/Kolkata')
print(ts_ind)`
    },
    {
      id: "exp6-my-program-c",
      title: "My Programs: Period Arithmetic and Conversion",
      explanation: "Creates the source's 2024 first-quarter Period, prints the next quarter, and converts the original quarter to its final month.",
      code: `import pandas as pd

p = pd.Period('2024Q1')
print(p + 1)
print(p.asfreq('M', 'end'))`
    },
    {
      id: "exp6-my-program-d",
      title: "My Programs: Resampling",
      explanation: "Creates 100 unseeded random values on daily timestamps and resamples them to monthly means. Values may differ on each execution. Pandas 3.x renamed the monthly-end offset from 'M' to 'ME'; 'ME' preserves the source example's monthly resampling logic.",
      code: `import numpy as np
import pandas as pd

ts = pd.Series(
    np.random.randn(100),
    index=pd.date_range('2024-01-01', periods=100)
)
ts_monthly = ts.resample('ME').mean()
print(ts_monthly)`
    }
  ]
};

experimentData.push(experiment6Data);

const experimentVideos = {
  1: {
    title: "Working with CSV, TSV, JSON and Excel Using Pandas",
    videos: [
      { title: "Python Pandas Input Output | Import Export Datasets | read_csv, read_excel, read_json, read_table", url: "https://www.youtube.com/watch?v=LjtgH6WfY7w", channel: "Anuurag Edlabadkar" }
    ]
  },
  2: {
    title: "Interacting with Web APIs and Databases Using Pandas and SQLite",
    videos: [
      { title: "Python Networking Tutorial #6 – Fetch GitHub Repo Data with Requests (API Example)", url: "https://www.youtube.com/watch?v=P80EanDkzi4", channel: "Turtle Code" }
    ]
  },
  3: {
    title: "Data Cleaning and Preparation with Pandas",
    videos: [
      { title: "Python Pandas Tutorial 5: Handle Missing Data: fillna, dropna, interpolate", url: "https://www.youtube.com/watch?v=EaGbS7eWSs0", channel: "codebasics" }
    ]
  },
  4: {
    title: "Data Wrangling with Pandas: Indexing, Stacking and Merging",
    videos: [
      { title: "12 Pandas tutorial | multi index | stack unstack | stack in level example | Data science | ML", url: "https://www.youtube.com/watch?v=e7Mk9o7H1Qw", channel: "Gyan Of Python" }
    ]
  },
  5: {
    title: "Data Visualization with Matplotlib and Seaborn",
    videos: [
      { title: "Python for Data Science #5: Mastering Data Visualization with Matplotlib, Seaborn & Plotly", url: "https://www.youtube.com/watch?v=B7zdC5FaxWY", channel: "Analytics Vidhya" }
    ]
  },
  6: {
    title: "Pandas Time Series Analysis",
    videos: [
      { title: "Pandas Time Series Analysis 6: Timezone Handling", url: "https://www.youtube.com/watch?v=9IW2GIJajLs", channel: "codebasics" }
    ]
  }
};
const experimentVideoStorageKey = "datascienceLab.experimentVideos.v1";

const resumeStorageKey = "datascienceLab.resume.v1";
const isLocalResumePreview = window.location.protocol === "file:"
  || ["localhost", "127.0.0.1", "::1"].includes(window.location.hostname);
const defaultResumeData = {
  personal: {
    name: "Shaik Sumiya",
    college: "Mohan Babu University",
    degree: "B.Tech",
    department: "Computer Science and Engineering — Data Science (CSE-DS)",
    currentYear: "3rd Year",
    section: "2",
    rollNumber: "24102A030118",
    phone: "9963076215",
    email: "215summisumiya@gmail.com"
  },
  objective: "Third-year B.Tech CSE-DS student interested in Java development and software engineering. Seeking an opportunity to strengthen problem-solving skills and contribute to practical software projects.",
  education: [
    {
      institution: "Mohan Babu University",
      qualification: "B.Tech — Computer Science and Engineering (Data Science)",
      marks: "",
      maximumMarks: "",
      percentage: "",
      period: "",
      currentYear: "3rd Year",
      graduationYear: "2028"
    },
    {
      institution: "TMR Junior College",
      qualification: "Intermediate — MPC",
      marks: "976",
      maximumMarks: "1000",
      percentage: "97.6",
      period: "",
      currentYear: "",
      graduationYear: ""
    },
    {
      institution: "ZPHS",
      qualification: "SSC / 10th Class",
      marks: "506",
      maximumMarks: "600",
      percentage: "84.33",
      period: "",
      currentYear: "",
      graduationYear: ""
    }
  ],
  skills: ["Java", "Data Structures and Algorithms", "SQL", "HTML", "CSS", "JavaScript", "Python", "Git and GitHub"],
  projects: [{
    name: "Data Science Digital Laboratory Website",
    description: "A responsive website for course resources, practical learning, student information, and profile links.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "",
    demoUrl: ""
  }],
  profiles: {
    github: { label: "GitHub", url: "https://github.com/Sumiya-215" },
    linkedin: { label: "LinkedIn", url: "https://www.linkedin.com/in/shaik-sumiya-53bb6534a/" },
    leetcode: { label: "LeetCode", url: "https://leetcode.com/u/Shaik_Sumiya_215/" },
    youtube: { label: "YouTube", url: "https://www.youtube.com/@sumiyasumiya-tc5ic" }
  },
  achievements: []
};

const storageNotice = document.querySelector("#resume-storage-notice");
let resumeData = loadResumeData();
const pageNames = ["home", "modules", "experiments", "projects", "sources", "tools", "student", "resume"];
const pages = new Map([...document.querySelectorAll("[data-section]")].map((element) => [element.dataset.section, element]));
const navItems = [...document.querySelectorAll(".nav-link")];
const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");
const moduleContent = document.querySelector("#module-content");
const experimentContent = document.querySelector("#experiment-content");
const moduleSelection = new Map();
const experimentSelection = new Map();
const expandedExperiments = new Set();
const experimentStates = new Map();
const pendingPythonRuns = new Map();
let pythonWorker;
let pythonRequestSequence = 0;
let pythonRuntimeStatus = "Python not loaded. The first run downloads Pyodide from its CDN.";

function updatePythonRuntimeStatus(status) {
  pythonRuntimeStatus = status;
  document.querySelectorAll("[data-python-runtime-status]").forEach((element) => {
    element.textContent = status;
  });
}

function makePythonRuntimeStatus() {
  const status = makeElement("p", "python-runtime-status", pythonRuntimeStatus);
  status.dataset.pythonRuntimeStatus = "true";
  status.setAttribute("role", "status");
  const notice = makeElement(
    "p",
    "python-runtime-warning",
    "Runs Python locally in your browser using WebAssembly. Open this site through localhost or HTTPS, not file://. This is not a secure server-side sandbox: run only code you trust. Network access is subject to browser CORS rules, and long or memory-intensive code can affect browser resources."
  );
  const wrapper = document.createElement("div");
  wrapper.className = "python-runtime-notice";
  wrapper.append(status, notice);
  return wrapper;
}

function getPythonWorker() {
  if (pythonWorker) return pythonWorker;
  if (!("Worker" in window)) {
    throw new Error("This browser does not support Web Workers. Use a current browser to run Python.");
  }

  pythonWorker = new Worker(new URL("python-worker.js", document.baseURI), { type: "module" });
  pythonWorker.addEventListener("message", (event) => {
    const message = event.data;
    if (message.type === "status") {
      updatePythonRuntimeStatus(message.status);
      return;
    }
    const pending = pendingPythonRuns.get(message.executionId);
    if (!pending) return;
    clearTimeout(pending.timeout);
    pendingPythonRuns.delete(message.executionId);
    if (message.type === "result") {
      pending.resolve(message);
    } else {
      pending.reject(new Error(message.message));
    }
  });
  pythonWorker.addEventListener("error", (event) => {
    console.error("The browser Python worker failed.", event.message);
    const error = new Error(
      `Python worker failed to start or crashed: ${event.message || "unknown worker error"}. Serve the website over localhost or HTTPS and verify Pyodide CDN access.`
    );
    updatePythonRuntimeStatus(`Python Error — ${error.message}`);
    for (const pending of pendingPythonRuns.values()) {
      clearTimeout(pending.timeout);
      pending.reject(error);
    }
    pendingPythonRuns.clear();
    pythonWorker.terminate();
    pythonWorker = undefined;
  });
  return pythonWorker;
}

function stopPythonWorker(reason) {
  if (pythonWorker) {
    pythonWorker.terminate();
    pythonWorker = undefined;
  }
  for (const pending of pendingPythonRuns.values()) {
    clearTimeout(pending.timeout);
    pending.reject(new Error(reason));
  }
  pendingPythonRuns.clear();
}

function executePython(editorKey, code) {
  let worker;
  try {
    worker = getPythonWorker();
  } catch (error) {
    updatePythonRuntimeStatus(`Python Error — ${error.message}`);
    return Promise.reject(error);
  }

  const executionId = `python-run-${++pythonRequestSequence}`;
  return new Promise((resolve, reject) => {
    const timeout = window.setTimeout(() => {
      const message = "Execution exceeded the 180-second limit. The worker was stopped and its in-memory Python state was reset.";
      updatePythonRuntimeStatus(`Python Error — ${message}`);
      stopPythonWorker(message);
    }, 180000);
    pendingPythonRuns.set(executionId, { resolve, reject, timeout });
    worker.postMessage({ type: "run", executionId, editorKey, code });
  });
}

function renderPythonFigures(output, figures = [], files = []) {
  let container = output.parentElement.querySelector(".experiment-output-figures");
  if (!figures.length && !files.length) {
    container?.replaceChildren();
    return;
  }
  if (!container) {
    container = document.createElement("div");
    container.className = "experiment-output-figures";
    output.insertAdjacentElement("afterend", container);
  }
  const items = [];
  figures.forEach((source, index) => {
    const card = document.createElement("div");
    card.className = "experiment-output-figure";
    const image = document.createElement("img");
    image.src = `data:image/png;base64,${source}`;
    image.alt = `Generated Python figure ${index + 1}`;
    image.loading = "lazy";
    const matchingFile = files[index];
    const download = makeElement("a", "button button-quiet", `Download ${matchingFile?.name || `figure-${index + 1}.png`}`);
    download.href = matchingFile
      ? `data:image/png;base64,${matchingFile.data}`
      : image.src;
    download.download = matchingFile?.name || `figure-${index + 1}.png`;
    card.append(image, download);
    items.push(card);
  });
  files.slice(figures.length).forEach((file) => {
    const download = makeElement("a", "button button-quiet", `Download ${file.name}`);
    download.href = `data:image/png;base64,${file.data}`;
    download.download = file.name;
    items.push(download);
  });
  container.replaceChildren(...items);
}

function attachPythonRunner(button, editor, state, output, runtimeStatus, editorKey) {
  const editorStatus = runtimeStatus.querySelector(".python-runtime-status");
  button.addEventListener("click", async () => {
    if (button.disabled) return;
    button.disabled = true;
    state.code = editor.value;
    state.output = "Running Python in the browser...";
    state.figures = [];
    state.files = [];
    output.textContent = state.output;
    renderPythonFigures(output, state.figures, state.files);
    editorStatus.textContent = "Queued for Python runtime...";
    try {
      const result = await executePython(editorKey, state.code);
      state.output = result.output || "(No output was produced.)";
      state.figures = result.figures || [];
      state.files = result.files || [];
      output.textContent = state.output;
      renderPythonFigures(output, state.figures, state.files);
      editorStatus.textContent = result.success ? "Execution completed." : "Execution failed; see Python output.";
    } catch (error) {
      state.output = `Python could not execute this program.\n${error.message}`;
      output.textContent = state.output;
      editorStatus.textContent = "Python Error. See the output for details.";
    } finally {
      button.disabled = false;
    }
  });
}

function showStorageNotice(message) {
  storageNotice.textContent = message;
  storageNotice.hidden = false;
}

function normalizeResumeData(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new TypeError("Saved resume data is not a valid object.");
  }
  const isRecord = (entry) => entry && typeof entry === "object" && !Array.isArray(entry);
  const text = (candidate, fallback) => typeof candidate === "string" ? candidate : fallback;
  const personal = isRecord(value.personal) ? value.personal : {};
  const profiles = isRecord(value.profiles) ? value.profiles : {};
  const education = Array.isArray(value.education) ? value.education : defaultResumeData.education;
  const projects = Array.isArray(value.projects) ? value.projects : defaultResumeData.projects;
  return {
    personal: Object.fromEntries(Object.entries(defaultResumeData.personal).map(([key, fallback]) => [key, text(personal[key], fallback)])),
    objective: text(value.objective, defaultResumeData.objective),
    education: education.map((entry, index) => {
      const source = isRecord(entry) ? entry : {};
      const fallback = defaultResumeData.education[index] || {};
      return Object.fromEntries(Object.entries(fallback).map(([key, defaultValue]) => [key, text(source[key], defaultValue)]));
    }),
    skills: Array.isArray(value.skills) ? value.skills.filter((item) => typeof item === "string") : [...defaultResumeData.skills],
    projects: projects.filter(isRecord).map((project) => ({
      name: text(project.name, ""),
      description: text(project.description, ""),
      technologies: Array.isArray(project.technologies) ? project.technologies.filter((item) => typeof item === "string") : [],
      githubUrl: text(project.githubUrl, ""),
      demoUrl: text(project.demoUrl, "")
    })),
    profiles: Object.fromEntries(Object.entries(defaultResumeData.profiles).map(([key, fallback]) => {
      const source = isRecord(profiles[key]) ? profiles[key] : {};
      return [key, { label: fallback.label, url: text(source.url, fallback.url) }];
    })),
    achievements: Array.isArray(value.achievements) ? value.achievements.filter((item) => typeof item === "string") : []
  };
}

function loadResumeData() {
  if (!isLocalResumePreview) return normalizeResumeData(defaultResumeData);
  try {
    const stored = localStorage.getItem(resumeStorageKey);
    return stored ? normalizeResumeData(JSON.parse(stored)) : normalizeResumeData(defaultResumeData);
  } catch (error) {
    console.error("Unable to load saved resume data.", error);
    showStorageNotice("Saved resume data could not be read. The default resume is shown; open Edit Resume and save to replace the unavailable saved data.");
    return normalizeResumeData(defaultResumeData);
  }
}

function icon(name) {
  return `<svg class="icon" aria-hidden="true"><use href="#i-${name}"></use></svg>`;
}

function updatePage() {
  const hashParts = window.location.hash.slice(1).split("/");
  const pageName = pageNames.includes(hashParts[0]) ? hashParts[0] : "home";
  pages.forEach((element, name) => {
    element.hidden = name !== pageName;
  });
  navItems.forEach((item) => {
    if (item.dataset.page === pageName) item.setAttribute("aria-current", "page");
    else item.removeAttribute("aria-current");
  });
  primaryNav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  if (pageName === "modules") selectModule(Number(hashParts[1]) || 1);
  if (pageName === "experiments") selectExperiment(Number(hashParts[1]) || 0, hashParts[2]);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setHash(path) {
  if (window.location.hash === `#${path}`) updatePage();
  else window.location.hash = path;
}

function renderModuleList() {
  const list = document.querySelector("#module-list");
  list.replaceChildren(...moduleData.map((module) => {
    const button = document.createElement("button");
    button.className = "module-select";
    button.type = "button";
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", "false");
    button.dataset.module = String(module.number);
    button.innerHTML = `<span class="module-index">${String(module.number).padStart(2, "0")}</span><span class="module-file-icon">${module.path ? icon("file") : icon("book")}</span><span class="module-label"><strong>${module.title}</strong><small>${module.path ? "PDF course material" : "Study material will be added soon."}</small></span>`;
    button.addEventListener("click", () => setHash(`modules/${module.number}`));
    return button;
  }));
}

function renderModule(module, available = false) {
  moduleContent.replaceChildren();
  const eyebrow = document.createElement("p");
  eyebrow.className = "eyebrow accent";
  eyebrow.textContent = `COURSE MODULE · ${String(module.number).padStart(2, "0")}`;
  const heading = document.createElement("h2");
  heading.textContent = module.title;
  moduleContent.append(eyebrow, heading);

  if (available && module.path) {
    const intro = document.createElement("p");
    intro.textContent = module.convertedFromDocx
      ? "The supplied Module 2 DOCX has been exported to PDF without editing its content. View it below, download the PDF, or open it in a new tab."
      : "The supplied Module 1 PDF is available. View it below, download the original file, or open it in a new tab.";
    const actions = document.createElement("div");
    actions.className = "pdf-actions";
    const view = document.createElement("a");
    view.className = "button button-primary";
    view.href = "#module-pdf";
    view.addEventListener("click", (event) => {
      event.preventDefault();
      frame.scrollIntoView({ behavior: "smooth", block: "start" });
      frame.focus();
    });
    view.textContent = "View PDF";
    const download = document.createElement("a");
    download.className = "button button-quiet";
    download.href = module.path;
    download.download = module.filename;
    download.innerHTML = `${icon("download")} Download PDF`;
    const open = document.createElement("a");
    open.className = "button button-quiet";
    open.href = module.path;
    open.target = "_blank";
    open.rel = "noopener noreferrer";
    open.innerHTML = `${icon("arrow-up-right")} Open in New Tab`;
    actions.append(view, download, open);
    const frame = document.createElement("iframe");
    frame.className = "pdf-frame";
    frame.id = "module-pdf";
    frame.title = `${module.title} PDF viewer`;
    frame.tabIndex = 0;
    frame.src = module.path;
    moduleContent.append(intro, actions, frame);
    return;
  }

  const state = document.createElement("div");
  state.className = "material-state";
  const title = document.createElement("strong");
  const description = document.createElement("p");
  if (module.number <= 2) {
    title.textContent = "Official PDF not available";
    description.textContent = `The source file ${module.filename} was not present in the supplied workspace. Add the official PDF at ${module.path} to enable the viewer, download, and new-tab actions.`;
  } else {
    title.textContent = "Study material will be added soon.";
    description.textContent = "This module is ready for its official course notes and learning resources.";
  }
  state.append(title, description);
  moduleContent.append(state);
}

async function selectModule(number, checkForFile = true) {
  const module = moduleData.find((entry) => entry.number === number) || moduleData[0];
  moduleSelection.set("current", module.number);
  document.querySelectorAll(".module-select").forEach((button) => {
    button.setAttribute("aria-selected", String(Number(button.dataset.module) === module.number));
  });
  if (!module.path || !checkForFile) {
    renderModule(module, false);
    return;
  }
  if (window.location.protocol === "file:") {
    renderModule(module, true);
    return;
  }
  renderModule(module, false);
  const status = document.querySelector(`[data-module="${module.number}"] .module-label small`);
  if (status) status.textContent = "Checking PDF...";
  try {
    const response = await fetch(module.path, { method: "HEAD", cache: "no-store" });
    if (moduleSelection.get("current") === module.number) {
      if (status) status.textContent = response.ok ? "PDF available" : "PDF not available";
      renderModule(module, response.ok);
    }
  } catch (error) {
    if (moduleSelection.get("current") === module.number) {
      if (status) status.textContent = "Could not check PDF";
      const description = moduleContent.querySelector(".material-state p");
      if (description) description.textContent = `PDF availability could not be checked in this browser. Serve the site over HTTP and place the official file at ${module.path}.`;
    }
  }
}

function renderExperimentList() {
  const list = document.querySelector("#experiment-list");
  list.replaceChildren(...Array.from({ length: 10 }, (_, index) => {
    const number = index + 1;
    const experiment = experimentData.find((item) => item.number === number);
    const group = document.createElement("div");
    group.className = "experiment-group";

    const button = document.createElement("button");
    button.className = "experiment-select";
    button.type = "button";
    button.setAttribute("aria-expanded", String(expandedExperiments.has(number)));
    button.setAttribute("aria-controls", `experiment-sublist-${number}`);
    button.setAttribute("aria-selected", "false");
    button.dataset.experiment = String(number);
    button.innerHTML = `<span class="module-index">${String(number).padStart(2, "0")}</span><span class="experiment-label"><strong>${experiment ? `Experiment ${number}: ${experiment.title}` : `Experiment ${number}`}</strong><small>${experiment ? `${experiment.subExperiments.length} sub-experiments` : "Content pending"}</small></span><span class="experiment-chevron" aria-hidden="true"></span>`;
    button.addEventListener("click", () => {
      if ([1, 2, 3, 5].includes(experiment?.number)) {
        expandedExperiments.add(number);
        setHash(`experiments/${number}`);
        if (window.matchMedia("(max-width: 680px)").matches) setExperimentSidebarOpen(true);
        return;
      }
      if (!experiment && number <= 6) {
        setHash(`experiments/${number}`);
        return;
      }
      if (expandedExperiments.has(number)) expandedExperiments.delete(number);
      else expandedExperiments.add(number);
      button.setAttribute("aria-expanded", String(expandedExperiments.has(number)));
      subList.hidden = !expandedExperiments.has(number);
      if (window.matchMedia("(max-width: 680px)").matches) setExperimentSidebarOpen(true);
    });

    const subList = document.createElement("div");
    subList.className = "experiment-sublist";
    subList.id = `experiment-sublist-${number}`;
    subList.setAttribute("aria-label", `Experiment ${number} sub-experiments`);
    subList.hidden = !expandedExperiments.has(number);
    if (experiment) {
      for (const subExperiment of experiment.subExperiments) {
        const subButton = document.createElement("button");
        subButton.className = "experiment-subselect";
        subButton.type = "button";
        subButton.dataset.subExperiment = subExperiment.id;
        subButton.setAttribute("aria-pressed", "false");
        subButton.textContent = `Sub-experiment ${subExperiment.id}: ${subExperiment.title}`;
        subButton.addEventListener("click", () => setHash(`experiments/${number}/${subExperiment.id}`));
        subList.append(subButton);
      }
    } else {
      const unavailable = document.createElement("p");
      unavailable.className = "experiment-unavailable";
      unavailable.textContent = "No sub-experiments supplied for this experiment yet.";
      subList.append(unavailable);
    }
    group.append(button, subList);
    return group;
  }));
}

function setExperimentSidebarOpen(isOpen) {
  const list = document.querySelector("#experiment-list");
  const toggle = document.querySelector(".experiment-sidebar-toggle");
  list.hidden = !isOpen;
  toggle.setAttribute("aria-expanded", String(isOpen));
  toggle.textContent = isOpen ? "Hide experiments" : "Show experiments";
}

document.querySelector(".experiment-sidebar-toggle").addEventListener("click", () => {
  const toggle = document.querySelector(".experiment-sidebar-toggle");
  setExperimentSidebarOpen(toggle.getAttribute("aria-expanded") !== "true");
});

function getExperimentState(subExperiment) {
  if (!experimentStates.has(subExperiment.id)) {
    experimentStates.set(subExperiment.id, {
      code: subExperiment.code,
      output: "No code has been run yet.",
      figures: [],
      files: []
    });
  }
  return experimentStates.get(subExperiment.id);
}

function getUnavailableProgramState(program) {
  if (!experimentStates.has(program.id)) {
    experimentStates.set(program.id, {
      code: program.code || "",
      output: "No code has been run yet.",
      figures: [],
      files: []
    });
  }
  return experimentStates.get(program.id);
}

function getYouTubeEmbedUrl(value) {
  if (!value) return "";
  try {
    const url = new URL(value);
    const supportedHosts = ["youtube.com", "www.youtube.com", "m.youtube.com", "youtu.be", "www.youtube-nocookie.com"];
    if (url.protocol !== "https:" || !supportedHosts.includes(url.hostname.toLowerCase())) return "";
    const segments = url.pathname.split("/").filter(Boolean);
    const videoId = url.hostname.toLowerCase() === "youtu.be"
      ? segments[0]
      : url.searchParams.get("v") || (["embed", "shorts", "live"].includes(segments[0]) ? segments[1] : "");
    return videoId && /^[A-Za-z0-9_-]{11}$/.test(videoId)
      ? `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=0&playsinline=1`
      : "";
  } catch {
    return "";
  }
}

function getConfiguredExperimentVideos(experimentNumber) {
  try {
    const savedVideos = JSON.parse(localStorage.getItem(experimentVideoStorageKey) || "{}");
    const savedUrl = savedVideos[experimentNumber];
    if (savedUrl && getYouTubeEmbedUrl(savedUrl)) {
      return [{ title: experimentVideos[experimentNumber].title, url: savedUrl, channel: "" }];
    }
  } catch (error) {
    console.error("Unable to read saved experiment video settings.", error);
  }
  return experimentVideos[experimentNumber]?.videos || [];
}

function renderExperimentVideo(experimentNumber) {
  const section = document.createElement("section");
  section.className = "experiment-video-section";
  section.id = `experiment-${experimentNumber}-video`;
  section.dataset.experimentVideo = String(experimentNumber);
  section.append(makeElement("h3", "", "Video Tutorial"));

  const video = experimentVideos[experimentNumber];
  const configuredVideos = getConfiguredExperimentVideos(experimentNumber);
  const playableVideos = configuredVideos.filter((candidate) => {
    const embedUrl = getYouTubeEmbedUrl(candidate.url);
    const duplicate = embedUrl && Object.entries(experimentVideos).some(([number]) =>
      Number(number) !== experimentNumber
        && getConfiguredExperimentVideos(Number(number)).some((otherVideo) =>
          getYouTubeEmbedUrl(otherVideo.url) === embedUrl
        )
    );
    if (candidate.url && (!embedUrl || duplicate)) {
      console.error(`Experiment ${experimentNumber} needs a valid, unique YouTube video URL.`);
    }
    return Boolean(embedUrl && !duplicate);
  });
  if (!playableVideos.length) {
    section.append(makeElement("h4", "experiment-video-title", video.title));
    const placeholder = makeElement(
      "p",
      "experiment-video-placeholder",
      configuredVideos.length
        ? "The configured video link is invalid or already assigned to another experiment."
        : "Video link not available."
    );
    placeholder.setAttribute("role", "note");
    const settings = makeElement("form", "experiment-video-settings");
    const label = makeElement("label", "", "Editable YouTube video URL");
    const input = document.createElement("input");
    input.type = "url";
    input.name = "video-url";
    input.placeholder = "https://www.youtube.com/watch?v=…";
    input.autocomplete = "url";
    input.setAttribute("aria-label", `YouTube video URL for Experiment ${experimentNumber}`);
    const save = makeElement("button", "button button-quiet", "Save video URL");
    save.type = "submit";
    const status = makeElement("p", "experiment-video-setting-status", "");
    status.setAttribute("role", "status");
    settings.append(label, input, save, status);
    settings.addEventListener("submit", (event) => {
      event.preventDefault();
      const newUrl = input.value.trim();
      const newEmbedUrl = getYouTubeEmbedUrl(newUrl);
      if (!newEmbedUrl) {
        status.textContent = "Enter a valid HTTPS YouTube watch, youtu.be, Shorts, or live video URL.";
        return;
      }
      const usedByAnotherExperiment = Object.entries(experimentVideos).some(([number]) =>
        Number(number) !== experimentNumber
          && getConfiguredExperimentVideos(Number(number)).some((otherVideo) =>
            getYouTubeEmbedUrl(otherVideo.url) === newEmbedUrl
          )
      );
      if (usedByAnotherExperiment) {
        status.textContent = "That video URL is already assigned to another experiment.";
        return;
      }
      try {
        const savedVideos = JSON.parse(localStorage.getItem(experimentVideoStorageKey) || "{}");
        savedVideos[experimentNumber] = newUrl;
        localStorage.setItem(experimentVideoStorageKey, JSON.stringify(savedVideos));
        section.replaceWith(renderExperimentVideo(experimentNumber));
      } catch (error) {
        console.error("Unable to save the experiment video URL.", error);
        status.textContent = "The URL is valid but could not be saved in this browser.";
      }
    });
    section.append(placeholder, settings);
    return section;
  }

  playableVideos.forEach((candidate) => {
    const embedUrl = getYouTubeEmbedUrl(candidate.url);
    const item = makeElement("article", "experiment-video-item");
    item.append(makeElement("h4", "experiment-video-title", candidate.title));
    if (candidate.channel) item.append(makeElement("p", "experiment-video-channel", `Channel: ${candidate.channel}`));
    const frameWrap = makeElement("div", "experiment-video-frame");
    const frame = document.createElement("iframe");
    frame.src = embedUrl;
    frame.title = candidate.title;
    frame.loading = "lazy";
    frame.referrerPolicy = "strict-origin-when-cross-origin";
    frame.allow = "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    frame.allowFullscreen = true;
    frameWrap.append(frame);
    const openLink = makeElement("a", "experiment-video-open", "Open on YouTube");
    openLink.href = candidate.url;
    openLink.target = "_blank";
    openLink.rel = "noopener noreferrer";
    item.append(frameWrap, openLink);
    section.append(item);
  });
  return section;
}

function renderExperimentWelcome() {
  experimentContent.replaceChildren();
  const eyebrow = makeElement("p", "eyebrow accent", "PRACTICAL LEARNING");
  const heading = makeElement("h2", "", "Select an experiment to get started");
  const description = makeElement("p", "muted", "Choose an experiment in the sidebar, then select a sub-experiment to view its aim, description, and code example.");
  experimentContent.append(eyebrow, heading, description);
}

function renderExperiment1Overview(experiment) {
  experimentContent.replaceChildren();
  experimentContent.append(
    makeElement("p", "eyebrow accent", `MODULE ${experiment.module} · COURSE ${experiment.courseCode}`),
    makeElement("h2", "", `Experiment 1: ${experiment.title}`),
    renderExperiment1VideoNotice()
  );

  const aim = document.createElement("section");
  aim.className = "experiment-detail";
  aim.append(makeElement("h3", "", "Aim"), makeElement("p", "", experiment.aim));

  const requirements = document.createElement("section");
  requirements.className = "experiment-detail";
  requirements.append(
    makeElement("h3", "", "Software Requirements"),
    makeElement("p", "", experiment.softwareRequirements.join(", "))
  );

  const missingSections = document.createElement("section");
  missingSections.className = "experiment-reference";
  missingSections.append(
    makeElement("h3", "", "Original lab-manual sections not available"),
    makeElement("p", "", "Theory, Procedure, and Result text and the original nine program bodies, datasets, comments, and expected outputs were not included in the supplied content. The code editors below contain generated illustrative examples based on the supplied program titles; they are not transcribed from the original manual.")
  );

  const subExperiments = document.createElement("section");
  subExperiments.className = "experiment-detail";
  subExperiments.append(makeElement("h3", "", "Sub-experiments"));
  const links = makeElement("div", "experiment-actions");
  experiment.subExperiments.forEach((subExperiment) => {
    const button = makeElement("button", "button button-quiet", `${subExperiment.id}: ${subExperiment.title}`);
    button.type = "button";
    button.addEventListener("click", () => setHash(`experiments/1/${subExperiment.id}`));
    links.append(button);
  });
  subExperiments.append(links);
  experimentContent.append(aim, requirements, missingSections, subExperiments);
}

function renderExperiment1VideoNotice() {
  return renderExperimentVideo(1);
}

function renderExperiment3Overview(experiment) {
  experimentContent.replaceChildren(
    makeElement("p", "eyebrow accent", `MODULE ${experiment.module} · COURSE ${experiment.courseCode}`),
    makeElement("h2", "", `Experiment 3: ${experiment.title}`),
    renderExperimentVideo(3)
  );

  const details = document.createElement("section");
  details.className = "experiment-detail";
  details.append(
    makeElement("p", "", `College: ${experiment.institution}`),
    makeElement("p", "", `Student: ${experiment.student} · Roll Number: ${experiment.rollNumber}`),
    makeElement("p", "", `Faculty: ${experiment.faculty}`)
  );

  const sourceNotice = document.createElement("section");
  sourceNotice.className = "experiment-reference";
  sourceNotice.append(
    makeElement("h3", "", "Source document status"),
    makeElement("p", "", "The Experiment 3 manual file was not present in the workspace. The ten program titles and code below are taken from the content supplied in the request. The original AIM, SOFTWARE REQUIREMENTS, THEORY, PROCEDURE, and RESULT prose was not supplied and is marked for verification rather than represented as official source text.")
  );

  const sections = [
    ["AIM", experiment.aim],
    ["SOFTWARE REQUIREMENTS", experiment.softwareRequirements.join(", ")],
    ["THEORY", experiment.theory],
    ["PROCEDURE", experiment.procedure],
    ["RESULT", experiment.result]
  ];
  const manualSections = document.createElement("div");
  sections.forEach(([title, content]) => {
    const section = document.createElement("section");
    section.className = "experiment-detail";
    section.append(
      makeElement("h3", "", title),
      makeElement("p", content ? "" : "muted", content || "Not included in the available Experiment 3 source; verify against the original manual.")
    );
    if (title === "SOFTWARE REQUIREMENTS") {
      section.append(makeElement("p", "muted small", "The list above is derived from imports used by the supplied programs; the original manual's requirements section was unavailable."));
    }
    manualSections.append(section);
  });

  const subExperiments = document.createElement("section");
  subExperiments.className = "experiment-detail";
  subExperiments.append(makeElement("h3", "", "Sub-experiments"));
  const links = makeElement("div", "experiment-actions");
  experiment.subExperiments.forEach((subExperiment) => {
    const button = makeElement("button", "button button-quiet", `${subExperiment.id}: ${subExperiment.title}`);
    button.type = "button";
    button.addEventListener("click", () => setHash(`experiments/3/${subExperiment.id}`));
    links.append(button);
  });
  subExperiments.append(links);
  experimentContent.append(details, sourceNotice, manualSections, subExperiments);
}

function renderExperiment5Overview(experiment) {
  experimentContent.replaceChildren(
    makeElement("p", "eyebrow accent", `MODULE ${experiment.module} · COURSE ${experiment.courseCode}`),
    makeElement("h2", "", `Experiment 5: ${experiment.title}`),
    renderExperimentVideo(5)
  );

  const details = document.createElement("section");
  details.className = "experiment-detail";
  details.append(
    makeElement("p", "", `College: ${experiment.institution}`),
    makeElement("p", "", `Student: ${experiment.student} · Roll Number: ${experiment.rollNumber}`),
    makeElement("p", "", `Faculty: ${experiment.faculty}`)
  );
  const sections = [
    ["AIM", experiment.aim],
    ["SOFTWARE REQUIREMENTS", experiment.softwareRequirements.join(", ")],
    ["SYNTAX", experiment.syntax],
    ["THEORY", "The source introduces line plots, grouped and stacked bar plots, histograms, density plots, scatter plots and box plots; the combined program uses the online Iris dataset."]
  ];
  const writeUp = sections.map(([title, content]) => {
    const section = document.createElement("section");
    section.className = "experiment-detail";
    section.append(makeElement("h3", "", title));
    section.append(title === "SYNTAX"
      ? makeElement("pre", "experiment-reference-output", content)
      : makeElement("p", "", content));
    return section;
  });
  const subList = document.createElement("section");
  subList.className = "experiment-detail";
  subList.append(makeElement("h3", "", "Sub-experiments"));
  const buttons = makeElement("div", "experiment-actions");
  experiment.subExperiments.forEach((subExperiment) => {
    const button = makeElement("button", "button button-quiet", `${subExperiment.id}: ${subExperiment.title}`);
    button.type = "button";
    button.addEventListener("click", () => setHash(`experiments/5/${subExperiment.id}`));
    buttons.append(button);
  });
  subList.append(buttons);
  experimentContent.append(details, ...writeUp, subList);
}

function renderExperiment5SubExperiment(experiment, subExperiment) {
  experimentContent.replaceChildren(
    makeElement("p", "eyebrow accent", `MODULE ${experiment.module} · COURSE ${experiment.courseCode}`),
    makeElement("h2", "", `Experiment 5: ${experiment.title}`),
    makeElement("p", "eyebrow accent", `SUB-EXPERIMENT ${subExperiment.id}`),
    makeElement("h2", "", subExperiment.title),
    renderExperimentVideo(5)
  );
  const navigation = makeElement("div", "experiment-navigation");
  const back = makeElement("button", "button button-quiet", "Back to Experiments");
  back.type = "button";
  back.addEventListener("click", () => setHash("experiments"));
  const index = experiment.subExperiments.indexOf(subExperiment);
  const previous = makeElement("button", "button button-quiet", "Previous");
  previous.type = "button";
  previous.disabled = index === 0;
  previous.addEventListener("click", () => {
    if (index > 0) setHash(`experiments/5/${experiment.subExperiments[index - 1].id}`);
  });
  const next = makeElement("button", "button button-quiet", "Next");
  next.type = "button";
  next.disabled = index === experiment.subExperiments.length - 1;
  next.addEventListener("click", () => {
    if (index < experiment.subExperiments.length - 1) {
      setHash(`experiments/5/${experiment.subExperiments[index + 1].id}`);
    }
  });
  navigation.append(back, previous, next);
  experimentContent.append(navigation);

  [
    ["AIM", subExperiment.aim],
    ["SOFTWARE REQUIREMENTS", experiment.softwareRequirements.join(", ")],
    ["SYNTAX", subExperiment.syntax],
    ["THEORY / EXPLANATION", subExperiment.theory],
    ["PROCEDURE", subExperiment.procedure]
  ].forEach(([title, content]) => {
    const section = document.createElement("section");
    section.className = "experiment-detail";
    section.append(makeElement("h3", "", title));
    section.append(title === "SYNTAX"
      ? makeElement("pre", "experiment-reference-output", content)
      : makeElement("p", "", content));
    experimentContent.append(section);
  });

  experimentContent.append(makeElement("h3", "", "PROGRAMS AND OUTPUT"));
  subExperiment.examples.forEach((program, programIndex) => {
    experimentContent.append(renderUnavailableProgram(experiment, subExperiment, program, programIndex));
  });
  const outputReference = document.createElement("section");
  outputReference.className = "experiment-reference";
  outputReference.append(
    makeElement("h3", "", "Expected output (source reference)"),
    makeElement("p", "", subExperiment.output)
  );
  experimentContent.append(
    outputReference,
    makeElement("h3", "", "RESULT"),
    makeElement("p", "experiment-explanation", subExperiment.result)
  );
}

function renderExperiment6Overview(experiment) {
  experimentContent.replaceChildren(
    makeElement("p", "eyebrow accent", `MODULE ${experiment.module} · COURSE ${experiment.courseCode}`),
    makeElement("h2", "", `Experiment 6: ${experiment.title}`),
    renderExperimentVideo(6)
  );

  const details = document.createElement("section");
  details.className = "experiment-detail";
  details.append(
    makeElement("p", "", `College: ${experiment.institution}`),
    makeElement("p", "", `Student: ${experiment.student} · Roll Number: ${experiment.rollNumber}`),
    makeElement("p", "", `Faculty: ${experiment.faculty}`)
  );
  const aim = document.createElement("section");
  aim.className = "experiment-detail";
  aim.append(
    makeElement("h3", "", "Aim"),
    makeElement("p", "", "To perform time series analysis using Pandas datetime objects, date ranges, time zones, periods, frequency conversion, and resampling.")
  );
  const requirements = document.createElement("section");
  requirements.className = "experiment-detail";
  requirements.append(
    makeElement("h3", "", "Software Requirements"),
    makeElement("p", "", experiment.softwareRequirements.join(", "))
  );
  const topics = document.createElement("section");
  topics.className = "experiment-detail";
  topics.append(makeElement("h3", "", "Sub-experiments"));
  const links = makeElement("div", "experiment-actions");
  experiment.subExperiments.forEach((subExperiment) => {
    const button = makeElement("button", "button button-quiet", `${subExperiment.id}: ${subExperiment.title}`);
    button.type = "button";
    button.addEventListener("click", () => setHash(`experiments/6/${subExperiment.id}`));
    links.append(button);
  });
  topics.append(links);
  experimentContent.append(details, aim, requirements, topics);
}

function renderExperiment6SubExperiment(experiment, subExperiment) {
  experimentContent.replaceChildren(
    makeElement("p", "eyebrow accent", `MODULE ${experiment.module} · COURSE ${experiment.courseCode}`),
    makeElement("h2", "", `Experiment 6: ${experiment.title}`),
    makeElement("p", "eyebrow accent", `SUB-EXPERIMENT ${subExperiment.id}`),
    makeElement("h2", "", subExperiment.title),
    renderExperimentVideo(6)
  );

  const navigation = makeElement("div", "experiment-navigation");
  const back = makeElement("button", "button button-quiet", "Back to Experiments");
  back.type = "button";
  back.addEventListener("click", () => setHash("experiments"));
  const index = experiment.subExperiments.indexOf(subExperiment);
  const previous = makeElement("button", "button button-quiet", "Previous");
  previous.type = "button";
  previous.disabled = index === 0;
  previous.addEventListener("click", () => {
    if (index > 0) setHash(`experiments/6/${experiment.subExperiments[index - 1].id}`);
  });
  const next = makeElement("button", "button button-quiet", "Next");
  next.type = "button";
  next.disabled = index === experiment.subExperiments.length - 1;
  next.addEventListener("click", () => {
    if (index < experiment.subExperiments.length - 1) {
      setHash(`experiments/6/${experiment.subExperiments[index + 1].id}`);
    }
  });
  navigation.append(back, previous, next);
  experimentContent.append(navigation);

  const sections = [
    ["Aim", subExperiment.aim, false],
    ["Syntax", subExperiment.syntax, true]
  ];
  if (subExperiment.parameters) sections.push(["Important Parameters", subExperiment.parameters, false]);
  sections.forEach(([title, content, isCode]) => {
    const section = document.createElement("section");
    section.className = "experiment-detail";
    section.append(makeElement("h3", "", title));
    section.append(isCode
      ? makeElement("pre", "experiment-reference-output", content)
      : makeElement("p", "", content));
    experimentContent.append(section);
  });

  experimentContent.append(makeElement("h3", "", "Program Solution"));
  subExperiment.examples.forEach((program, programIndex) => {
    experimentContent.append(renderUnavailableProgram(experiment, subExperiment, program, programIndex));
  });

  if (subExperiment.sampleOutput) {
    const outputReference = document.createElement("section");
    outputReference.className = "experiment-reference";
    outputReference.append(
      makeElement("h3", "", "Output / Sample Output (source document)"),
      makeElement("pre", "experiment-reference-output", subExperiment.sampleOutput)
    );
    if (subExperiment.sampleOutputNote) {
      outputReference.append(makeElement("p", "muted", subExperiment.sampleOutputNote));
    }
    experimentContent.append(outputReference);
  }

  const explanation = document.createElement("section");
  explanation.className = "experiment-detail";
  explanation.append(
    makeElement("h3", "", "Explanation"),
    makeElement("p", "", subExperiment.explanation)
  );
  const result = document.createElement("section");
  result.className = "experiment-detail";
  result.append(
    makeElement("h3", "", "Result"),
    makeElement("p", "", subExperiment.result)
  );
  experimentContent.append(explanation, result);

  if (subExperiment.id === "6(g)") {
    const myPrograms = document.createElement("section");
    myPrograms.className = "experiment-detail";
    myPrograms.append(
      makeElement("h2", "", "My Programs"),
      makeElement("p", "muted", "Additional self-contained examples transcribed from the source document.")
    );
    experiment.myPrograms.forEach((program, programIndex) => {
      myPrograms.append(renderUnavailableProgram(
        experiment,
        { id: "My Programs" },
        program,
        programIndex
      ));
    });
    experimentContent.append(myPrograms);
  }
}

function renderExperiment3SubExperiment(experiment, subExperiment) {
  experimentContent.replaceChildren(
    makeElement("p", "eyebrow accent", `MODULE ${experiment.module} · COURSE ${experiment.courseCode}`),
    makeElement("h2", "", `Experiment 3: ${experiment.title}`),
    renderExperimentVideo(3)
  );

  const navigation = makeElement("div", "experiment-navigation");
  const back = makeElement("button", "button button-quiet", "Back to Experiments");
  back.type = "button";
  back.addEventListener("click", () => setHash("experiments"));
  const selectedIndex = experiment.subExperiments.indexOf(subExperiment);
  const previous = makeElement("button", "button button-quiet", "Previous");
  previous.type = "button";
  previous.disabled = selectedIndex === 0;
  previous.addEventListener("click", () => {
    if (selectedIndex > 0) setHash(`experiments/3/${experiment.subExperiments[selectedIndex - 1].id}`);
  });
  const next = makeElement("button", "button button-quiet", "Next");
  next.type = "button";
  next.disabled = selectedIndex === experiment.subExperiments.length - 1;
  next.addEventListener("click", () => {
    if (selectedIndex < experiment.subExperiments.length - 1) {
      setHash(`experiments/3/${experiment.subExperiments[selectedIndex + 1].id}`);
    }
  });
  navigation.append(back, previous, next);

  const sourceSections = [
    ["AIM", experiment.aim],
    ["SOFTWARE REQUIREMENTS", experiment.softwareRequirements.join(", ")],
    ["THEORY", experiment.theory],
    ["PROCEDURE", experiment.procedure]
  ];
  const renderedSections = sourceSections.map(([title, content]) => {
    const section = document.createElement("section");
    section.className = "experiment-detail";
    section.append(
      makeElement("h3", "", title),
      makeElement("p", content ? "" : "muted", content || "Not included in the available Experiment 3 source; verify against the original manual.")
    );
    if (title === "SOFTWARE REQUIREMENTS") {
      section.append(makeElement("p", "muted small", "Derived from imports in the supplied programs; verify against the original manual."));
    }
    return section;
  });
  const missingSource = makeElement(
    "p",
    "muted experiment-explanation",
    "The program code below was supplied in the request. Original manual explanations and expected output were not available; the output panels show actual execution only."
  );
  experimentContent.append(
    makeElement("p", "eyebrow accent", `EXPERIMENT 3 · SUB-EXPERIMENT ${subExperiment.id}`),
    makeElement("h2", "", subExperiment.title),
    navigation,
    ...renderedSections,
    missingSource,
    makeElement("h3", "", "PROGRAMS AND OUTPUT")
  );
  subExperiment.examples.forEach((program, index) => {
    experimentContent.append(renderUnavailableProgram(experiment, subExperiment, program, index));
  });
  const result = document.createElement("section");
  result.className = "experiment-detail";
  result.append(
    makeElement("h3", "", "RESULT"),
    makeElement("p", "muted", "Not included in the available Experiment 3 source; verify against the original manual.")
  );
  experimentContent.append(result);
}

function renderExperiment2VideoNotice() {
  return renderExperimentVideo(2);
}

function renderExperiment2Overview(experiment) {
  experimentContent.replaceChildren(
    makeElement("p", "eyebrow accent", `MODULE ${experiment.module} · COURSE ${experiment.courseCode}`),
    makeElement("h2", "", `Experiment 2: ${experiment.title}`),
    renderExperimentVideo(2)
  );

  const aim = document.createElement("section");
  aim.className = "experiment-detail";
  aim.append(makeElement("h3", "", "Aim"), makeElement("p", "", experiment.aim));
  const requirements = document.createElement("section");
  requirements.className = "experiment-detail";
  requirements.append(
    makeElement("h3", "", "Software Requirements"),
    makeElement("p", "", experiment.softwareRequirements.join("\n"))
  );
  const theory = document.createElement("section");
  theory.className = "experiment-detail";
  theory.append(makeElement("h3", "", "Theory"), makeElement("p", "", experiment.theory));
  const procedure = document.createElement("section");
  procedure.className = "experiment-detail";
  procedure.append(makeElement("h3", "", "Procedure"), makeElement("p", "", experiment.procedure));
  const sourceNotes = document.createElement("section");
  sourceNotes.className = "experiment-reference";
  sourceNotes.append(makeElement("h3", "", "Source formatting and output notes"));
  experiment.sourceNotes.forEach((note) => sourceNotes.append(makeElement("p", "", note)));
  const endpoint = document.createElement("section");
  endpoint.className = "experiment-detail";
  endpoint.append(makeElement("h3", "", "GitHub API endpoint"));
  const endpointText = makeElement("code", "experiment-inline-code", experiment.apiEndpoint);
  endpoint.querySelector("h3").after(endpointText);
  const persistence = document.createElement("div");
  persistence.className = "material-state";
  persistence.append(
    makeElement("strong", "", "SQLite execution and persistence"),
    makeElement("p", "", "Programs 2(b) 1–7 use datascience_lab.db. Run them in order in the same page session; program 3 clears and repopulates students. Pyodide shares its virtual filesystem across editor runs, but this is not durable server-side storage and is reset when the page or runtime restarts.")
  );

  const subExperiments = document.createElement("section");
  subExperiments.className = "experiment-detail";
  subExperiments.append(makeElement("h3", "", "Sub-experiments"));
  const links = makeElement("div", "experiment-actions");
  experiment.subExperiments.forEach((subExperiment) => {
    const button = makeElement("button", "button button-quiet", `${subExperiment.id}: ${subExperiment.title}`);
    button.type = "button";
    button.addEventListener("click", () => setHash(`experiments/2/${subExperiment.id}`));
    links.append(button);
  });
  subExperiments.append(links);
  const result = document.createElement("section");
  result.className = "experiment-reference";
  result.append(
    makeElement("h3", "", "Result (source report)"),
    makeElement("p", "", experiment.result),
    makeElement("p", "muted", "This is the supplied report wording, not evidence that this website executed the programs.")
  );
  experimentContent.append(aim, requirements, theory, procedure, sourceNotes, endpoint, persistence, subExperiments, result);
}

function getExperiment2ProgramState(program) {
  if (!experimentStates.has(program.id)) {
    experimentStates.set(program.id, {
      code: program.code,
      output: "No code has been run yet.",
      figures: [],
      files: []
    });
  }
  return experimentStates.get(program.id);
}

function renderExperiment2Program(experiment, program, index) {
  const state = getExperiment2ProgramState(program);
  const section = document.createElement("section");
  section.className = "experiment-editor-section";
  const heading = document.createElement("div");
  heading.className = "experiment-editor-heading";
  const metadata = makeElement("div", "experiment-editor-meta");
  metadata.append(
    makeElement("p", "eyebrow", `PROGRAM ${index + 1} · ${program.id}`),
    makeElement("p", "muted small", "Independent code and output state.")
  );
  heading.append(metadata, makeElement("h3", "", program.title));
  section.append(heading);
  if (program.description) section.append(makeElement("p", "muted experiment-explanation", program.description));

  const editor = document.createElement("textarea");
  editor.className = "experiment-code-editor";
  editor.setAttribute("aria-label", `Python code for Experiment 2, program ${index + 1}: ${program.title}`);
  editor.setAttribute("spellcheck", "false");
  editor.value = state.code;
  editor.addEventListener("input", () => { state.code = editor.value; });

  const actions = makeElement("div", "experiment-actions");
  const run = makeElement("button", "button button-primary", "Run Code");
  const copy = makeElement("button", "button button-quiet", "Copy Code");
  const reset = makeElement("button", "button button-quiet", "Reset Code");
  const clear = makeElement("button", "button button-quiet", "Clear Output");
  [run, copy, reset, clear].forEach((button) => { button.type = "button"; });
  const actionStatus = makeElement("p", "experiment-action-status", "");
  actionStatus.setAttribute("role", "status");
  actions.append(run, copy, reset, clear);
  const runtimeStatus = makePythonRuntimeStatus();

  const outputSection = document.createElement("section");
  outputSection.className = "experiment-output-section";
  outputSection.append(makeElement("h3", "", "Output"));
  const output = makeElement("pre", "experiment-output", state.output);
  output.setAttribute("aria-live", "polite");
  outputSection.append(output);
  renderPythonFigures(output, state.figures, state.files);
  attachPythonRunner(run, editor, state, output, runtimeStatus, `experiment-${experiment.number}-${program.id}`);
  copy.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(state.code);
      actionStatus.textContent = "Code copied.";
    } catch (error) {
      console.error("Unable to copy experiment code.", error);
      actionStatus.textContent = "Clipboard access failed. Select and copy the code manually.";
    }
  });
  reset.addEventListener("click", () => {
    state.code = program.code;
    state.output = "No code has been run yet.";
    state.figures = [];
    state.files = [];
    const selectedSubExperiment = experiment.subExperiments.find((item) =>
      item.examples.some((example) => example.id === program.id)
    );
    renderExperiment2SubExperiment(experiment, selectedSubExperiment);
  });
  clear.addEventListener("click", () => {
    state.output = "Output cleared.";
    state.figures = [];
    state.files = [];
    renderPythonFigures(output, state.figures, state.files);
    output.textContent = state.output;
  });
  section.append(editor, runtimeStatus, actions, actionStatus, outputSection);

  if (program.referenceOutput) {
    const reference = document.createElement("details");
    reference.className = "experiment-reference-output-details";
    reference.append(
      makeElement("summary", "", "Source-provided output (reference only; not live execution)"),
      makeElement("pre", "experiment-reference-output", program.referenceOutput)
    );
    section.append(reference);
  }
  return section;
}

function renderExperiment2SubExperiment(experiment, subExperiment) {
  experimentContent.replaceChildren(
    makeElement("p", "eyebrow accent", `MODULE ${experiment.module} · COURSE ${experiment.courseCode}`),
    makeElement("h2", "", `Experiment 2: ${experiment.title}`),
    renderExperimentVideo(2)
  );

  const aim = document.createElement("section");
  aim.className = "experiment-detail";
  aim.append(makeElement("h3", "", "Aim"), makeElement("p", "", experiment.aim));
  const requirements = document.createElement("section");
  requirements.className = "experiment-detail";
  requirements.append(
    makeElement("h3", "", "Software Requirements"),
    makeElement("p", "", experiment.softwareRequirements.join("\n"))
  );
  const theory = document.createElement("section");
  theory.className = "experiment-detail";
  theory.append(makeElement("h3", "", "Theory"), makeElement("p", "", experiment.theory));
  const procedure = document.createElement("section");
  procedure.className = "experiment-detail";
  procedure.append(makeElement("h3", "", "Procedure"), makeElement("p", "", experiment.procedure));

  const navigation = document.createElement("div");
  navigation.className = "experiment-navigation";
  const back = makeElement("button", "button button-quiet", "Back to Experiments");
  back.type = "button";
  back.addEventListener("click", () => setHash("experiments"));
  const selectedIndex = experiment.subExperiments.indexOf(subExperiment);
  const previous = makeElement("button", "button button-quiet", "Previous");
  previous.type = "button";
  previous.disabled = selectedIndex === 0;
  previous.addEventListener("click", () => {
    if (selectedIndex > 0) setHash(`experiments/2/${experiment.subExperiments[selectedIndex - 1].id}`);
  });
  const next = makeElement("button", "button button-quiet", "Next");
  next.type = "button";
  next.disabled = selectedIndex === experiment.subExperiments.length - 1;
  next.addEventListener("click", () => {
    if (selectedIndex < experiment.subExperiments.length - 1) setHash(`experiments/2/${experiment.subExperiments[selectedIndex + 1].id}`);
  });
  navigation.append(back, previous, next);
  experimentContent.append(aim, requirements, theory, procedure);

  if (subExperiment.id === "2(a)") {
    const endpoint = makeElement("code", "experiment-inline-code", experiment.apiEndpoint);
    experimentContent.append(makeElement("h3", "", "GitHub API endpoint"), endpoint);
  } else {
    const persistence = makeElement("div", "material-state");
    persistence.append(
      makeElement("strong", "", "SQLite shared state requirement"),
      makeElement("p", "", "Programs 2(b) 1–7 use datascience_lab.db. Run them in order in the same page session; program 3 resets and seeds the table. The Pyodide virtual filesystem is shared across runs, but it is not durable server-side storage and is reset when the page or runtime restarts.")
    );
    experimentContent.append(persistence);
  }
  experimentContent.append(
    makeElement("h2", "", subExperiment.title),
    navigation,
    makeElement("h3", "", "Programs & Independent Runnable Code Editors")
  );
  subExperiment.examples.forEach((program, index) => {
    experimentContent.append(renderExperiment2Program(experiment, program, index));
  });
}

function renderUnavailableProgram(experiment, subExperiment, program, index) {
  const state = getUnavailableProgramState(program);
  const programNumber = Number(program.id.match(/program-(\d+)$/)?.[1]) || index + 1;
  const section = document.createElement("section");
  section.className = "experiment-editor-section";

  const heading = document.createElement("div");
  heading.className = "experiment-editor-heading";
  const headingMeta = makeElement("div", "experiment-editor-meta");
  headingMeta.append(
    makeElement("p", "eyebrow", `PROGRAM ${program.programNumber || programNumber} · ${program.id}`),
    makeElement(
      "p",
      "muted small",
      program.generated
        ? "Generated illustrative example; not copied from the unavailable original manual."
        : program.sourceDocument
          ? program.sourceLabel || (experiment.number === 5
            ? "Program transcribed from DS_Program5.docx."
            : "Program transcribed from the supplied source document.")
        : program.code
          ? "Program code supplied in the request; verify against the original manual."
          : "Original program body was not available in the supplied material."
    )
  );
  heading.append(headingMeta, makeElement("h3", "", program.title));

  const editor = document.createElement("textarea");
  editor.className = "experiment-code-editor";
  editor.setAttribute("aria-label", `Python code for Experiment ${experiment.number}, sub-experiment ${subExperiment.id}, program ${programNumber}`);
  editor.setAttribute("spellcheck", "false");
  editor.placeholder = program.generated
    ? "Generated illustrative example."
    : program.sourceDocument
    ? program.sourceLabel || (experiment.number === 5
      ? "Source program from DS_Program5.docx."
      : "Source program from the supplied document.")
    : program.code
      ? "Program code supplied in the request."
      : "Original source code unavailable. Paste the source program here to edit it.";
  editor.value = state.code;
  editor.addEventListener("input", () => {
    state.code = editor.value;
  });

  const actions = document.createElement("div");
  actions.className = "experiment-actions";
  const runButton = makeElement("button", "button button-primary", "Run Code");
  runButton.type = "button";
  const copyButton = makeElement("button", "button button-quiet", "Copy Code");
  copyButton.type = "button";
  const resetButton = makeElement("button", "button button-quiet", "Reset Code");
  resetButton.type = "button";
  const clearButton = makeElement("button", "button button-quiet", "Clear Output");
  clearButton.type = "button";
  const actionStatus = makeElement("p", "experiment-action-status", "");
  actionStatus.setAttribute("role", "status");
  actions.append(runButton, copyButton, resetButton, clearButton);
  const runtimeStatus = makePythonRuntimeStatus();

  const outputSection = document.createElement("section");
  outputSection.className = "experiment-output-section";
  outputSection.append(makeElement("h3", "", "Output"));
  const output = makeElement("pre", "experiment-output", state.output);
  output.setAttribute("aria-live", "polite");
  outputSection.append(output);
  renderPythonFigures(output, state.figures, state.files);

  attachPythonRunner(
    runButton,
    editor,
    state,
    output,
    runtimeStatus,
    `experiment-${experiment.number}-${subExperiment.id}-${program.id}`
  );
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(state.code);
      actionStatus.textContent = "Code copied.";
    } catch (error) {
      console.error("Unable to copy experiment code.", error);
      actionStatus.textContent = "Clipboard access failed. Select and copy the code manually.";
    }
  });
  resetButton.addEventListener("click", () => {
    state.code = program.code || "";
    state.output = "No code has been run yet.";
    state.figures = [];
    state.files = [];
    selectExperiment(experiment.number, experimentSelection.get("current") || subExperiment.id);
  });
  clearButton.addEventListener("click", () => {
    state.output = "Output cleared.";
    state.figures = [];
    state.files = [];
    renderPythonFigures(output, state.figures, state.files);
    output.textContent = state.output;
  });

  section.append(heading);
  if (program.description) section.append(makeElement("p", "muted experiment-explanation", program.description));
  section.append(editor, runtimeStatus, actions, actionStatus, outputSection);
  return section;
}

function renderExperimentSubExperiment(experiment, subExperiment) {
  experimentContent.replaceChildren();
  const index = experiment.subExperiments.indexOf(subExperiment);
  const navigation = makeElement("div", "experiment-navigation");
  const backButton = makeElement("button", "button button-quiet", "Back to Experiments");
  backButton.type = "button";
  backButton.addEventListener("click", () => setHash("experiments"));

  const previousButton = makeElement("button", "button button-quiet", "Previous");
  previousButton.type = "button";
  previousButton.disabled = index === 0;
  previousButton.addEventListener("click", () => {
    if (index > 0) setHash(`experiments/${experiment.number}/${experiment.subExperiments[index - 1].id}`);
  });

  const nextButton = makeElement("button", "button button-quiet", "Next");
  nextButton.type = "button";
  nextButton.disabled = index === experiment.subExperiments.length - 1;
  nextButton.addEventListener("click", () => {
    if (index < experiment.subExperiments.length - 1) {
      setHash(`experiments/${experiment.number}/${experiment.subExperiments[index + 1].id}`);
    }
  });
  navigation.append(backButton, previousButton, nextButton);

  const aim = document.createElement("section");
  aim.className = "experiment-detail";
  aim.append(makeElement("h3", "", "Aim"), makeElement("p", "", experiment.aim));
  if (experiment.number === 1) {
    experimentContent.append(
      makeElement("p", "eyebrow accent", `EXPERIMENT 1 · SUB-EXPERIMENT ${subExperiment.id}`),
      makeElement("h2", "", subExperiment.title),
      navigation,
      renderExperiment1VideoNotice(),
      aim,
      makeElement("p", "muted experiment-explanation", "The examples below are generated illustrative programs; they are not transcribed from the unavailable original manual.")
    );
  } else if (experiment.number === 2) {
    experimentContent.append(
      makeElement("p", "eyebrow accent", "MODULE 2 · COURSE 22DS102006"),
      makeElement("h2", "", `Experiment 2: ${experiment.title}`),
      renderExperiment2VideoNotice(),
      aim
    );
    const requirements = document.createElement("section");
    requirements.className = "experiment-detail";
    requirements.append(
      makeElement("h3", "", "Software Requirements"),
      makeElement("p", "", experiment.softwareRequirements.join(", "))
    );
    experimentContent.append(
      requirements,
      makeElement("p", "muted experiment-explanation", "The following original manual sections and source details were not included in the available material. Program titles shown below come from the supplied request; editors are intentionally blank.")
    );
    ["Theory", "Procedure", "Results and output examples"].forEach((sectionTitle) => {
      const unavailable = document.createElement("section");
      unavailable.className = "experiment-detail";
      unavailable.append(
        makeElement("h3", "", sectionTitle),
        makeElement("p", "", "This section was not present in the available Experiment 2 source.")
      );
      experimentContent.append(unavailable);
    });
    if (subExperiment.id === "2(a)") {
      const endpoint = document.createElement("section");
      endpoint.className = "experiment-detail";
      endpoint.append(makeElement("h3", "", "GitHub API endpoint"));
      endpoint.append(makeElement("code", "experiment-inline-code", experiment.apiEndpoint));
      experimentContent.append(endpoint);
    }
    experimentContent.append(
      makeElement("p", "eyebrow accent", `EXPERIMENT 2 · SUB-EXPERIMENT ${subExperiment.id}`),
      makeElement("h2", "", subExperiment.title),
      navigation
    );
  } else {
    experimentContent.append(
      makeElement("p", "eyebrow accent", `EXPERIMENT ${experiment.number} · SUB-EXPERIMENT ${subExperiment.id}`),
      makeElement("h2", "", subExperiment.title),
      navigation,
      aim,
      makeElement("p", "muted experiment-explanation", "The original code, sample data, comments, and expected output were not supplied. The programs below are generated illustrative examples based on the supplied topic headings; they are not presented as source code from the original manual.")
    );
  }
  subExperiment.examples.forEach((program, programIndex) => {
    experimentContent.append(renderUnavailableProgram(experiment, subExperiment, program, programIndex));
  });
}

function renderSubExperiment(experiment, subExperiment) {
  const state = getExperimentState(subExperiment);
  experimentContent.replaceChildren();

  const eyebrow = makeElement("p", "eyebrow accent", `EXPERIMENT ${experiment.number} · SUB-EXPERIMENT ${subExperiment.id}`);
  const heading = makeElement("h2", "", subExperiment.title);
  const aim = document.createElement("section");
  aim.className = "experiment-detail";
  aim.append(makeElement("h3", "", "Aim"), makeElement("p", "", subExperiment.aim));
  const description = document.createElement("section");
  description.className = "experiment-detail";
  description.append(makeElement("h3", "", "Description"), makeElement("p", "", subExperiment.description));
  const videoSection = renderExperimentVideo(experiment.number);

  const editorSection = document.createElement("section");
  editorSection.className = "experiment-editor-section";
  const editorHeading = document.createElement("div");
  editorHeading.className = "experiment-editor-heading";
  const headingMeta = makeElement("div", "experiment-editor-meta", "");
  headingMeta.append(
    makeElement("p", "eyebrow", `CODE EXAMPLE ${subExperiment.id}`),
    makeElement("p", "muted small", "Edits are kept separately for each sub-experiment.")
  );
  editorHeading.append(
    headingMeta,
    makeElement("h3", "", "Python code")
  );

  const editor = document.createElement("textarea");
  editor.className = "experiment-code-editor";
  editor.setAttribute("aria-label", `Python code for sub-experiment ${subExperiment.id}`);
  editor.setAttribute("spellcheck", "false");
  editor.value = state.code;
  editor.addEventListener("input", () => {
    state.code = editor.value;
  });

  const actions = document.createElement("div");
  actions.className = "experiment-actions";
  const runButton = makeElement("button", "button button-primary", "Run Code");
  runButton.type = "button";
  const copyButton = makeElement("button", "button button-quiet", "Copy Code");
  copyButton.type = "button";
  const resetButton = makeElement("button", "button button-quiet", "Reset Code");
  resetButton.type = "button";
  const clearButton = makeElement("button", "button button-quiet", "Clear Output");
  clearButton.type = "button";
  const actionStatus = makeElement("p", "experiment-action-status", "");
  actionStatus.setAttribute("role", "status");
  actions.append(runButton, copyButton, resetButton, clearButton);

  const runtimeStatus = makePythonRuntimeStatus();
  const outputSection = document.createElement("section");
  outputSection.className = "experiment-output-section";
  outputSection.append(makeElement("h3", "", "Output"));
  const output = makeElement("pre", "experiment-output", state.output);
  output.setAttribute("aria-live", "polite");
  outputSection.append(output);
  renderPythonFigures(output, state.figures, state.files);

  attachPythonRunner(
    runButton,
    editor,
    state,
    output,
    runtimeStatus,
    `experiment-${experiment.number}-${subExperiment.id}`
  );
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(state.code);
      actionStatus.textContent = "Code copied.";
    } catch (error) {
      console.error("Unable to copy experiment code.", error);
      actionStatus.textContent = "Clipboard access failed. Select and copy the code manually.";
    }
  });
  resetButton.addEventListener("click", () => {
    state.code = subExperiment.code;
    state.output = "No code has been run yet.";
    state.figures = [];
    state.files = [];
    renderSubExperiment(experiment, subExperiment);
  });
  clearButton.addEventListener("click", () => {
    state.output = "Output cleared.";
    state.figures = [];
    state.files = [];
    renderPythonFigures(output, state.figures, state.files);
    output.textContent = state.output;
  });

  editorSection.append(editorHeading, editor, runtimeStatus, actions, actionStatus, outputSection);
  experimentContent.append(eyebrow, heading, aim, description, videoSection, editorSection);

  if (subExperiment.result) {
    const reference = document.createElement("section");
    reference.className = "experiment-reference";
    reference.append(
      makeElement("h3", "", "Documented result"),
      makeElement("p", "", subExperiment.result)
    );
    if (subExperiment.result.includes("\n")) {
      reference.lastElementChild.replaceWith(makeElement("pre", "experiment-reference-output", subExperiment.result));
    }
    if (subExperiment.explanation) reference.append(makeElement("p", "muted", subExperiment.explanation));
    experimentContent.append(reference);
  } else if (subExperiment.explanation) {
    experimentContent.append(makeElement("p", "muted experiment-explanation", subExperiment.explanation));
  }
}

function renderExperimentPlaceholder(number) {
  experimentContent.replaceChildren();
  const eyebrow = makeElement("p", "eyebrow accent", `PRACTICAL · ${String(number).padStart(2, "0")}`);
  const heading = makeElement("h2", "", `Experiment ${number}`);
  const description = document.createElement("section");
  description.className = "experiment-detail";
  description.append(
    makeElement("h3", "", "Description"),
    makeElement("p", "", `Official description and code for Experiment ${number} have not been supplied yet.`)
  );
  const state = document.createElement("div");
  state.className = "material-state";
  state.append(
    makeElement("strong", "", "Experiment content will be added soon."),
    makeElement("p", "", "This experiment is ready for its official description and code examples.")
  );
  experimentContent.append(eyebrow, heading, description, renderExperimentVideo(number), state);
}

function selectExperiment(number, subExperimentId) {
  if (!number) {
    experimentSelection.delete("current");
    experimentSelection.delete("currentExperiment");
    renderExperimentWelcome();
  } else {
    const selected = Math.min(10, Math.max(1, number));
    expandedExperiments.add(selected);
    experimentSelection.set("currentExperiment", selected);
    if (window.matchMedia("(max-width: 680px)").matches) setExperimentSidebarOpen(true);
    const experiment = experimentData.find((item) => item.number === selected);
    const subExperiment = experiment?.subExperiments.find((item) => item.id === subExperimentId);
    if (subExperiment) {
      experimentSelection.set("current", subExperiment.id);
      if (selected === 1) renderExperimentSubExperiment(experiment, subExperiment);
      else if (selected === 2) renderExperiment2SubExperiment(experiment, subExperiment);
      else if (selected === 3) renderExperiment3SubExperiment(experiment, subExperiment);
      else if (selected === 5) renderExperiment5SubExperiment(experiment, subExperiment);
      else if (selected === 6) renderExperiment6SubExperiment(experiment, subExperiment);
      else renderSubExperiment(experiment, subExperiment);
    } else {
      experimentSelection.delete("current");
      if (selected === 1) renderExperiment1Overview(experiment);
      else if (selected === 2) renderExperiment2Overview(experiment);
      else if (selected === 3) renderExperiment3Overview(experiment);
      else if (selected === 5) renderExperiment5Overview(experiment);
      else if (selected === 6) renderExperiment6Overview(experiment);
      else if (selected <= 6) renderExperimentPlaceholder(selected);
      else renderExperimentWelcome();
    }
  }

  document.querySelectorAll(".experiment-select").forEach((button) => {
    const experimentNumber = Number(button.dataset.experiment);
    button.setAttribute("aria-expanded", String(expandedExperiments.has(experimentNumber)));
    button.setAttribute("aria-selected", String(
      experimentSelection.get("currentExperiment") === experimentNumber
    ));
    const subList = document.querySelector(`#experiment-sublist-${experimentNumber}`);
    subList.hidden = !expandedExperiments.has(experimentNumber);
  });
  document.querySelectorAll(".experiment-subselect").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.subExperiment === experimentSelection.get("current")));
  });
}

menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  primaryNav.classList.toggle("is-open", !expanded);
});

navItems.forEach((item) => item.addEventListener("click", () => {
  primaryNav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

document.querySelectorAll('a[href="#student"], a[href="#resume"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    setHash(link.getAttribute("href").slice(1));
  });
});

function readPath(source, path) {
  return path.split(".").reduce((value, key) => value == null ? undefined : value[key], source);
}

function setPath(target, path, value) {
  const keys = path.split(".");
  const finalKey = keys.pop();
  const parent = keys.reduce((current, key) => current[key], target);
  parent[finalKey] = value;
}

function safeWebUrl(value) {
  if (!value) return "";
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:" ? url.href : "";
  } catch {
    return "";
  }
}

function makeElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function addResumeHeading(section, title) {
  section.replaceChildren(makeElement("h3", "", title));
}

function renderResume() {
  const personal = resumeData.personal;
  const heading = document.querySelector("#resume-header");
  heading.replaceChildren();
  const identity = makeElement("div");
  identity.append(
    makeElement("p", "eyebrow accent", "3RD-YEAR B.TECH CSE-DS STUDENT"),
    makeElement("h2", "", personal.name),
    makeElement("p", "resume-contact", `${personal.degree} · ${personal.department} · ${personal.college}`)
  );
  const photo = makeElement("img");
  photo.src = "assets/shaik-sumiya.png";
  photo.alt = personal.name;
  heading.append(identity, photo);

  const contact = document.querySelector("#resume-contact");
  addResumeHeading(contact, "Contact Information");
  const contactList = makeElement("div", "resume-contact-list");
  [
    ["Phone", personal.phone, `tel:${personal.phone.replace(/[^\d+]/g, "")}`],
    ["Email", personal.email, `mailto:${personal.email}`],
    ["College", personal.college, ""],
    ["Section", personal.section, ""],
    ["Roll Number", personal.rollNumber, ""]
  ].forEach(([label, value, href]) => {
    if (!value) return;
    const item = makeElement("span", "", `${label}: `);
    if (href) {
      const link = makeElement("a", "", value);
      link.href = href;
      item.append(link);
    } else {
      item.append(document.createTextNode(value));
    }
    contactList.append(item);
  });
  contact.append(contactList);

  const objective = document.querySelector("#resume-objective");
  addResumeHeading(objective, "Career Objective");
  objective.append(makeElement("p", "", resumeData.objective || "Add your career objective here."));

  const education = document.querySelector("#resume-education");
  addResumeHeading(education, "Education");
  const educationList = makeElement("div", "resume-entries");
  resumeData.education.forEach((entry, index) => {
    const card = makeElement("article", "resume-entry");
    card.append(makeElement("strong", "", entry.institution), makeElement("span", "", entry.qualification));
    const details = [];
    if (entry.marks) {
      const maximum = entry.maximumMarks ? ` / ${entry.maximumMarks}` : "";
      details.push(`Marks: ${entry.marks}${maximum}`);
    }
    if (entry.percentage) details.push(`${entry.percentage}%`);
    if (index === 0) {
      if (entry.currentYear || personal.currentYear) details.push(entry.currentYear || personal.currentYear);
      if (personal.section) details.push(`Section ${personal.section}`);
      if (personal.rollNumber) details.push(`Roll Number ${personal.rollNumber}`);
      if (entry.graduationYear) details.push(`Expected graduation ${entry.graduationYear}`);
    } else if (entry.period) {
      details.push(entry.period);
    } else {
      details.push("Study period not provided");
    }
    if (details.length) card.append(makeElement("small", "", details.join(" · ")));
    educationList.append(card);
  });
  education.append(educationList);

  const skills = document.querySelector("#resume-skills");
  addResumeHeading(skills, "Technical Skills");
  if (resumeData.skills.length) {
    const list = makeElement("ul", "resume-skill-list");
    resumeData.skills.forEach((skill) => list.append(makeElement("li", "", skill)));
    skills.append(list);
  } else {
    skills.append(makeElement("p", "", "Add the technical skills you have learned."));
  }

  const projects = document.querySelector("#resume-projects");
  addResumeHeading(projects, "Projects");
  if (resumeData.projects.length) {
    const projectList = makeElement("div", "resume-entries");
    resumeData.projects.forEach((project) => {
      const card = makeElement("article", "resume-entry");
      card.append(makeElement("strong", "", project.name || "Untitled project"));
      if (project.description) card.append(makeElement("span", "", project.description));
      if (project.technologies.length) card.append(makeElement("small", "", `Technologies: ${project.technologies.join(", ")}`));
      const links = makeElement("div", "resume-project-links");
      [["GitHub", project.githubUrl], ["Live Demo", project.demoUrl]].forEach(([label, value]) => {
        const url = safeWebUrl(value);
        if (!url) return;
        const link = makeElement("a", "", label);
        link.href = url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        links.append(link);
      });
      if (links.childElementCount) card.append(links);
      projectList.append(card);
    });
    projects.append(projectList);
  } else {
    projects.append(makeElement("p", "", "Add a verified project to include it here."));
  }

  const profiles = document.querySelector("#resume-profiles");
  addResumeHeading(profiles, "Coding Profiles");
  const profileList = makeElement("div", "resume-profile-links");
  Object.entries(resumeData.profiles).forEach(([key, profile]) => {
    const url = safeWebUrl(profile.url);
    if (!url) return;
    const link = makeElement("a", "", profile.label);
    link.dataset.profile = key;
    link.setAttribute("aria-label", `Open ${profile.label} profile`);
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.append(makeElement("span", "resume-profile-icon", profile.label.slice(0, 2).toUpperCase()), document.createTextNode(profile.label));
    profileList.append(link);
  });
  profiles.append(profileList);

  const achievements = document.querySelector("#resume-achievements");
  addResumeHeading(achievements, "Achievements and Certifications");
  if (resumeData.achievements.length) {
    const list = makeElement("ul", "resume-achievement-list");
    resumeData.achievements.forEach((item) => list.append(makeElement("li", "", item)));
    achievements.append(list);
  } else {
    achievements.append(makeElement("p", "", "Add your achievements and certifications here."));
  }

  document.querySelectorAll("[data-resume-value]").forEach((element) => {
    const value = readPath(resumeData, element.dataset.resumeValue);
    if (typeof value === "string") element.textContent = value;
  });
  document.querySelectorAll("[data-resume-link]").forEach((element) => {
    const value = resumeData.personal[element.dataset.resumeLink];
    element.textContent = value;
    element.href = element.dataset.resumeLink === "phone"
      ? `tel:${value.replace(/[^\d+]/g, "")}`
      : `mailto:${value}`;
  });
  document.querySelectorAll(".student-photo").forEach((image) => { image.alt = personal.name; });

  document.querySelectorAll("[data-profile]").forEach((link) => {
    const profile = resumeData.profiles[link.dataset.profile];
    const url = profile && safeWebUrl(profile.url);
    if (!url) {
      link.removeAttribute("href");
      link.removeAttribute("target");
      link.setAttribute("aria-disabled", "true");
      link.classList.add("disabled-card");
      return;
    }
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.removeAttribute("aria-disabled");
    link.classList.remove("disabled-card");
    const meta = link.querySelector("small");
    if (meta) {
      const profileUrl = new URL(url);
      const username = profileUrl.pathname.split("/").filter(Boolean).pop();
      meta.textContent = username ? `@${username.replace(/^@/, "")}` : profileUrl.hostname;
    }
  });
}

function cloneResumeData() {
  return JSON.parse(JSON.stringify(resumeData));
}

function addEditorField(parent, labelText, path, value, type = "text", multiline = false) {
  const label = makeElement("label", "resume-editor-field");
  label.append(makeElement("span", "", labelText));
  const control = makeElement(multiline ? "textarea" : "input");
  if (!multiline) control.type = type;
  control.value = value || "";
  control.dataset.resumePath = path;
  if (multiline) control.rows = 3;
  label.append(control);
  parent.append(label);
  return control;
}

function addEditorGroup(parent, title, description) {
  const group = makeElement("fieldset", "resume-editor-group");
  group.append(makeElement("legend", "", title));
  if (description) group.append(makeElement("p", "resume-editor-help", description));
  parent.append(group);
  return group;
}

function renderResumeEditor(draft) {
  const fields = document.querySelector("#resume-editor-fields");
  fields.replaceChildren();
  const personalGroup = addEditorGroup(fields, "Personal details", "");
  const personalGrid = makeElement("div", "resume-editor-grid");
  [
    ["Full name", "name"], ["College", "college"], ["Degree", "degree"],
    ["Department", "department"], ["Current year", "currentYear"],
    ["Section", "section"], ["Roll number", "rollNumber"],
    ["Phone", "phone"], ["Email", "email"]
  ].forEach(([label, key]) => addEditorField(personalGrid, label, `personal.${key}`, draft.personal[key], key === "email" ? "email" : "text"));
  personalGroup.append(personalGrid);

  addEditorField(addEditorGroup(fields, "Career objective", ""), "Objective", "objective", draft.objective, "text", true);

  const educationGroup = addEditorGroup(fields, "Education", "Study periods and marks can be corrected here. Leave a study period blank if you do not know the exact dates.");
  draft.education.forEach((entry, index) => {
    const card = makeElement("div", "resume-editor-entry");
    card.append(makeElement("h3", "", index === 0 ? "B.Tech" : index === 1 ? "Intermediate" : "SSC / 10th Class"));
    const grid = makeElement("div", "resume-editor-grid");
    [
      ["Institution / school", "institution"], ["Qualification / course", "qualification"],
      ["Marks obtained", "marks"], ["Maximum marks", "maximumMarks"],
      ["Percentage", "percentage"], ["Study period", "period"]
    ].forEach(([label, key]) => addEditorField(grid, label, `education.${index}.${key}`, entry[key]));
    if (index === 0) {
      addEditorField(grid, "Current year", `education.${index}.currentYear`, entry.currentYear);
      addEditorField(grid, "Graduation year", `education.${index}.graduationYear`, entry.graduationYear);
    }
    card.append(grid);
    educationGroup.append(card);
  });

  const skillsGroup = addEditorGroup(fields, "Technical skills", "Enter one skill per line. Remove any skill you have not learned.");
  addEditorField(skillsGroup, "Skills", "skills", draft.skills.join("\n"), "text", true);

  const projectsGroup = addEditorGroup(fields, "Projects", "Add only projects you can describe accurately. URLs are optional.");
  draft.projects.forEach((project, index) => {
    const card = makeElement("div", "resume-editor-entry resume-project-editor");
    const title = makeElement("div", "resume-editor-entry-heading");
    title.append(makeElement("h3", "", project.name || `Project ${index + 1}`));
    const remove = makeElement("button", "button button-quiet", "Remove");
    remove.type = "button";
    remove.dataset.removeProject = String(index);
    title.append(remove);
    card.append(title);
    const grid = makeElement("div", "resume-editor-grid");
    addEditorField(grid, "Project name", `projects.${index}.name`, project.name);
    addEditorField(grid, "Technologies (one per line)", `projects.${index}.technologies`, project.technologies.join("\n"), "text", true);
    addEditorField(grid, "Description", `projects.${index}.description`, project.description, "text", true);
    addEditorField(grid, "GitHub URL", `projects.${index}.githubUrl`, project.githubUrl, "url");
    addEditorField(grid, "Live demo URL", `projects.${index}.demoUrl`, project.demoUrl, "url");
    card.append(grid);
    projectsGroup.append(card);
  });
  const addProject = makeElement("button", "button button-quiet", "Add project");
  addProject.type = "button";
  addProject.dataset.addProject = "true";
  projectsGroup.append(addProject);

  const profilesGroup = addEditorGroup(fields, "Coding profile URLs", "Use the full profile URL. Leave a URL blank to hide that profile link.");
  const profilesGrid = makeElement("div", "resume-editor-grid");
  Object.entries(draft.profiles).forEach(([key, profile]) => {
    addEditorField(profilesGrid, `${profile.label} URL`, `profiles.${key}.url`, profile.url, "url");
  });
  profilesGroup.append(profilesGrid);

  const achievementsGroup = addEditorGroup(fields, "Achievements and certifications", "Enter one verified achievement, certification, hackathon, or course completion per line.");
  addEditorField(achievementsGroup, "Achievements and certifications", "achievements", draft.achievements.join("\n"), "text", true);
}

function readResumeEditor() {
  const draft = cloneResumeData();
  document.querySelectorAll("#resume-editor-fields [data-resume-path]").forEach((control) => {
    const path = control.dataset.resumePath;
    const value = control.value;
    setPath(draft, path, ["skills", "achievements"].includes(path) || path.endsWith(".technologies")
      ? value.split(/\r?\n/).map((item) => item.trim()).filter(Boolean)
      : value.trim());
  });
  return draft;
}

const resumeEditor = document.querySelector("#resume-editor");
const resumeEditorForm = document.querySelector("#resume-editor-form");
const resumeEditorStatus = document.querySelector("#resume-editor-status");
document.querySelector("[data-edit-resume]").hidden = !isLocalResumePreview;

document.querySelector("[data-edit-resume]").addEventListener("click", () => {
  if (!isLocalResumePreview) return;
  renderResumeEditor(cloneResumeData());
  resumeEditorStatus.textContent = "";
  resumeEditor.hidden = false;
  resumeEditor.scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelector("[data-view-resume]").addEventListener("click", () => {
  document.querySelector("#resume-sheet").scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelector("[data-cancel-resume-edit]").addEventListener("click", () => {
  resumeEditor.hidden = true;
  resumeEditorStatus.textContent = "";
});

resumeEditorForm.addEventListener("click", (event) => {
  if (!isLocalResumePreview) return;
  const button = event.target.closest("button");
  if (!button) return;
  if (button.dataset.addProject) {
    const draft = readResumeEditor();
    draft.projects.push({ name: "", description: "", technologies: [], githubUrl: "", demoUrl: "" });
    renderResumeEditor(draft);
  } else if (button.dataset.removeProject !== undefined) {
    const draft = readResumeEditor();
    draft.projects.splice(Number(button.dataset.removeProject), 1);
    renderResumeEditor(draft);
  }
});

resumeEditorForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!isLocalResumePreview) return;
  if (!resumeEditorForm.reportValidity()) return;
  const draft = readResumeEditor();
  const urlValues = [
    ...Object.values(draft.profiles).map((profile) => profile.url),
    ...draft.projects.flatMap((project) => [project.githubUrl, project.demoUrl])
  ].filter(Boolean);
  if (urlValues.some((url) => !safeWebUrl(url))) {
    resumeEditorStatus.textContent = "Profile and project links must use a valid http:// or https:// URL.";
    return;
  }
  try {
    localStorage.setItem(resumeStorageKey, JSON.stringify(draft));
  } catch (error) {
    console.error("Unable to save resume data.", error);
    resumeEditorStatus.textContent = "Your resume could not be saved in this browser. Check browser storage permissions and try again.";
    return;
  }
  resumeData = normalizeResumeData(draft);
  renderResume();
  resumeEditorStatus.textContent = "Resume saved in this browser.";
  storageNotice.hidden = true;
});

document.querySelector("[data-reset-resume]").addEventListener("click", () => {
  if (!isLocalResumePreview) return;
  if (!window.confirm("Reset the resume and replace saved details with the original supplied information?")) return;
  try {
    localStorage.setItem(resumeStorageKey, JSON.stringify(defaultResumeData));
  } catch (error) {
    console.error("Unable to reset resume data.", error);
    resumeEditorStatus.textContent = "The resume could not be reset because browser storage is unavailable.";
    return;
  }
  resumeData = normalizeResumeData(defaultResumeData);
  renderResume();
  renderResumeEditor(cloneResumeData());
  resumeEditorStatus.textContent = "Resume reset to the original supplied information.";
});

document.querySelectorAll("[data-print-resume]").forEach((button) => {
  button.addEventListener("click", () => {
    if (window.location.hash !== "#resume") {
      window.location.hash = "resume";
      window.setTimeout(() => window.print(), 120);
    } else {
      window.print();
    }
  });
});

const projectDialog = document.querySelector("#project-dialog");
document.querySelector("[data-project-details]").addEventListener("click", () => projectDialog.showModal());
document.querySelector(".dialog-close").addEventListener("click", () => projectDialog.close());
projectDialog.addEventListener("click", (event) => {
  if (event.target === projectDialog) projectDialog.close();
});

renderModuleList();
renderExperimentList();
renderResume();
window.addEventListener("hashchange", updatePage);
updatePage();
