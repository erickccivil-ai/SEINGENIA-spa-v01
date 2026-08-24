export interface TimelineYearData {
  year: number | string;
  label: string;
  phase: 'Histórico' | 'Actual' | 'Proyección';
  metric: string;
  shortDesc: string;
  source: string;
  unifiedSummary: string;
  detailedDescription: string;
  highlights: string[];
  marketInterpretation: string;
}

export interface ObservatorioKpi {
  id: string;
  metric: string;
  unit: string;
  label: string;
  sublabel: string;
  source: string;
  note?: string;
  interpretation: string;
}

export const MAIN_KPIS = {
  featured: {
    metric: '+14,9%',
    label: 'Crecimiento Proyectado de Infraestructura Privada en 2026',
    sublabel: 'Reactivación de inversiones empresariales e industriales tras el ciclo de contracción',
    source: 'Cámara Chilena de la Construcción (Informe MACh 68)',
    typeNote: 'Proyección estimada para el sector privado productivo (no corresponde a resultados pasados ejecutados).'
  },
  investChile: {
    metric: 'US$ 65.689 M',
    projects: '463 proyectos',
    growth: '+16,8% respecto de 2024',
    label: 'Inversión Extranjera Directa (IED) en Infraestructura Empresarial',
    sublabel: 'Capitales multinacionales destinados a la construcción, habilitación y expansión de recintos corporativos, plantas industriales, data centers y parques logísticos en Chile.',
    source: 'InvestChile, Registro Oficial de Proyectos 2025-2026',
    note: 'Corresponde a la cartera total de proyectos de Inversión Extranjera Directa (IED) apoyada por InvestChile con alto impacto en demanda de infraestructura y habilitación física.'
  }
};

export const TIMELINE_DATA: TimelineYearData[] = [
  {
    year: 2021,
    label: '2021',
    phase: 'Histórico',
    metric: '+2,4%',
    shortDesc: 'Reapertura gradual y retoma de proyectos industriales postergados.',
    source: 'CChC (MACh)',
    unifiedSummary: 'Período de reapertura gradual y reactivación tras el impacto inicial de la pandemia. Las empresas priorizaron la puesta a punto y acondicionamiento de bodegas, centros de distribución de última milla y adecuación de espacios operativos para normalizar sus cadenas de suministro.',
    detailedDescription: 'Período de reactivación tras el impacto inicial de la pandemia. Las empresas priorizaron la puesta a punto de bodegas, centros logísticos y adecuación de espacios operativos.',
    highlights: [
      'Retoma gradual de acondicionamiento de naves logísticas',
      'Normalización paulatina de cadenas de suministro e insumos',
      'Aceleración de espacios de distribución de última milla'
    ],
    marketInterpretation: 'Las empresas adaptaron sus instalaciones operativas para hacer frente a nuevas demandas logísticas y de almacenamiento.'
  },
  {
    year: 2022,
    label: '2022',
    phase: 'Histórico',
    metric: '-1,5%',
    shortDesc: 'Desaceleración por alza de tasas de interés e inflación de insumos.',
    source: 'CChC (MACh 58)',
    unifiedSummary: 'Inicio de un escenario financiero más restrictivo por alza de tasas e inflación de insumos como acero y hormigón. Las organizaciones postergaron grandes adiciones de metros cuadrados y concentraron sus presupuestos en obras menores de conservación, refuerzo estructural y mantención operativa.',
    detailedDescription: 'Inicio de un escenario financiero más restrictivo. El incremento en los costos de construcción e insumos como el acero y hormigón llevó a postergar grandes adiciones de m².',
    highlights: [
      'Incremento de costos de insumos y materiales industriales',
      'Endurecimiento de condiciones de crédito bancario empresarial',
      'Prevalencia de obras menores de conservación y refuerzo'
    ],
    marketInterpretation: 'Momento de cautela donde se postergaron nuevos recintos, priorizando intervenciones puntuales para mantener la operación activa.'
  },
  {
    year: 2023,
    label: '2023',
    phase: 'Histórico',
    metric: '-7,2%',
    shortDesc: 'Contracción de la inversión privada en infraestructura productiva.',
    source: 'CChC (Informe MACh 62)',
    unifiedSummary: 'Punto bajo del ciclo productivo con contracción en la edificación no habitacional e industrial. Ante la incertidumbre y tasas elevadas, las decisiones de inversión se enfocaron en diagnósticos técnicos, optimización de infraestructura existente y mantención normativa esencial.',
    detailedDescription: 'Caída relevante en la edificación no habitacional e industrial. Las elevadas tasas de interés y la incertidumbre en tiempos de tramitación paralizaron decisiones de expansión.',
    highlights: [
      'Contracción severa (-7,2%) de la inversión privada productiva',
      'Pausa en proyectos de ampliación de plantas industriales',
      'Concentración de presupuestos en mantenimiento normativo mínimo'
    ],
    marketInterpretation: 'Punto bajo del ciclo donde la continuidad operativa requirió soluciones eficientes y diagnósticos de infraestructura existente.'
  },
  {
    year: 2024,
    label: '2024',
    phase: 'Histórico',
    metric: '-6,3%',
    shortDesc: 'Persistencia de debilidad en el mercado privado productivo.',
    source: 'CChC (Proyecciones Macro)',
    unifiedSummary: 'Etapa de prudencia y ajuste de presupuestos de capital. Las empresas estructuraron anteproyectos, readecuaciones internas eléctricas e hidráulicas y estudios de ingeniería preliminares a la espera de condiciones favorables para reactivar obras de mayor envergadura.',
    detailedDescription: 'El sector empresarial mantuvo una postura prudente a la espera de recortes en la tasa de interés y mayor claridad en permisos sectoriales antes de activar obras.',
    highlights: [
      'Ajuste continuo de presupuestos de capital en el sector privado',
      'Preparación de anteproyectos y estudios técnicos para el siguiente ciclo',
      'Priorización de readecuaciones eléctricas e hidráulicas internas'
    ],
    marketInterpretation: 'Fase de preparación donde las empresas estructuraron sus requerimientos futuros para estar listas ante la reactivación.'
  },
  {
    year: 2025,
    label: '2025',
    phase: 'Histórico',
    metric: '+3,2%',
    shortDesc: 'Inflexión positiva e inicio de recuperación de proyectos privados.',
    source: 'InvestChile / CChC 2025',
    unifiedSummary: 'Inflexión positiva hacia terreno de crecimiento impulsada por proyectos en energía, data centers y logística. Se reactivó la demanda por losas industriales de alta carga, adecuaciones técnicas de recintos y modernización de instalaciones productivas.',
    detailedDescription: 'Inflexión hacia terreno positivo. La baja gradual de tasas y el impulso en sectores de energía, datos y tecnología reactivaron solicitudes de adecuación de plantas.',
    highlights: [
      'Retorno a variaciones positivas (+3,2%) en infraestructura privada',
      'Aumento de proyectos de energía renovable, data centers e industria',
      'Mayor demanda de losas pesadas y adecuaciones eléctricas'
    ],
    marketInterpretation: 'Inicio de la reactivación real en terreno. Aumenta la necesidad de evaluar correctamente la capacidad de las instalaciones actuales.'
  },
  {
    year: 2026,
    label: '2026',
    phase: 'Actual',
    metric: '+14,9%',
    shortDesc: 'Fuerte crecimiento y reactivación en infraestructura privada.',
    source: 'CChC (Informe MACh 68)',
    unifiedSummary: 'Ciclo actual con fuerte reactivación y crecimiento (+14,9% estimado por la CChC) por la entrada en ejecución de proyectos corporativos, industriales y logísticos acumulados. Destaca la necesidad de ampliaciones de naves y modernización técnica ejecutadas sin detener la operación diaria de las plantas.',
    detailedDescription: 'Proyección destacada de la CChC (+14,9% estimado). Representa la entrada en ejecución de proyectos corporativos, industriales y logísticos acumulados.',
    highlights: [
      'Reactivación acelerada en recintos privados (+14,9%)',
      'Demanda de ampliaciones de naves y modernización técnica',
      'Enfoque en continuidad operativa sin detener la producción'
    ],
    marketInterpretation: 'Oportunidad clave para evaluar con rigor técnico las intervenciones de infraestructura antes de comprometer capital.'
  },
  {
    year: 'Proyección',
    label: 'Proyección',
    phase: 'Proyección',
    metric: 'Sostenida',
    shortDesc: 'Orientación a sostenibilidad, eficiencia energética y automatización.',
    source: 'Proyección de Industria Productiva',
    unifiedSummary: 'Tendencia de largo plazo enfocada en sostenibilidad, automatización y eficiencia energética. Las instalaciones empresariales demandan adecuaciones continuas en pavimentos de alto tráfico, climatización eficiente, redes normativas y planes periódicos de conservación técnica.',
    detailedDescription: 'Tendencia de largo plazo enfocada en la adaptación continua de recintos a requerimientos de eficiencia energética, electromovilidad y normas de seguridad.',
    highlights: [
      'Adaptación de infraestructura existente a nuevas exigencias',
      'Incorporación de redes de clima (HVAC) e incendios eficientes',
      'Modernización de pavimentos industriales y conectividad'
    ],
    marketInterpretation: 'Las instalaciones requerirán evaluaciones técnicas periódicas para asegurar su vida útil y rendimiento operacional.'
  }
];

export const INVEST_CHILE_SECTORS = [
  { name: 'Energía & Almacenamiento', percentage: '33,6%', desc: 'Sistemas de energía limpia, subestaciones y almacenamiento.' },
  { name: 'Tecnología & Data Centers', percentage: '19,4%', desc: 'Infraestructura digital, salas de control y seguridad.' },
  { name: 'Logística & Distribución', percentage: '19,0%', desc: 'Centros de bodegaje, andenes y pavimentos de alto tráfico.' },
  { name: 'Industria & Servicios', percentage: '28,0%', desc: 'Plantas productivas, laboratorios y recintos corporativos.' }
];

export const EXISTING_INFRASTRUCTURE_FLOW = [
  {
    step: 1,
    title: 'Nuevas Metas / Maquinaria',
    subtitle: 'Llegada de equipo o nuevas líneas',
    desc: 'La empresa adquiere una nueva línea de producción o un equipo de mayor tonelaje.',
    civilWorkImpact: 'Requiere evaluar el espacio disponible y la capacidad portante del suelo.'
  },
  {
    step: 2,
    title: 'Aumento de Carga Eléctrica',
    subtitle: 'Nuevos requerimientos de potencia',
    desc: 'Se debe adaptar la subestación, tableros de distribución y canalizaciones industriales.',
    civilWorkImpact: 'Trincheras técnicas, canalizaciones y refuerzo de tableros.'
  },
  {
    step: 3,
    title: 'Obras Civiles & Fundaciones',
    subtitle: 'Adaptación estructural',
    desc: 'Las fundaciones existentes no soportan las vibraciones o el peso del nuevo equipamiento.',
    civilWorkImpact: 'Demolición controlada, excavación y hormigonado de losas de alta resistencia.'
  },
  {
    step: 4,
    title: 'Redes Sanitarias & Sanitización',
    subtitle: 'Saneamiento e hidráulica',
    desc: 'El nuevo proceso requiere aducción de agua de proceso o drenaje técnico especializado.',
    civilWorkImpact: 'Canaletas epóxicas, cámaras de inspección y redes de evacuación.'
  },
  {
    step: 5,
    title: 'Protección Contra Incendios & Clima',
    subtitle: 'Cumplimiento normativo y seguridad',
    desc: 'La nueva distribución espacial altera la cobertura de rociadores y extracción de aire.',
    civilWorkImpact: 'Red húmeda/seca, soportación aérea y ductos de ventilación (HVAC).'
  },
  {
    step: 6,
    title: 'Pavimentos & Tráfico Logístico',
    subtitle: 'Continuidad operacional',
    desc: 'Requerimiento de trazado de grúas horquilla, revestimiento antiácido e impacto operacional.',
    civilWorkImpact: 'Sellado de juntas, pavimento industrial de alto tráfico y rampas.'
  }
];

export const APA_REFERENCES = [
  {
    authors: 'Cámara Chilena de la Construcción',
    year: '2026',
    title: 'Informe Macroeconomía y Construcción (MACh 68): Diagnóstico sectorial y proyecciones de inversión',
    publisher: 'CChC, Santiago de Chile',
    url: 'https://cchc.cl/estudios/mach'
  },
  {
    authors: 'InvestChile',
    year: '2026',
    title: 'Reporte Anual de Cartera de Proyectos de Inversión Extranjera Directa en Chile 2025-2026',
    publisher: 'Agencia de Promoción de la Inversión Extranjera',
    url: 'https://investchile.gob.cl'
  }
];
