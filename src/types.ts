export interface ServicePillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  badge: string;
  features: string[];
  deliverables: string[];
  idealFor: string;
  image: string;
}

export interface InfrastructureServiceArea {
  id: string;
  stepNumber: number; // 1 to 7
  phase: "A. Proyectos" | "B. Construcción";
  phaseCode: "A" | "B";
  conceptStep: string; // "Diagnosticar", "Diseñar", "Ingenierizar", "Coordinar", "Construir", "Mantener", "Transformar"
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  services: string[];
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  clientIndustry: string;
  comuna: string;
  sqm: number;
  duration: string;
  challenge: string;
  seingeniaSolution: string;
  operationalImpact: string; // e.g., "0% interrupción en despachos nocturnos"
  tags: string[];
  image: string;
  images?: readonly string[] | string[];
}

export interface CompanyExperienceItem {
  id: string;
  codeImage: string; // e.g. "A01", "A02"
  codeVideo?: string; // e.g. "B01", "B02"
  title: string;
  comuna: string;
  description: string;
  imageSrc: string;
  images?: readonly string[] | string[];
  videoSrc?: string;
  youtubeUrl?: string;
  youtubeEmbedUrl?: string;
  youtubeId?: string;
  isShort?: boolean;
}

export interface TechnicalVisitPayload {
  nombreSolicitante: string;
  empresa: string;
  cargo: string;
  email: string;
  telefono: string;
  comuna: string;
  direccion: string;
  tipoRequerimiento: string;
  detallesProyecto: string;
  urgencia: string;
}

export interface TechnicalVisitResponse {
  success: boolean;
  message: string;
  codigoSeguimiento?: string;
}

export interface VisitaTecnicaFormData {
  nombreContacto: string;
  cargo: string;
  empresa: string;
  email: string;
  telefono: string;
  comuna: string;
  direccion: string;
  tipoServicio: string;
  detallesProyecto: string;
  restriccionOperativa: string;
  horarioPreferente: string;
  fechaEstimada: string;
}

export interface VisitaTecnicaRecord extends VisitaTecnicaFormData {
  id: string;
  createdAt: string;
  estado: "Pendiente" | "Coordinada" | "Completada";
}

export const REGION_METROPOLITANA_COMUNAS = [
  "Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central",
  "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja",
  "La Pintana", "La Reina", "Las Condes", "Lampa", "Lo Barnechea", "Lo Espejo",
  "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén",
  "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta",
  "Renca", "San Bernardo", "San Joaquín", "San Miguel", "San Ramón",
  "Santiago Centro", "Talagante", "Vitacura", "Buin", "Colina", "Melipilla", "Penaflor"
];
