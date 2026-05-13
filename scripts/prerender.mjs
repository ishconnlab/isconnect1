import { createRequire } from "module";
import { fileURLToPath } from "url";
import { createServer } from "http";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, extname, dirname, resolve } from "path";

const require = createRequire(import.meta.url);
const puppeteer = require("puppeteer-core");
const DIST = resolve(process.cwd(), "dist");
const ROUTES = [
  "/",
  "/about",
  "/academy",
  "/contact",
  "/solutions",
  "/work",
  "/privacy",
  "/software-development-rwanda",
  "/web-development-kigali",
  "/mobile-app-development-rwanda",
  "/ai-solutions-rwanda",
  "/cybersecurity-rwanda",
  "/cloud-services-rwanda",
  "/tech-training-rwanda",
];
const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

const MIME = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".css": "text/css",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".json": "application/json",
};

function startServer() {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let filePath = join(DIST, req.url === "/" ? "index.html" : req.url);
      if (!existsSync(filePath) || extname(filePath) === "") {
        filePath = join(DIST, "index.html");
      }
      const ext = extname(filePath);
      const contentType = MIME[ext] || "application/octet-stream";
      try {
        const content = readFileSync(filePath);
        res.writeHead(200, { "Content-Type": contentType });
        res.end(content);
      } catch {
        res.writeHead(404);
        res.end("Not found");
      }
    });
    server.listen(0, () => {
      const port = server.address().port;
      console.log(`[prerender] Server started on port ${port}`);
      resolve({ server, port });
    });
  });
}

async function prerender() {
  console.log("[prerender] Starting prerender...");

  const { server, port } = await startServer();
  let browser;

  try {
    const launchOpts = {
      executablePath: CHROME_PATH,
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"],
    };

    browser = await puppeteer.launch(launchOpts);
    console.log("[prerender] Browser launched");

    for (const route of ROUTES) {
      const url = `http://localhost:${port}${route}`;
      console.log(`[prerender] Rendering ${route}...`);

      const page = await browser.newPage();

      try {
        await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });
        await page.waitForSelector("#main-content", { timeout: 15000 });
        // Wait for any animations and lazy content to settle
        await new Promise((r) => setTimeout(r, 3000));

        const html = await page.content();
        const outputDir = join(DIST, route === "/" ? "" : route);
        if (!existsSync(outputDir)) {
          mkdirSync(outputDir, { recursive: true });
        }
        writeFileSync(join(outputDir, "index.html"), html);
        console.log(`[prerender] ✓ ${route} -> ${join(outputDir, "index.html")}`);
      } catch (err) {
        console.warn(`[prerender] ✗ ${route} failed: ${err.message}`);
      } finally {
        await page.close();
      }
    }

    console.log("[prerender] All routes processed");
  } finally {
    if (browser) await browser.close();
    server.close();
  }
}

prerender().catch((err) => {
  console.error("[prerender] Fatal error:", err.message);
  process.exit(1);
});
