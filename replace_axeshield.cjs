const fs = require('fs');
const jsPath = 'c:\\src\\valhalla-box-gym\\src\\components\\EpicIcons.jsx';

const cleanStockAxeShield = `// === IMAGEN 4: Escudo con Hachas Cruzadas (Line Art Perfecto) ===
export const StockAxeShield = (props) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" {...props}>
    <defs>
      <clipPath id="shield-clip">
        <path d="M 0 0 L 100 0 L 100 100 L 0 100 Z M 50 22 a 28 28 0 1 0 0 56 a 28 28 0 1 0 0 -56 Z" clipRule="evenodd" />
      </clipPath>

      <g id="vert-axe">
        {/* Cap superior */}
        <rect x="42" y="10" width="16" height="6" rx="3" />
        
        {/* Mango Superior */}
        {/* Se dibuja un mango largo que entra en el escudo sin preocuparnos, el clip lo esconde */}
        <line x1="46" y1="16" x2="46" y2="50" />
        <line x1="54" y1="16" x2="54" y2="50" />

        {/* Hoja del Hacha (Bearded Axe) fiel a la imagen */}
        <path d="M 46 20 L 38 20 Q 36 12 28 14" />
        <path d="M 28 14 C 18 18, 14 30, 21 39" />
        <path d="M 23 43 C 25 47, 30 49, 36 49" />
        <path d="M 36 49 Q 38 36 38 26 L 46 26" />
        
        {/* Detalles internos de la hoja */}
        <path d="M 31 20 Q 25 28 28 35" strokeWidth="2.5" />
        <path d="M 30 40 Q 33 44 36 44" strokeWidth="2.5" />

        {/* Ataduras de cuero */}
        <line x1="46" y1="30" x2="54" y2="30" strokeWidth="2.5" />
        <line x1="46" y1="34" x2="54" y2="34" strokeWidth="2.5" />

        {/* Mango Inferior */}
        <line x1="46" y1="50" x2="46" y2="84" />
        <line x1="54" y1="50" x2="54" y2="84" />
        {/* Cap inferior */}
        <rect x="44" y="84" width="12" height="6" rx="3" />
      </g>
    </defs>

    {/* Hachas aplicadas con la máscara de recorte */}
    <g clipPath="url(#shield-clip)">
      <use href="#vert-axe" transform="rotate(-45 50 50)" />
      <use href="#vert-axe" transform="scale(-1, 1) translate(-100, 0) rotate(-45 50 50)" />
    </g>

    {/* Escudo Circular */}
    <circle cx="50" cy="50" r="28" />
    <circle cx="50" cy="50" r="22" />
    
    <circle cx="50" cy="50" r="6" />
    <path d="M 47 46 A 4 4 0 0 1 54 52" strokeWidth="2" strokeLinecap="round" />

    {/* Cruz y X del Escudo */}
    <line x1="50" y1="28" x2="50" y2="44" />
    <line x1="50" y1="56" x2="50" y2="72" />
    <line x1="35" y1="35" x2="46" y2="46" />
    <line x1="65" y1="35" x2="54" y2="46" />
    <line x1="35" y1="65" x2="46" y2="54" />
    <line x1="65" y1="65" x2="54" y2="54" />

    {/* Marcas de desgaste del escudo */}
    <path d="M 32 46 L 32 55" strokeWidth="2.5" />
    <path d="M 68 45 L 68 54" strokeWidth="2.5" />
    <path d="M 42 34 L 43 36" strokeWidth="2.5" />
  </svg>
);`;

let jsContent = fs.readFileSync(jsPath, 'utf8');
const replaceRegex = /\/\/ === IMAGEN 4: Escudo con Hachas Cruzadas.*?<\/svg>\n\);/si;

jsContent = jsContent.replace(replaceRegex, cleanStockAxeShield);
fs.writeFileSync(jsPath, jsContent, 'utf8');
console.log('StockAxeShield blades completely redesigned!');
