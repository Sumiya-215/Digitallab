# Digital Laboratory

This is a static website. To publish it with GitHub Pages:

1. In the repository, open **Settings → Pages**.
2. Set the build and deployment source to **GitHub Actions**.
3. Push changes to `main`. The **Deploy to GitHub Pages** workflow publishes the site automatically. You can also start it manually from the **Actions** tab.

The published URL appears in the workflow run and under **Settings → Pages**.

## Vercel

For Vercel, keep the project root set to the repository root. The `vercel.json` configuration serves the root directory as the static output, including the `assets/` directory. Push changes to the connected branch to trigger a new deployment.
