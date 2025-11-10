const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../../public/images/memories');
const memorySections = fs.readdirSync(baseDir).filter(f => fs.statSync(path.join(baseDir, f)).isDirectory());

const result = memorySections.map(title => {
  const dir = path.join(baseDir, title);
  // Get all images by extension
  const images = fs.readdirSync(dir)
    .filter(filename => /\.(png|jpe?g|svg)$/i.test(filename))
    .map(filename => `/images/memories/${title}/${filename}`);
  
  return {
    title,
    images
  }
});

// Write JSON file
fs.writeFileSync(
  path.join(__dirname, '../assets/data/memories.json'),
  JSON.stringify(result, null, 2)
);

console.log('memories.json generated!');
