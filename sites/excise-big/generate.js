import fs from 'fs';
import path from 'path';

const files = [
  '../corperson_temp.html',
  'cptalk.html',
  'cpnader.html',
  'cpmonbio.html',
  'predator.html',
  'adbcorpI.html',
  'econom3.html',
  'corptime.html',
  'cpbother.html',
  'cpchange.html',
  'labor&cp.html',
  '15bigngo.html',
  'CPattack.html',
  'cpepope.html',
  'paulccp1.html',
  'cpnadrsa.html',
  'wilpfint.html',
  'wilpf1.html',
  'wilguide.html',
  '14amend.html',
  'corpwant.html',
  'cpmillon.html'
];

const generateComponentName = (filename) => {
  if (filename === '../corperson_temp.html') return 'Index';
  let name = filename.replace('.html', '').replace(/[^a-zA-Z0-9]/g, '');
  // If name starts with a number, prefix with 'Page'
  if (/^[0-9]/.test(name)) {
    name = 'Page' + name;
  }
  return name.charAt(0).toUpperCase() + name.slice(1);
};

const routeList = [];

files.forEach(file => {
  const filePath = path.join('temp_pages', file);
  if (!fs.existsSync(filePath) && file !== '../corperson_temp.html') {
    console.error("Missing file", filePath);
    return;
  }
  
  const content = fs.readFileSync(file === '../corperson_temp.html' ? 'corperson_temp.html' : filePath, 'utf8');
  
  // Extract body content
  const bodyMatch = content.match(/<BODY[^>]*>([\s\S]*?)<\/BODY>/i);
  let bodyContent = bodyMatch ? bodyMatch[1] : content;
  
  // Replace asset paths to use BASE_URL for deployment  
  // We'll use a placeholder that we'll replace in the template
  bodyContent = bodyContent.replace(/\.\.\/graph\//gi, '___BASE_URL___graph/');
  bodyContent = bodyContent.replace(/\.\.\/barks\//gi, '___BASE_URL___barks/');
  bodyContent = bodyContent.replace(/\.\.\/bulls\//gi, '___BASE_URL___bulls/');
  bodyContent = bodyContent.replace(/\.\.\/newchau\//gi, '___BASE_URL___newchau/');
  
  // Also replace absolute paths that start with /
  bodyContent = bodyContent.replace(/src="\/graph\//gi, 'src="___BASE_URL___graph/');
  bodyContent = bodyContent.replace(/src="\/barks\//gi, 'src="___BASE_URL___barks/');
  bodyContent = bodyContent.replace(/src="\/bulls\//gi, 'src="___BASE_URL___bulls/');
  bodyContent = bodyContent.replace(/src="\/newchau\//gi, 'src="___BASE_URL___newchau/');
  bodyContent = bodyContent.replace(/url\('\//gi, "url('___BASE_URL___");
  
  const componentName = generateComponentName(file);
  
  // Background overrides
  let bgHex = "#FFFFEE";
  let bgImg = "url('___BASE_URL___barks/frenchp2.gif')";
  if (file !== '../corperson_temp.html') {
    // If you check corperson_temp.html it had FFDEAD originally maybe? Actually FFFFEE is from another page
    // Let's just use FFFFEE if not found
    const bgMatch = content.match(/BGCOLOR="?#([0-9a-fA-F]{6})"?/i);
    if (bgMatch) bgHex = "#" + bgMatch[1];
  }
  
  const htmlContentLine = '  const htmlContent = `' + bodyContent.replace(/`/g, '&#96;').replace(/\$/g, '\\$').replace(/___BASE_URL___/g, '${import.meta.env.BASE_URL}') + '`;';
  
  const tsxContent = `import { useEffect } from "react";

const ${componentName} = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "${bgHex}";
    document.body.style.backgroundImage = "${bgImg.replace(/___BASE_URL___/g, '${import.meta.env.BASE_URL}')}";
    document.body.style.color = "#000000";
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.backgroundImage = "";
      document.body.style.color = "";
    }
  }, []);

${htmlContentLine}

  return (
    <div className="min-h-screen text-3xl md:text-4xl lg:text-5xl leading-relaxed p-4 md:p-8 w-full max-w-none" style={{ fontFamily: "Times New Roman, serif" }}>
      <style>{\`
        a { color: #B32D41; text-decoration: underline; font-weight: bold; }
        a:hover { color: #FF4444; }
        h1, h2, h3, h4, h5, h6 { font-weight: bold; margin-bottom: 1em; text-align: left; width: 100% !important; }
        strong, b { font-weight: 900; }
        ul { list-style-type: disc; padding-left: 2em; margin-bottom: 1em; width: 100% !important; }
        li { margin-bottom: 0.5em; }
        img { max-width: 100%; height: auto; display: inline-block; }
        center { text-align: center; display: block; width: 100% !important; }
        hr { border: 0; border-top: 2px solid currentColor; margin: 1em auto; width: 100% !important; }
        
        /* Force full horizontal width for paragraphs, blockquotes, and tables */
        blockquote { 
          margin-left: 0 !important; 
          margin-right: 0 !important; 
          padding-left: 0 !important; 
          padding-right: 0 !important; 
          width: 100% !important; 
          max-width: 100% !important; 
        }
        table:not([align]):not([style*="float"]) { 
          width: 100% !important; 
          max-width: 100% !important; 
        }
        table[align="right"] {
          float: right !important;
          width: auto !important;
          margin: 0 0 1em 1em !important;
        }
        table[align="left"] {
          float: left !important;
          width: auto !important;
          margin: 0 1em 1em 0 !important;
        }
        p { 
          width: 100% !important; 
          max-width: 100% !important; 
        }
      \`}</style>

      <div dangerouslySetInnerHTML={{ __html: htmlContent }} className="w-full" />
    </div>
  );
};

export default ${componentName};
`;

  fs.writeFileSync(path.join('src', 'pages', `${componentName}.tsx`), tsxContent);
  
  const routePath = file === '../corperson_temp.html' ? '/' : `/${file}`;
  routeList.push(`import ${componentName} from "./pages/${componentName}";`);
  routeList.push(`<Route path="${routePath}" element={<${componentName} />} />`);
  if (file !== '../corperson_temp.html') {
    routeList.push(`<Route path="/${file.replace('.html', '')}" element={<${componentName} />} />`);
  } else {
    routeList.push(`<Route path="/index.html" element={<${componentName} />} />`);
  }
});

fs.writeFileSync('routes.txt', routeList.join('\\n'));
console.log("Pages generated!");
