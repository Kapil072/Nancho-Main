const fs = require('fs');
const path = require('path');
const http = require('https');

const pages = [
  "kashmir/outlookf.html",
  "kashmir/jknyt1.html",
  "kashmir/jkstates.html",
  "kashmir/jkplea.html",
  "kashmir/kashplus.html",
  "kashmir/pledges.html",
  "kashmir/hapkash.html",
  "swissdd1.html",
  "kashmir/nahmad.html",
  "kashmir/nahmad.htm",
  "jehangir.html",
  "imran.html",
  "khosla.html",
  "timornet.html",
  "fdljrnl.html",
  "fdljrnl2.html",
  "fdljrnl4.html",
  "fdljrnl6.html",
  "fdlburm2.html",
  "fdessay1.html",
  "fdessay2.html",
  "fdessay3.html",
  "fdessay4.html",
  "newmedia.html",
  "jrhorta.html",
  "maxstahl.html"
];

function getComponentName(page) {
  // Convert kashmir/outlookf.html to KashmirOutlookf
  const clean = page.replace('.html', '').replace('.htm', '');
  return clean.split('/').map(part => {
    return part.split('-').map(sub => sub.charAt(0).toUpperCase() + sub.slice(1)).join('');
  }).join('');
}

function download(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to download: ${res.statusCode} for ${url}`));
        return;
      }
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function run() {
  console.log("Starting page download and compilation...");
  
  const routeEntries = [];
  const importEntries = [];

  for (const page of pages) {
    const componentName = getComponentName(page);
    const url = `https://www.nancho.net/fdlap/${page}`;
    
    try {
      console.log(`Downloading ${url}...`);
      let html = await download(url);
      
      // Parse body and configuration
      const bodyTagMatch = html.match(/<BODY[^>]*>/i);
      const bodyTag = bodyTagMatch ? bodyTagMatch[0] : '<BODY>';
      
      const bodyContentMatch = html.match(/<BODY[^>]*>([\s\S]*?)<\/BODY>/i);
      let bodyContent = bodyContentMatch ? bodyContentMatch[1] : html;
      
      // Clean up body content:
      // Replace absolute paths referencing bulls, graph, or barks
      bodyContent = bodyContent.replace(/src=["']?\.\.\/bulls\//gi, 'src="/bulls/');
      bodyContent = bodyContent.replace(/src=["']?\.\.\/graph\//gi, 'src="/graph/');
      bodyContent = bodyContent.replace(/src=["']?\.\.\/barks\//gi, 'src="/barks/');
      bodyContent = bodyContent.replace(/src=["']?graph\//gi, 'src="/graph/');
      bodyContent = bodyContent.replace(/src=["']?barks\//gi, 'src="/barks/');
      bodyContent = bodyContent.replace(/src=["']?bulls\//gi, 'src="/bulls/');
      
      // Extract title
      const titleMatch = html.match(/<TITLE>([\s\S]*?)<\/TITLE>/i);
      const title = titleMatch ? titleMatch[1].trim() : "FDL-AP Archive";
      
      // Determine background configurations
      let bgImage = "";
      const bgImgMatch = bodyTag.match(/background=["']?([^"'\s>]+)["']?/i);
      if (bgImgMatch) {
        let imgPath = bgImgMatch[1].replace(/^\.\.\//, '/').replace(/^graph\//, '/graph/').replace(/^barks\//, '/barks/');
        if (imgPath.includes('slate2.gif')) imgPath = '/barks/slate3.gif';
        if (!imgPath.startsWith('/')) imgPath = '/' + imgPath;
        bgImage = `url('${imgPath}')`;
      }
      
      let bgColor = "#C9FFC8";
      const bgColorMatch = bodyTag.match(/bgcolor=["']?([^"'\s>]+)["']?/i);
      if (bgColorMatch) {
        bgColor = bgColorMatch[1];
      }
      
      let textColor = "#000000";
      const textColorMatch = bodyTag.match(/text=["']?([^"'\s>]+)["']?/i);
      if (textColorMatch) {
        textColor = textColorMatch[1];
      }

      // Generate the React TSX file content
      const tsx = `import { useEffect } from "react";
import { Link } from "react-router-dom";

const ${componentName} = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "${bgColor}";
    document.body.style.backgroundImage = "${bgImage ? bgImage : ''}";
    document.body.style.color = "${textColor}";
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.backgroundImage = "";
      document.body.style.color = "";
    };
  }, []);

  const htmlContent = \`${bodyContent.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`;

  return (
    <div className="fdl-page min-h-screen p-4 md:p-8">
      <div className="fdl-container">
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} className="fdl-content w-full" />
        
        {/* Simple back navigation footer */}
        <center className="w-full mt-12 pt-6 border-t border-[#003E1F]/10">
          <Link to="/" className="text-[#007339] underline font-bold hover:text-[#1866C5] text-sm md:text-base">
            Back to Home
          </Link>
        </center>
      </div>
    </div>
  );
};

export default ${componentName};
`;

      const destPath = path.join(__dirname, 'src', 'pages', `${componentName}.tsx`);
      fs.writeFileSync(destPath, tsx, 'utf8');
      console.log(`Generated ${destPath}`);
      
      // Store details for route registration
      importEntries.push(`import ${componentName} from "./pages/${componentName}.tsx";`);
      
      // We map the route with and without the .html extension
      routeEntries.push(`          <Route path="/${page}" element={<${componentName} />} />`);
      if (page.endsWith('.html')) {
        const routePathNoHtml = page.slice(0, -5);
        routeEntries.push(`          <Route path="/${routePathNoHtml}" element={<${componentName} />} />`);
      } else if (page.endsWith('.htm')) {
        const routePathNoHtml = page.slice(0, -4);
        routeEntries.push(`          <Route path="/${routePathNoHtml}" element={<${componentName} />} />`);
      }

    } catch (err) {
      console.error(`Error processing ${page}:`, err.message);
    }
  }

  // Output imports and routes
  console.log("\n--- COPY AND PASTE TO App.tsx IMPORTS ---");
  console.log(importEntries.join('\n'));
  
  console.log("\n--- COPY AND PASTE TO App.tsx ROUTES ---");
  console.log(routeEntries.join('\n'));
  
  fs.writeFileSync('generated_imports_routes.txt', 
    `IMPORTS:\n${importEntries.join('\n')}\n\nROUTES:\n${routeEntries.join('\n')}`, 'utf8');
  console.log("\nSaved imports and routes to generated_imports_routes.txt");
}

run();
