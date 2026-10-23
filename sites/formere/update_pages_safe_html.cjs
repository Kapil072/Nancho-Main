const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(pagesDir);

let updatedCount = 0;

for (const file of files) {
  if (!file.endsWith('.tsx')) continue;
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (content.includes('dangerouslySetInnerHTML={{ __html: htmlContent }}')) {
    // 1. Add import statement at the top
    if (!content.includes('import { SafeHtml }')) {
      // Find the first import statement and prepended or add it after
      content = `import { SafeHtml } from "@/components/SafeHtml";\n` + content;
    }
    
    // 2. Replace the div with SafeHtml component
    content = content.replace(
      /<div dangerouslySetInnerHTML=\{\{\s*__html:\s*htmlContent\s*\}\}\s*className="fdl-content w-full"\s*\/>/g,
      '<SafeHtml html={htmlContent} className="fdl-content w-full" />'
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
    updatedCount++;
  }
}

console.log(`Successfully updated ${updatedCount} files.`);
