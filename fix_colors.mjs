import fs from 'fs';
import path from 'path';

const filesToFix = [
  'src/pages/InscripcionView.css',
  'src/components/Services.css',
  'src/components/Schedule.css',
  'src/components/PlanRegistrationModal.css',
  'src/components/Philosophy.css',
  'src/components/Navbar.css',
  'src/components/AuthModal.css',
  'src/components/AboutUs.css'
];

filesToFix.forEach(f => {
  const p = path.resolve(f);
  if(fs.existsSync(p)) {
    let text = fs.readFileSync(p, 'utf-8');
    text = text.replace(/color:\s*(#fff|#ffffff|white);/g, 'color: var(--text-light);');
    text = text.replace(/color:\s*rgba\(255,\s*255,\s*255,\s*0\.[0-9]+\);/g, 'color: var(--text-muted);');
    fs.writeFileSync(p, text);
    console.log(`Fixed colors in ${f}`);
  } else {
    console.log(`File not found: ${p}`);
  }
});
