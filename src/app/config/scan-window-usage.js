const fs = require('fs');
const path = require('path');

const TARGETS = ['window', 'document', 'localStorage'];
const EXTENSIONS = ['.ts', '.html'];

function scanDir(dir) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...scanDir(fullPath));
    } else if (EXTENSIONS.includes(path.extname(entry.name))) {
      const content = fs.readFileSync(fullPath, 'utf8');
      TARGETS.forEach(target => {
        if (content.includes(target)) {
          const lines = content.split('\n');
          lines.forEach((line, i) => {
            if (line.includes(target)) {
              results.push(`${fullPath}:${i + 1} -> ${line.trim()}`);
            }
          });
        }
      });
    }
  }

  return results;
}

const rootDir = path.join(__dirname, '..', '..');
const usages = scanDir(rootDir);

if (usages.length) {
  console.log('\n🕵️‍♂️ Usos directos encontrados:\n');
  usages.forEach(usage => console.log(usage));
} else {
  console.log('\n✅ No se encontraron usos directos de window/document/localStorage.');
}
