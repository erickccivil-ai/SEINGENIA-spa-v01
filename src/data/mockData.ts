import { ServicePillar, ProjectCaseStudy, InfrastructureServiceArea, CompanyExperienceItem } from '../types';
import { IMAGES } from '../assets/images';

export const INFRASTRUCTURE_AREAS: InfrastructureServiceArea[] = [
  {
    id: "estudios-diagnostico",
    stepNumber: 1,
    phase: "A. Proyectos",
    phaseCode: "A",
    conceptStep: "Diagnosticar",
    title: "1. Estudios y Diagnóstico",
    subtitle: "Evaluación inicial, patologías y factibilidad técnica",
    description: "Levantamiento riguroso del estado actual de los activos para identificar vulnerabilidades, evaluar viabilidad y fundamentar decisiones de inversión.",
    iconName: "SearchCheck",
    services: [
      "Levantamientos y topografía",
      "Diagnóstico de infraestructura existente",
      "Inspecciones y evaluación de patologías",
      "Estudios de factibilidad",
      "Evaluación técnica y económica"
    ]
  },
  {
    id: "arquitectura",
    stepNumber: 2,
    phase: "A. Proyectos",
    phaseCode: "A",
    conceptStep: "Proyectar",
    title: "2. Arquitectura & Ingeniería",
    subtitle: "Diseño ejecutivo, especificaciones técnicas y soluciones estructurales",
    description: "Desarrollo de proyectos ejecutivos orientados a la funcionalidad operacional, optimización de espacios e integración técnica.",
    iconName: "DraftingCompass",
    services: [
      "Proyecto de arquitectura corporativa e industrial",
      "Cálculo y diseño de estructuras metálicas y hormigón",
      "Modelación BIM / Planimetría CAD",
      "Proyectos de especialidades (Instalaciones)",
      "Presupuestos y especificaciones técnicas (EETT)"
    ]
  },
  {
    id: "obras-civiles",
    stepNumber: 3,
    phase: "B. Construcción",
    phaseCode: "B",
    conceptStep: "Construir",
    title: "3. Obras Civiles & Edificación",
    subtitle: "Construcción, fundaciones y movimiento de tierras",
    description: "Ejecución de obras con altos estándares de calidad y estricto control de plazos, garantizando la continuidad operativa.",
    iconName: "HardHat",
    services: [
      "Movimiento de tierras y excavaciones",
      "Fundaciones, radieres y losas de hormigón",
      "Pavimentos industriales y andenes de carga",
      "Estructuras metálicas y galpones",
      "Construcción y remodelación de edificación"
    ]
  },
  {
    id: "mantencion",
    stepNumber: 4,
    phase: "B. Construcción",
    phaseCode: "B",
    conceptStep: "Preservar",
    title: "4. Mantención de Infraestructura",
    subtitle: "Conservación de inmuebles, servicios S.O.S. y planes de mantención",
    description: "Servicios continuos y de respuesta rápida para preservar el valor y la operatividad de las instalaciones físicas.",
    iconName: "Wrench",
    services: [
      "Mantención preventiva y correctiva de recintos",
      "Reparación de losas y sellado de juntas",
      "Impermeabilización de cubiertas y hojalatería",
      "Pintura industrial, fachadas y señalética",
      "Atención de contingencias e imprevistos"
    ]
  }
];

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: "obras-civiles",
    title: "Obras Civiles & Pavimentos Industriales",
    subtitle: "Infraestructura pesada, losas y andenes de carga",
    description: "Construcción y reparación de radieres, losas de alta resistencia, pavimentos industriales, fundaciones de maquinaria y muros de contención.",
    iconName: "HardHat",
    badge: "Alta Resistencia",
    idealFor: "Centros de distribución, plantas productivas, patios de maniobras y depósitos.",
    features: [
      "Losas de hormigón de alta resistencia con fibras de acero o polipropileno",
      "Demolición controlada y reconstrucción de andenes de carga",
      "Fundaciones pesadas para maquinaria, rotoplas y puentes grúa",
      "Muros perimetrales, containment berms y pretiles anticorrosivos",
      "Canalizaciones subterráneas de alta resistencia y cámaras de inspección"
    ],
    deliverables: [
      "Memoria de cálculo y ensayos de probetas de hormigón (NCh170)",
      "Levantamiento topográfico pre y post ejecución",
      "Certificado de recepción de obras civiles y libro de obra al día"
    ],
    image: IMAGES.obras.A01.img2
  },
  {
    id: "infraestructura-empresarial",
    title: "Infraestructura & Adecuación de Plantas",
    subtitle: "Ampliaciones y readecuaciones de recintos industriales y corporativos",
    description: "Ampliación y readecuación de dependencias operativas e industriales con mínimas interrupciones en la rutina productiva.",
    iconName: "LayoutGrid",
    badge: "Continuidad Operativa",
    idealFor: "Plantas de proceso, salas técnicas, centros logísticos e inmuebles institucionales.",
    features: [
      "Ampliaciones de naves industriales y centros logísticos",
      "Adecuación de losas, andenes de carga y accesos pesados",
      "Estructuración de salas técnicas, de control y laboratorios",
      "Rampas de acceso industrial, canalizaciones y vías de evacuación"
    ],
    deliverables: [
      "Planimetría As-Built en CAD/BIM",
      "Aislamiento antipolvo y acústico certificado durante la obra",
      "Garantía extendida por estructuras e instalaciones"
    ],
    image: IMAGES.obras.A01.img3
  },
  {
    id: "mantencion-obras",
    title: "Mantención de Obras & Infraestructura",
    subtitle: "Planes preventivos y correctivos para preservar el valor de sus activos",
    description: "Programas continuos de mantención de infraestructura física que previenen fallas críticas en cubiertas, estructuras, pavimentos y canalizaciones.",
    iconName: "Wrench",
    badge: "Planes Anuales / S.O.S",
    idealFor: "Inmuebles comerciales, bodegas de almacenamiento, complejos logísticos e instituciones.",
    features: [
      "Reparación de grietas y sellado de juntas de dilatación en losas",
      "Mantención e impermeabilización de cubiertas y bajadas de aguas lluvias",
      "Reparación de estructuras, cierres perimetrales y portones industriales",
      "Mantenimiento de pavimentos y canalizaciones de drenaje"
    ],
    deliverables: [
      "Informe técnico fotográfico post-mantención con diagnóstico",
      "Matriz de criticidad infraestructural recomendada",
      "Cuadrilla de emergencia en la Región Metropolitana"
    ],
    image: IMAGES.obras.A01.img1
  },
  {
    id: "proyectos-instalaciones",
    title: "Proyectos de Instalaciones Tecnológicas",
    subtitle: "Redes industriales, electricidad, climatización y fluidos",
    description: "Integración de instalaciones técnicas esenciales para la operación continua de la empresa, ejecutadas bajo estricto cumplimiento normativo vigente.",
    iconName: "Zap",
    badge: "Normativa SEC / SEC-HVAC",
    idealFor: "Plantas de proceso, centros de datos, oficinas de alto tráfico y hubs logísticos.",
    features: [
      "Redes eléctricas industriales en baja y media tensión y tableros de distribución",
      "Climatización industrial (HVAC), ventilación forzada y extracción",
      "Redes de agua potable, alcantarillado industrial y redes contra incendio",
      "Iluminación de alta eficiencia para naves e instalaciones"
    ],
    deliverables: [
      "Inscripción y tramitación de Anexo TE1 (SEC) cuando aplique",
      "Protocolos de pruebas de hermeticidad y balance térmico",
      "Certificado de puesta en marcha operativa"
    ],
    image: IMAGES.obras.A01.img2
  }
];

export const CASE_STUDIES: ProjectCaseStudy[] = [
  {
    id: "caso-pudahuel-logistica",
    title: "Obra civil estructura vial",
    clientIndustry: "Logística y Distribución Internacional",
    comuna: "Lampa",
    sqm: 3200,
    duration: "3 Semanas (Ventanas Nocturnas)",
    challenge: "Reemplazo de losa de hormigón fisurada en zona de andenes con flujo ininterrumpido de 140 camiones diarios.",
    seingeniaSolution: "Implementación de fraguado rápido, coordinación de accesos alternativos y ejecución exclusiva de 22:00 a 06:00 horas.",
    operationalImpact: "0 horas de detención operacional. 100% de cumplimiento en metas de despacho del cliente.",
    tags: ["Obras Civiles", "Nocturno", "Pavimentos Industriales"],
    image: IMAGES.obras.A01.img1,
    images: IMAGES.obras.A01.images
  },
  {
    id: "caso-huechuraba-farmaceutico",
    title: "Habilitación de Galpón Industrial y Altillo Metal-Mecánico",
    clientIndustry: "Industria y Almacenamiento",
    comuna: "Lampa",
    sqm: 1100,
    duration: "4 Semanas",
    challenge: "Montaje de estructura metálica tipo altillo y maniobras con elevador de tijera en nave industrial activa.",
    seingeniaSolution: "Delimitación estricta de áreas de trabajo, montaje modular de estructura metálica azul y coordinación sin detener operaciones.",
    operationalImpact: "Preservación absoluta del ambiente operativo. Cero interferencia en almacenamiento.",
    tags: ["Estructuras Metálicas", "Galpón Industrial", "Altillos"],
    image: IMAGES.obras.A02.img1,
    images: IMAGES.obras.A02.images
  },
  {
    id: "caso-quilicura-industrial",
    title: "Diseño y Cálculo de Altillo de Almacenamiento",
    clientIndustry: "Industria y Almacenamiento",
    comuna: "Lampa",
    sqm: 1250,
    duration: "3 Semanas",
    challenge: "Modelación, cálculo y diseño ejecutivo para altillo estructural de almacenamiento optimizando cargas y espacio útil.",
    seingeniaSolution: "Ingeniería de detalle, especificaciones técnicas y planimetría estructural conforme a normativa sísmica y de sobrecarga.",
    operationalImpact: "Ampliación de capacidad de almacenamiento en un 80% sin intervenir la huella basal operativa.",
    tags: ["Cálculo Estructural", "Diseño de Altillos", "Ingeniería"],
    image: IMAGES.obras.a03.img1,
    images: IMAGES.obras.a03.images
  }
];

export const TESTIMONIALS = [
  {
    quote: "Seingenia demostró comprender de inmediato la complejidad de nuestra operación 24/7. Ejecutaron el reemplazo de losas en andenes sin entorpecer ni un solo despacho de camiones.",
    author: "Ing. Mauricio Silva",
    title: "Subgerente de Infraestructura",
    company: "Grupo Logístico Metropolitano (Pudahuel)",
    comuna: "Pudahuel"
  },
  {
    quote: "Buscábamos una empresa de construcción formal, ordenada y que no generara caos en nuestro edificio corporativo. El equipo de Seingenia destacó por su pulcritud, puntualidad y constante comunicación.",
    author: "Patricia Sepúlveda",
    title: "Chief Operations Officer",
    company: "Inversiones & Servicios Empresariales",
    comuna: "Las Condes"
  },
  {
    quote: "La flexibilidad horaria y la capacidad de adaptarse a nuestros protocolos de seguridad biológica en la planta de San Bernardo fue clave. Un estándar de ingeniería amigable pero implacablemente técnico.",
    author: "Carlos Alarcón",
    title: "Jefe de Mantención Planta",
    company: "Agroalimentos del Sur SA",
    comuna: "San Bernardo"
  }
];

export const FAQS = [
  {
    q: "¿En qué comunas de la Región Metropolitana prestan servicios?",
    a: "Cubrimos la totalidad de la Región Metropolitana, con presencia frecuente en polos industriales y corporativos como Quilicura, Pudahuel, Lampa, San Bernardo, Ciudad Empresarial (Huechuraba), Santiago Centro, Providencia, Las Condes, Renca y Maipú."
  },
  {
    q: "¿Cómo garantizan no entorpecer la operación diaria de mi empresa?",
    a: "Realizamos un levantamiento operativo previo antes de iniciar cualquier obra. Definimos horarios de trabajo ajustados a sus horas valle (turnos nocturnos, fines de semana o festivos), instalamos barreras modulares acústicas y de polvo, y mantenemos vías de tránsito limpias y habilitadas."
  },
  {
    q: "¿Cuál es el tiempo de respuesta para realizar la Visita Técnica?",
    a: "Coordinamos visitas técnicas y levantamientos estándar en un plazo de 1 a 2 días hábiles. Para contingencias o requerimientos de mantención de urgencia, contamos con capacidad de respuesta y atención prioritaria en menos de 24 horas para resguardar la continuidad de sus operaciones."
  },
  {
    q: "¿Prestan servicios de mantención preventiva mediante contratos anuales?",
    a: "Sí. Ofrecemos programas de Mantención Infraestructural con pautas periódicas trimestrales o semestrales, garantizando cuadrillas de respuesta prioritaria ante eventualidades o emergencias climáticas."
  },
  {
    q: "¿Cómo respaldan la seguridad y el cumplimiento durante la ejecución de las obras?",
    a: "Absolutamente. Toda obra cuenta con el respaldo de nuestro departamento de Prevención de Riesgos, carpetas de arranque, matriz de riesgos, seguros de accidentes (ACHS/Mutual) y recepción técnica formal."
  }
];

export const COMPANY_EXPERIENCE_ITEMS: CompanyExperienceItem[] = [
  {
    id: "obra-01",
    codeImage: "A01",
    codeVideo: "B01",
    title: "Obra A01: Renovación de estructura Vial y estacionamientos",
    comuna: "Lampa",
    description: "Reemplazo de losas de hormigón en andenes de carga con fraguado rápido de alta resistencia y ventanas operativas nocturnas.",
    imageSrc: IMAGES.obras.A01.img1,
    images: IMAGES.obras.A01.images,
    videoSrc: "/src/assets/videos/B01.mp4",
    youtubeUrl: "https://youtube.com/shorts/V4Awp4Uc0pg",
    youtubeEmbedUrl: "https://www.youtube.com/embed/V4Awp4Uc0pg",
    youtubeId: "V4Awp4Uc0pg",
    isShort: true,
  },
  {
    id: "obra-02",
    codeImage: "A02",
    codeVideo: "B02",
    title: "Obra A02: Reacondicionamiento, desmontaje y reubicación de estructura metálica de altillo de almacenamiento.",
    comuna: "Lampa",
    description: "Montaje de estructura metálica tipo altillo y adecuación espacial en nave industrial activa sin detención de almacenamiento.",
    imageSrc: IMAGES.obras.A02.img1,
    images: IMAGES.obras.A02.images,
    videoSrc: "/src/assets/videos/B02.mp4",
    youtubeUrl: "https://youtube.com/shorts/lHJ3S63iqc4",
    youtubeEmbedUrl: "https://www.youtube.com/embed/lHJ3S63iqc4",
    youtubeId: "lHJ3S63iqc4",
    isShort: true,
  },
  {
    id: "obra-03",
    codeImage: "A03",
    title: "Obra A03: Diseño y Cálculo de Altillo de Almacenamiento",
    comuna: "Lampa",
    description: "Diseño ejecutivo, cálculo estructural y planimetría para altillo de almacenamiento optimizando la capacidad operativa.",
    imageSrc: IMAGES.obras.a03.img1,
    images: IMAGES.obras.a03.images,
  },
  {
    id: "obra-04",
    codeImage: "A04",
    title: "Obra A04: Diseño y Proyecto de Instalaciones para espacio comercial",
    comuna: "Las Condes",
    description: "Desarrollo y coordinación de proyectos de instalaciones eléctricas, iluminación, climatización y sistemas de detección y extinción de incendios, adaptados a los requerimientos técnicos y operacionales del local comercial.",
    imageSrc: IMAGES.obras.A04.img1,
    images: IMAGES.obras.A04.images,
  },
  {
    id: "obra-05",
    codeImage: "A05",
    codeVideo: "B05",
    title: "Obra A05: Construcción de Cámara Interceptora en Empresa Productora de Alimentos",
    comuna: "Quilicura",
    description: "Construcción de ramal de piping y cámara interceptora de hormigón armado para conducción y control de flujos desde el interior de la nave, incluyendo losa, tapas y escalines, ejecutados conforme a los requerimientos técnicos y normativos vigentes.",
    imageSrc: IMAGES.obras.A05.img1,
    images: IMAGES.obras.A05.images,
    videoSrc: "/src/assets/videos/B05.mp4",
    youtubeUrl: "https://youtube.com/shorts/Wj0su0hSRAI?feature=share",
    youtubeEmbedUrl: "https://www.youtube.com/embed/Wj0su0hSRAI",
    youtubeId: "Wj0su0hSRAI",
    isShort: true,
  },
  {
    id: "obra-06",
    codeImage: "A06",
    title: "Obra A06: Diseño y ejecución de instalaciones eléctricas antiexplosivas para bodega de almacenamiento de cilindros de gas",
    comuna: "Quilicura",
    description: "Se consideran equipos y componentes certificados para atmósferas potencialmente explosivas, canalizaciones adecuadas y condiciones de seguridad requeridas para la operación del recinto.",
    imageSrc: IMAGES.obras.A06.img1,
    images: IMAGES.obras.A06.images,
  }
];
