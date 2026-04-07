const fs = require('fs');
const jsPath = 'c:\\src\\valhalla-box-gym\\src\\components\\EpicIcons.jsx';

const cleanStockShield = `// === IMAGEN 1: Escudo Circular Geométrico (Line Art Perfecto) ===
export const StockShield = (props) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" {...props}>
    {/* Círculos Centrales */}
    <circle cx="50" cy="50" r="42" />
    <circle cx="50" cy="50" r="32" />
    
    {/* Umbo */}
    <circle cx="50" cy="50" r="10" />
    <path d="M 48 44 A 5 5 0 0 1 55 51" strokeWidth="2.5" strokeLinecap="round" />

    {/* Eje Vertical */}
    <line x1="50" y1="18" x2="50" y2="40" />
    <line x1="50" y1="60" x2="50" y2="82" />

    {/* Linea Horizontal Superior (Y=34) con desgaste en la derecha */}
    <line x1="22" y1="34" x2="65" y2="34" />
    <line x1="72" y1="34" x2="78" y2="34" />

    {/* Linea Horizontal Inferior (Y=66) */}
    <line x1="22" y1="66" x2="78" y2="66" />

    {/* Diagonales Superiores */}
    <line x1="40" y1="50" x2="22" y2="34" />
    <line x1="60" y1="50" x2="78" y2="34" />

    {/* Diagonales Inferiores con desgaste */}
    <line x1="40" y1="50" x2="28" y2="60" />
    <line x1="25" y1="63" x2="22" y2="66" />
    
    <line x1="60" y1="50" x2="73" y2="61" />
    <line x1="76" y1="64" x2="78" y2="66" />

    {/* Listones de madera - Mitad Superior (Y=44) */}
    <line x1="19.5" y1="44" x2="32" y2="44" />
    <line x1="68" y1="44" x2="80.5" y2="44" />

    {/* Listones de madera - Mitad Inferior (Y=58) */}
    <line x1="21" y1="58" x2="30.5" y2="58" />
    <line x1="69.5" y1="58" x2="73" y2="58" />
    <line x1="77" y1="58" x2="79" y2="58" />
  </svg>
);`;

let jsContent = fs.readFileSync(jsPath, 'utf8');
const replaceRegex = /\/\/ === IMAGEN 1: Escudo Circular Geométrico( \(Archivo Auto-traced del Usuario\))? ===.*?<\/svg>\n\);/si;

jsContent = jsContent.replace(replaceRegex, cleanStockShield);

fs.writeFileSync(jsPath, jsContent, 'utf8');
console.log('StockShield replaced with clean SVG!');
