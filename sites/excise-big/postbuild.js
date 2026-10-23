import fs from 'fs';
import path from 'path';

const distDir = 'dist';
const files = [
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

const indexPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('Build output dist/index.html not found!');
  process.exit(1);
}

// 1. Copy to 404.html for fallback routing
fs.copyFileSync(indexPath, path.join(distDir, '404.html'));
console.log('Created dist/404.html');

// 2. Copy to each route file name to support direct static access
files.forEach(file => {
  const destPath = path.join(distDir, file);
  fs.copyFileSync(indexPath, destPath);
  console.log(`Created dist/${file}`);
});

console.log('Postbuild static routing setup complete!');
