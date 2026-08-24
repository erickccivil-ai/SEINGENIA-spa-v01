// Centralized asset registry
// Pure SVG data URIs to ensure zero broken links, perfect vector scaling, and zero binary corruption.

import logoPrincipal from './images/logo/LOGO NEGRO.png';
import mapaComunasSantiago from './images/Mapa/Captura de pantalla 2026-08-20 163103.png';
import obraA01Image1 from './images/Obra A01/WhatsApp Image 2026-08-11 at 6.26.24 PM.jpeg';
import obraA01Image2 from './images/Obra A01/WhatsApp Image 2026-08-11 at 6.32.00 PM (1).jpeg';
import obraA01Image3 from './images/Obra A01/WhatsApp Image 2026-08-11 at 6.32.00 PM.jpeg';
import obraA02Image1 from './images/Obra A02/WhatsApp Image 2026-08-11 at 6.24.55 PM.jpeg';
import obraA02Image2 from './images/Obra A02/WhatsApp Image 2026-08-12 at 7.14.29 PM - copia.jpeg';
import obraA02Image3 from './images/Obra A02/WhatsApp Image 2026-08-12 at 7.15.55 PM - copia.jpeg';
import obraA03Image1 from './images/Obra A03/Captura de pantalla 2026-08-20 015056.png';
import obraA03Image2 from './images/Obra A03/Captura de pantalla 2026-08-20 015918.png';
import obraA03Image3 from './images/Obra A03/Captura de pantalla 2026-08-20 020500.png';
import obraA04Image1 from './images/Obra A04/Captura de pantalla 2026-08-20 112352.png';
import obraA04Image2 from './images/Obra A04/Captura de pantalla 2026-08-20 112629.png';
import obraA04Image3 from './images/Obra A04/Captura de pantalla 2026-08-20 112906.png';
import obraA05Image1 from './images/Obra A05/carozi1.jpeg';
import obraA05Image2 from './images/Obra A05/carozi2.jpeg';
import obraA05Image3 from './images/Obra A05/carozi3.jpeg';
import obraA05Image4 from './images/Obra A05/carozi4.jpeg';
import obraA05Image5 from './images/Obra A05/carozi5.jpeg';
import obraA06Image1 from './images/Obra A06/gas1.jpeg';
import obraA06Image2 from './images/Obra A06/gas2.jpeg';
import obraA06Image3 from './images/Obra A06/gas 3.jpeg';

const createSvgDataUri = (svgString: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(svgString.trim())}`;

// High-fidelity vector Logo for Constructora Seingenia
const logoSvg = createSvgDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 120" fill="none">
  <!-- Isometric Architectural Structure Mark -->
  <g transform="translate(10, 10)">
    <!-- Base Cube Geometries -->
    <polygon points="50,5 95,30 50,55 5,30" fill="#0f172a" stroke="#0f172a" stroke-width="2" stroke-linejoin="round"/>
    <polygon points="5,30 50,55 50,105 5,80" fill="#1e293b" stroke="#0f172a" stroke-width="2" stroke-linejoin="round"/>
    <polygon points="95,30 50,55 50,105 95,80" fill="#334155" stroke="#0f172a" stroke-width="2" stroke-linejoin="round"/>
    <!-- Technical Axis Accents -->
    <line x1="50" y1="5" x2="50" y2="55" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="4,2"/>
    <circle cx="50" cy="55" r="4" fill="#f59e0b"/>
  </g>
  
  <!-- Typography Group -->
  <text x="125" y="58" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="44" letter-spacing="3" fill="#0f172a">SEINGENIA</text>
  <text x="126" y="85" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="13" letter-spacing="6" fill="#475569">CONSTRUCTORA</text>
  <text x="325" y="85" font-family="system-ui, -apple-system, sans-serif" font-weight="600" font-size="11" letter-spacing="2" fill="#d97706">• ARQ &amp; ING</text>
  
  <!-- Subtle Technical Baseline Rule -->
  <line x1="126" y1="96" x2="490" y2="96" stroke="#cbd5e1" stroke-width="1.5"/>
</svg>
`);

// Technical Architectural Schematic SVGs for Obras
const createSchematicSvg = (title: string, code: string, color: string, subtitle: string) => createSvgDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" fill="#0f172a">
  <rect width="600" height="360" fill="#0f172a"/>
  
  <!-- Technical Grid -->
  <defs>
    <pattern id="grid_${code}" width="30" height="30" patternUnits="userSpaceOnUse">
      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#1e293b" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="600" height="360" fill="url(#grid_${code})"/>
  
  <!-- Blueprint Structure Lines -->
  <g opacity="0.35" stroke="${color}" stroke-width="1.5" stroke-dasharray="4,4">
    <line x1="60" y1="40" x2="540" y2="40"/>
    <line x1="60" y1="320" x2="540" y2="320"/>
    <line x1="60" y1="40" x2="60" y2="320"/>
    <line x1="540" y1="40" x2="540" y2="320"/>
    <line x1="60" y1="180" x2="540" y2="180"/>
    <line x1="300" y1="40" x2="300" y2="320"/>
  </g>

  <!-- Architectural Isometric Wireframe Frame -->
  <g transform="translate(300, 170)">
    <polygon points="0,-70 120,-10 0,50 -120,-10" fill="none" stroke="${color}" stroke-width="2"/>
    <polygon points="-120,-10 0,50 0,110 -120,50" fill="none" stroke="${color}" stroke-width="2"/>
    <polygon points="120,-10 0,50 0,110 120,50" fill="none" stroke="${color}" stroke-width="2"/>
    <!-- Diagonal Bracing -->
    <line x1="-120" y1="-10" x2="0" y2="110" stroke="${color}" stroke-width="1" stroke-dasharray="2,2"/>
    <line x1="120" y1="-10" x2="0" y2="110" stroke="${color}" stroke-width="1" stroke-dasharray="2,2"/>
  </g>

  <!-- Top Code Badge -->
  <rect x="30" y="25" width="90" height="26" rx="4" fill="#1e293b" stroke="${color}" stroke-width="1"/>
  <text x="75" y="42" font-family="monospace" font-weight="bold" font-size="12" fill="${color}" text-anchor="middle">${code}</text>

  <!-- Main Label -->
  <text x="30" y="325" font-family="system-ui, -apple-system, sans-serif" font-weight="bold" font-size="18" fill="#f8fafc">${title}</text>
  <text x="30" y="343" font-family="system-ui, -apple-system, sans-serif" font-weight="500" font-size="12" fill="#94a3b8">${subtitle}</text>

  <!-- Corner Crosshairs -->
  <path d="M 20 20 L 30 20 M 20 20 L 20 30" stroke="${color}" stroke-width="2"/>
  <path d="M 580 20 L 570 20 M 580 20 L 580 30" stroke="${color}" stroke-width="2"/>
  <path d="M 20 340 L 30 340 M 20 340 L 20 330" stroke="${color}" stroke-width="2"/>
  <path d="M 580 340 L 570 340 M 580 340 L 580 330" stroke="${color}" stroke-width="2"/>
</svg>
`);

const obraA01_1 = obraA01Image1;
const obraA01_2 = obraA01Image2;
const obraA01_3 = obraA01Image3;

const obraA02_1 = obraA02Image1;
const obraA02_2 = obraA02Image2;
const obraA02_3 = obraA02Image3;

const obraA03_1 = obraA03Image1;
const obraA03_2 = obraA03Image2;
const obraA03_3 = obraA03Image3;

const obraA04_1 = obraA04Image1;
const obraA04_2 = obraA04Image2;
const obraA04_3 = obraA04Image3;

const obraA05_1 = obraA05Image1;
const obraA05_2 = obraA05Image2;
const obraA05_3 = obraA05Image3;
const obraA05_4 = obraA05Image4;
const obraA05_5 = obraA05Image5;

const obraA06_1 = obraA06Image1;
const obraA06_2 = obraA06Image2;
const obraA06_3 = obraA06Image3;

// Clean Santiago Map Vector Base
const mapSvg = createSvgDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" fill="#090d16">
  <rect width="500" height="500" fill="#090d16"/>
  <defs>
    <pattern id="map_grid" width="25" height="25" patternUnits="userSpaceOnUse">
      <path d="M 25 0 L 0 0 0 25" fill="none" stroke="#1e293b" stroke-width="0.75"/>
    </pattern>
  </defs>
  <rect width="500" height="500" fill="url(#map_grid)"/>
  <!-- Topographic / Highway Contours -->
  <path d="M 50 150 Q 200 180 300 250 T 450 400" fill="none" stroke="#334155" stroke-width="2.5"/>
  <path d="M 120 50 Q 220 220 250 350 T 380 480" fill="none" stroke="#334155" stroke-width="2"/>
  <path d="M 30 300 Q 250 280 470 200" fill="none" stroke="#334155" stroke-width="2"/>
  <!-- Communal outlines -->
  <circle cx="250" cy="250" r="160" fill="none" stroke="#475569" stroke-width="1" stroke-dasharray="4,4"/>
  <circle cx="250" cy="250" r="90" fill="none" stroke="#f59e0b" stroke-width="1" stroke-dasharray="2,2" opacity="0.4"/>
</svg>
`);

export function getPublicUrl(path: string): string {
  if (!path) return '';
  return path;
}

export const IMAGES = {
  logo: {
    principal: logoPrincipal,
    negroSpace: logoPrincipal,
    negro1: logoPrincipal,
    negro: logoPrincipal,
    negroAlt: logoPrincipal,
    seingenia: logoPrincipal,
  },
  mapas: {
    santiagoDaytime: mapSvg,
    santiagoComunas: mapaComunasSantiago,
  },
  obras: {
    A01: {
      img1: obraA01_1,
      img2: obraA01_2,
      img3: obraA01_3,
      images: [obraA01_1, obraA01_2, obraA01_3],
    },
    a01: {
      img1: obraA01_1,
      img2: obraA01_2,
      img3: obraA01_3,
      images: [obraA01_1, obraA01_2, obraA01_3],
    },
    A02: {
      img1: obraA02_1,
      img2: obraA02_2,
      img3: obraA02_3,
      images: [obraA02_1, obraA02_2, obraA02_3],
    },
    a02: {
      img1: obraA02_1,
      img2: obraA02_2,
      img3: obraA02_3,
      images: [obraA02_1, obraA02_2, obraA02_3],
    },
    A03: {
      img1: obraA03_1,
      img2: obraA03_2,
      img3: obraA03_3,
      images: [obraA03_1, obraA03_2, obraA03_3],
    },
    a03: {
      img1: obraA03_1,
      img2: obraA03_2,
      img3: obraA03_3,
      images: [obraA03_1, obraA03_2, obraA03_3],
    },
    A04: {
      img1: obraA04_1,
      img2: obraA04_2,
      img3: obraA04_3,
      images: [obraA04_1, obraA04_2, obraA04_3],
    },
    a04: {
      img1: obraA04_1,
      img2: obraA04_2,
      img3: obraA04_3,
      images: [obraA04_1, obraA04_2, obraA04_3],
    },
    A05: {
      img1: obraA05_1,
      img2: obraA05_2,
      img3: obraA05_3,
      img4: obraA05_4,
      img5: obraA05_5,
      images: [obraA05_1, obraA05_2, obraA05_3, obraA05_4, obraA05_5],
    },
    a05: {
      img1: obraA05_1,
      img2: obraA05_2,
      img3: obraA05_3,
      img4: obraA05_4,
      img5: obraA05_5,
      images: [obraA05_1, obraA05_2, obraA05_3, obraA05_4, obraA05_5],
    },
    A06: {
      img1: obraA06_1,
      img2: obraA06_2,
      img3: obraA06_3,
      images: [obraA06_1, obraA06_2, obraA06_3],
    },
    a06: {
      img1: obraA06_1,
      img2: obraA06_2,
      img3: obraA06_3,
      images: [obraA06_1, obraA06_2, obraA06_3],
    }
  }
} as const;
