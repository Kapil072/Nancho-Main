import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import fs from "fs";
import path from "path";
import { componentTagger } from "lovable-tagger";

const TYPES: Record<string, string> = {
  ".html": "text/html; charset=utf-8", ".htm": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".json": "application/json",
  ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".gif": "image/gif",
  ".ico": "image/x-icon", ".webp": "image/webp", ".mp3": "audio/mpeg", ".wav": "audio/wav", ".mp4": "video/mp4",
  ".pdf": "application/pdf", ".txt": "text/plain", ".xml": "text/xml", ".ram": "audio/x-pn-realaudio",
  ".woff": "font/woff", ".woff2": "font/woff2", ".ttf": "font/ttf",
};

// `npm run dev` only compiles Nancho itself; the archive sites exist as the built
// output in dist/<site>/ (from `npm run build`). Serve them from there at the
// same /new-nancho/<site>/ URLs they have when deployed, so the home page links work.
const archiveSites = (): Plugin => ({
  name: "archive-sites",
  apply: "serve",
  configureServer(server) {
    const dist = path.resolve(__dirname, "dist");
    const sites = fs.readdirSync(path.resolve(__dirname, "sites"));
    server.middlewares.use((req, res, next) => {
      const [pathname, query = ""] = (req.url ?? "/").split("?");
      const url = decodeURIComponent(pathname);
      const redirect = (to: string) => {
        res.writeHead(302, { Location: to + (query ? `?${query}` : "") });
        res.end();
      };
      // home page links in dev are /<site>/...; the built sites expect /new-nancho/<site>/...
      if (sites.some((s) => url === `/${s}` || url.startsWith(`/${s}/`))) return redirect(`/new-nancho${pathname}`);
      if (!url.startsWith("/new-nancho")) return next();

      const rest = url.replace(/^\/new-nancho\/?/, "");
      const site = rest.split("/")[0];
      // links back to Nancho itself
      if (!sites.includes(site)) return redirect(`/${rest}`);
      if (rest === site) return redirect(`/new-nancho/${site}/`);

      const siteDir = path.join(dist, site);
      if (!fs.existsSync(siteDir)) {
        res.writeHead(503, { "Content-Type": "text/html" });
        res.end(`<p>The <b>${site}</b> site hasn't been built yet. Run <code>npm run build</code>, then reload.</p>`);
        return;
      }
      let file = path.join(dist, rest);
      if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, "index.html");
      if (!fs.existsSync(file)) {
        // a route of a React site: serve the site's app, which picks the page from the URL
        const ext = path.extname(rest).toLowerCase();
        if (ext && ext !== ".html" && ext !== ".htm") return next();
        file = path.join(siteDir, "index.html");
      }
      res.writeHead(200, { "Content-Type": TYPES[path.extname(file).toLowerCase()] ?? "application/octet-stream" });
      fs.createReadStream(file).pipe(res);
    });
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/Nancho-Main/" : "/",
  server: {
    host: "::",
    port: 8088,
    strictPort: true,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), archiveSites(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
