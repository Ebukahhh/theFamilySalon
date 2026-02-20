import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  // Use process.cwd() instead of __dirname — esbuild inlines __dirname
  // at build time which makes it point to the developer's local machine path.
  // process.cwd() always resolves to where the server is actually started from.
  const distPath = path.resolve(process.cwd(), "dist", "public");

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  // Serve static assets (JS, CSS, images, etc.)
  app.use(express.static(distPath, { index: false }));

  // For all other routes, serve index.html so client-side routing works
  app.get("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
