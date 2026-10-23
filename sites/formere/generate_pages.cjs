const fs = require('fs');
const path = require('path');

const files = [
  'fmission_temp.txt',
  'fdlorg_temp.txt',
  'fdlinits_temp.txt',
  'fdlpaper_temp.txt',
  'fdllinks_temp.txt'
];

const componentNames = {
  'fmission_temp.txt': 'FMission',
  'fdlorg_temp.txt': 'FdlOrg',
  'fdlinits_temp.txt': 'FdlInits',
  'fdlpaper_temp.txt': 'FdlPaper',
  'fdllinks_temp.txt': 'FdlLinks'
};

const routes = [];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  
  // Extract content between <BODY ...> and </BODY>
  const bodyMatch = content.match(/<BODY[^>]*>([\s\S]*?)<\/BODY>/i);
  let bodyContent = bodyMatch ? bodyMatch[1] : content;
  
  // Create React component
  const componentName = componentNames[file];
  const tsxContent = `import { useEffect } from "react";

const ${componentName} = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#C9FFC8";
    document.body.style.backgroundImage = "url('/graph/fdbk7.gif')";
    document.body.style.color = "#000000";
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.backgroundImage = "";
      document.body.style.color = "";
    }
  }, []);

  const htmlContent = \`${bodyContent.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`;

  return (
    <div className="min-h-screen text-3xl md:text-4xl lg:text-5xl leading-relaxed p-4 md:p-8 w-full max-w-none" style={{ fontFamily: "Times New Roman, serif" }}>
      <style>{\`
        a { color: #007339; text-decoration: underline; font-weight: bold; }
        a:hover { color: #1866C5; }
        h2 { font-size: 1.75em; font-weight: bold; margin-bottom: 0.5em; text-align: center; width: 100% !important; }
        h3 { font-size: 1.5em; font-weight: bold; margin-bottom: 1em; text-align: left; width: 100% !important; }
        strong { font-weight: 900; }
        ul { list-style-type: disc; padding-left: 2em; margin-bottom: 1em; width: 100% !important; }
        li { margin-bottom: 0.5em; }
        img { max-width: 100%; height: auto; }
        center { text-align: center; display: block; width: 100% !important; }
        hr { border: 0; border-top: 2px solid currentColor; margin: 1em auto; width: 100% !important; }
        
        blockquote { 
          margin-left: 0 !important; 
          margin-right: 0 !important; 
          padding-left: 0 !important; 
          padding-right: 0 !important; 
          width: 100% !important; 
          max-width: 100% !important; 
        }
        table { width: 100% !important; max-width: 100% !important; }
        p { width: 100% !important; max-width: 100% !important; }
      \`}</style>

      <div dangerouslySetInnerHTML={{ __html: htmlContent }} className="w-full" />
    </div>
  );
};

export default ${componentName};
`;

  fs.writeFileSync(path.join('src', 'pages', `${componentName}.tsx`), tsxContent);
});

console.log("Components generated successfully.");
