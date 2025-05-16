const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function fixAssetPaths(file) {
  if (!file.endsWith('.html')) return;

  let content = fs.readFileSync(file, 'utf8');
  const updated = content.replace(/src=["'](?:\.\/)?assets\//g, 'src="/assets/');

  if (content !== updated) {
    fs.writeFileSync(file, updated, 'utf8');
    console.log(`✔️ Fixed paths in ${file}`);
  }
}

walkDir('./src', fixAssetPaths);
