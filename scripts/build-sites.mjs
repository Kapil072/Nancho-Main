// Builds every archive site in ./sites into ./dist/<name>/ so Nancho and all of
// its archive sites deploy together as a single site. Runs after Nancho's own
// `vite build` (see the "build" script in package.json).
//
// Each site is built exactly the way its old standalone repo built it; the only
// difference is the base path, which becomes <Nancho base>/<name>/.
import { spawnSync } from "node:child_process";
import { cpSync, existsSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { resolveConfig } from "vite";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const sitesDir = join(root, "sites");
const distDir = join(root, "dist");

// type "vite": React/Vite app, built with Nancho's node_modules.
// type "static": plain HTML, the listed files/folders are copied as-is.
// `copy` on a vite site = extra folders its old deploy workflow copied into dist.
const SITES = [
  { name: "truthemergency", type: "vite", copy: ["Truth Emergency 2008_files", "truthemergency.us"] },
  { name: "Aintthatgood", type: "vite" },
  { name: "newchau", type: "static", copy: ["index.html", "newchau", "barks", "bulls", "graph", "press"] },
  { name: "indexfororg", type: "vite" },
  { name: "bigmed2000", type: "vite", postbuild: "scripts/generate-route-html.mjs" },
  { name: "memework", type: "vite" },
  { name: "formere", type: "vite" },
  { name: "excise-big", type: "vite", postbuild: "postbuild.js" },
  { name: "reinscrive", type: "static", copy: ["*.html", "barks", "bulls", "graph"] },
  { name: "remasculate", type: "vite" },
];

// resolveConfig sets NODE_ENV=development when it is unset; don't let that leak
// into the site builds or they'd bundle React's development build.
const nodeEnv = process.env.NODE_ENV;
const base = (await resolveConfig({ root, logLevel: "silent" }, "build", "production")).base;
if (nodeEnv === undefined) delete process.env.NODE_ENV;
const require = createRequire(import.meta.url);
const viteBin = join(dirname(require.resolve("vite/package.json")), "bin", "vite.js");

if (!existsSync(join(distDir, "index.html"))) {
  console.error("dist/index.html not found - run `vite build` for Nancho first.");
  process.exit(1);
}

const run = (args, cwd) => {
  const result = spawnSync(process.execPath, args, { cwd, stdio: "inherit" });
  if (result.status !== 0) {
    console.error(`\nFailed: node ${args.join(" ")} (in ${cwd})`);
    process.exit(result.status ?? 1);
  }
};

const copyEntries = (site, siteDir, outDir) => {
  for (const entry of site.copy ?? []) {
    const names = entry.startsWith("*.")
      ? readdirSync(siteDir).filter((f) => extname(f) === entry.slice(1))
      : [entry];
    for (const name of names) {
      const from = join(siteDir, name);
      if (!existsSync(from)) {
        console.warn(`  ! ${site.name}: ${name} not found, skipped`);
        continue;
      }
      cpSync(from, join(outDir, name), { recursive: true });
    }
  }
};

for (const site of SITES) {
  const siteDir = join(sitesDir, site.name);
  const outDir = join(distDir, site.name);
  console.log(`\n=== ${site.name} -> ${base}${site.name}/`);
  rmSync(outDir, { recursive: true, force: true });

  if (site.type === "vite") {
    const siteDist = join(siteDir, "dist");
    rmSync(siteDist, { recursive: true, force: true });
    run([viteBin, "build", "--base", `${base}${site.name}/`, "--outDir", "dist", "--emptyOutDir", "--logLevel", "warn"], siteDir);
    if (site.postbuild) run([site.postbuild], siteDir);
    cpSync(siteDist, outDir, { recursive: true });
    rmSync(siteDist, { recursive: true, force: true });
  }
  copyEntries(site, siteDir, outDir);
}

// GitHub Pages only uses the root 404.html. Deep links into a React site (e.g. a
// refresh on one of its routes) get that site's app shell, like the per-site
// 404.html files did when the sites were hosted separately.
const appSites = SITES.filter((s) => s.type === "vite").map((s) => s.name);
writeFileSync(
  join(distDir, "404.html"),
  `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Page not found</title>
    <script>
      (function () {
        var base = ${JSON.stringify(base)};
        var sites = ${JSON.stringify(appSites)};
        var path = location.pathname.toLowerCase();
        for (var i = 0; i < sites.length; i++) {
          var prefix = base + sites[i] + "/";
          if (path.indexOf(prefix.toLowerCase()) === 0) {
            fetch(prefix + "index.html")
              .then(function (r) { return r.text(); })
              .then(function (html) { document.open(); document.write(html); document.close(); });
            return;
          }
        }
        document.addEventListener("DOMContentLoaded", function () {
          document.getElementById("not-found").hidden = false;
        });
      })();
    </script>
  </head>
  <body>
    <p id="not-found" hidden>Page not found. <a href="${base}">Go to the home page</a></p>
  </body>
</html>
`,
);
console.log("Wrote dist/404.html");
