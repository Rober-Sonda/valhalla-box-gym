const fs = require('fs');
const svgPath = 'C:\\Users\\ROBER\\Downloads\\png2svg (3)\\w884n34751rmt0cxd4q856jchc_preview_0-ezremove.svg';
const jsPath = 'c:\\src\\valhalla-box-gym\\src\\components\\EpicIcons.jsx';

const svgContent = fs.readFileSync(svgPath, 'utf8');
const pathRegex = /<path[^>]*fill="([^"]+)"[^>]*d="([^"]+)"/g;
let match;
const newPaths = [];

while ((match = pathRegex.exec(svgContent)) !== null) {
  const fill = match[1];
  const d = match[2];
  
  const hex = fill.slice(1, 3);
  const val = parseInt(hex, 16) / 255.0;
  let opacity = Math.round((1.0 - val) * 100) / 100;
  opacity = Math.max(0.25, Math.min(0.95, opacity));
  
  newPaths.push(`      <path opacity="1" fillOpacity="${opacity}" d="${d}"/>`);
}

const pathsStr = newPaths.join('\n');

const stockShield = `// === IMAGEN 1: Escudo Circular Geométrico (Archivo Auto-traced del Usuario) ===
export const StockShield = (props) => (
  <svg viewBox="0 0 218 220" style={{shapeRendering:"geometricPrecision", textRendering:"geometricPrecision", imageRendering:"optimizeQuality", fillRule:"evenodd", clipRule:"evenodd"}} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="currentColor">
${pathsStr}
    </g>
  </svg>
);`;

let jsContent = fs.readFileSync(jsPath, 'utf8');
const replaceRegex = /\/\/ === IMAGEN 1: Escudo Circular Geométrico( \(Archivo Auto-traced del Usuario\))? ===.*?<\/svg>\n\);/si;

jsContent = jsContent.replace(replaceRegex, stockShield);

fs.writeFileSync(jsPath, jsContent, 'utf8');
console.log('Updated EpicIcons.jsx with StockShield using Node!');
