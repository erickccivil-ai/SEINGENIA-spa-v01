import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

interface VisitaTecnicaRequest {
  id: string;
  createdAt: string;
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
  estado: "Pendiente" | "Coordinada" | "Completada";
}

// In-memory store initialized with realistic demo submissions
const visitasStore: VisitaTecnicaRequest[] = [
  {
    id: "SEIN-2026-1042",
    createdAt: new Date(Date.now() - 3600000 * 24 * 2).toISOString(),
    nombreContacto: "Rodrigo Morales",
    cargo: "Jefe de Mantención e Infraestructura",
    empresa: "Centro Logístico San Bernardo SA",
    email: "rmorales@logisticanorte.cl",
    telefono: "+56 9 8765 4321",
    comuna: "San Bernardo",
    direccion: "Av. La Montaña 1240, Módulo B",
    tipoServicio: "Obras Civiles - Pavimentos Industriales",
    detallesProyecto: "Reparación estructural de losa para grúas horquilla en sector de andenes de carga sin detener despacho diurno.",
    restriccionOperativa: "Operación 24/7. Trabajos permitidos solo en ventanas nocturnas de 22:00 a 06:00 h con mínimo polvo.",
    horarioPreferente: "Nocturno (22:00 a 06:00)",
    fechaEstimada: "2026-08-15",
    estado: "Coordinada"
  },
  {
    id: "SEIN-2026-1043",
    createdAt: new Date(Date.now() - 3600000 * 5).toISOString(),
    nombreContacto: "Camila Valenzuela",
    cargo: "Gerente de Operaciones",
    empresa: "Laboratorios Farmacéuticos Andinos",
    email: "cvalenzuela@labandinos.cl",
    telefono: "+56 9 9123 4567",
    comuna: "Huechuraba",
    direccion: "Ciudad Empresarial, Av. del Valle 750",
    tipoServicio: "Proyectos de Mejora & Remodelación Corporativa",
    detallesProyecto: "Habilitación de nuevas salas de control de calidad y refuerzo de estructuras con tabiquería acústica aislante.",
    restriccionOperativa: "Manejo estricto de partículas y vibraciones. Trabajo durante fin de semana largo.",
    horarioPreferente: "Fin de Semana / Festivo",
    fechaEstimada: "2026-08-20",
    estado: "Pendiente"
  }
];

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API endpoints
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", service: "Constructora Seingenia API" });
  });

  // Get all site visits
  app.get("/api/visitas", (req, res) => {
    res.json({
      success: true,
      count: visitasStore.length,
      data: visitasStore
    });
  });

  // Create new site visit request
  app.post("/api/visita-tecnica", (req, res) => {
    try {
      const body = req.body;
      if (!body.nombreContacto || !body.empresa || !body.email || !body.telefono || !body.comuna) {
        return res.status(400).json({
          success: false,
          error: "Faltan campos obligatorios para registrar la solicitud de visita técnica."
        });
      }

      const newId = `SEIN-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      const newVisit: VisitaTecnicaRequest = {
        id: newId,
        createdAt: new Date().toISOString(),
        nombreContacto: body.nombreContacto,
        cargo: body.cargo || "No especificado",
        empresa: body.empresa,
        email: body.email,
        telefono: body.telefono,
        comuna: body.comuna,
        direccion: body.direccion || "Región Metropolitana",
        tipoServicio: body.tipoServicio || "Evaluación General de Infraestructura",
        detallesProyecto: body.detallesProyecto || "Sin detalle adicional",
        restriccionOperativa: body.restriccionOperativa || "Ninguna especificada",
        horarioPreferente: body.horarioPreferente || "Diurno Flexible",
        fechaEstimada: body.fechaEstimada || "A convenir",
        estado: "Pendiente"
      };

      visitasStore.unshift(newVisit);

      return res.status(201).json({
        success: true,
        message: "Solicitud de visita técnica registrada exitosamente.",
        codigoSeguimiento: newId,
        data: newVisit
      });
    } catch (err: any) {
      return res.status(500).json({
        success: false,
        error: "Error interno al procesar la solicitud de visita técnica."
      });
    }
  });

  // Operational Estimator AI/Rule Engine Endpoint
  app.post("/api/estimador-operacional", (req, res) => {
    const { tipoServicio, m2, turnoContinuo, toleranciaRuido } = req.body;

    const m2Val = Number(m2) || 100;
    let diasEfectivos = Math.ceil(m2Val / 45);
    if (diasEfectivos < 2) diasEfectivos = 2;

    let recomendacionTurno = "Turno Mixto (Nocturno / Fin de semana)";
    let protocoloAislamiento = "Sellado de polvo con tabiquería modular antipolvo + aspiradores de alta capacidad";

    if (turnoContinuo === "alta" || toleranciaRuido === "muy_baja") {
      recomendacionTurno = "Ejecución Nocturna Exclusiva (22:00 a 06:00 h) o Fines de Semana sin interrupción diurna";
      protocoloAislamiento = "Aislamiento termoacústico temporal, supresión de polvo por agua nebulizada en interiores y barreras de sonido H2.0m";
    } else if (toleranciaRuido === "media") {
      recomendacionTurno = "Ejecución Diurna Segmentada con Ventanas de Trabajo Silencioso";
    }

    return res.json({
      success: true,
      estimacion: {
        diasEfectivos,
        recomendacionTurno,
        protocoloAislamiento,
        garantiaContinuidad: "100% de la operación del cliente se mantiene activa sin detención de líneas ni accesos principales.",
        equipoAsignado: "1 Ingeniero de Residencia + 1 Prevencionista de Riesgos SNS + Cuadrilla Especializada de Infraestructura Empresarial"
      }
    });
  });

  // Vite development middleware or static production serving
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Constructora Seingenia server ready on http://0.0.0.0:${PORT}`);
  });
}

startServer();
