import fs from "fs";
import path from "path";

const distDir = path.resolve("dist");
const clientDir = path.resolve("dist/client");
const manifestPath = path.join(clientDir, ".vite/manifest.json");

function copyDirRecursive(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

if (fs.existsSync(clientDir)) {
  let cssFile = "";
  let jsFile = "";

  if (fs.existsSync(manifestPath)) {
    try {
      const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));
      for (const key in manifest) {
        const item = manifest[key];
        if (item.file && item.file.endsWith(".css")) {
          cssFile = "/" + item.file;
        }
        if (item.isEntry && item.file) {
          jsFile = "/" + item.file;
        }
      }
    } catch (e) {
      console.error("Error reading manifest.json:", e);
    }
  }

  // Fallback if not found in manifest
  if (!cssFile) {
    const assetsDir = path.join(clientDir, "assets");
    if (fs.existsSync(assetsDir)) {
      const files = fs.readdirSync(assetsDir);
      const css = files.find((f) => f.endsWith(".css"));
      if (css) cssFile = "/assets/" + css;
    }
  }

  if (!jsFile) {
    const assetsDir = path.join(clientDir, "assets");
    if (fs.existsSync(assetsDir)) {
      const files = fs.readdirSync(assetsDir);
      const js = files.find((f) => f.startsWith("index-") && f.endsWith(".js"));
      if (js) jsFile = "/assets/" + js;
    }
  }

  const htmlContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>El Mouslim Digital Marketing | Marketing, Web, SaaS and Cloud Solutions</title>
    <meta name="description" content="El Mouslim Digital Marketing provides Google Ads, web development, mobile applications, SaaS platforms, cloud infrastructure, cybersecurity, and digital subscription services." />
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="icon" href="/favicon.png" type="image/png" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    ${cssFile ? `<link rel="stylesheet" href="${cssFile}" />` : ""}
  </head>
  <body>
    <div id="root"></div>
    ${jsFile ? `<script type="module" src="${jsFile}"></script>` : ""}
  </body>
</html>`;

  fs.writeFileSync(path.join(clientDir, "index.html"), htmlContent);
  fs.writeFileSync(path.join(distDir, "index.html"), htmlContent);

  // Copy client assets to dist root as well
  copyDirRecursive(clientDir, distDir);

  console.log("Successfully generated index.html at dist/client/index.html and dist/index.html!");
}
