import { TechnicalVisitPayload, TechnicalVisitResponse } from '../types';

export const TARGET_CONTACT_EMAIL = 'seingeniaconstruccion@gmail.com';

/**
 * Valida que los campos obligatorios del requerimiento estén completos.
 */
export function validateTechnicalVisitPayload(payload: TechnicalVisitPayload): { isValid: boolean; error?: string } {
  if (!payload.nombreSolicitante?.trim()) {
    return { isValid: false, error: 'El nombre del solicitante es obligatorio.' };
  }
  if (!payload.empresa?.trim()) {
    return { isValid: false, error: 'El nombre de la empresa es obligatorio.' };
  }
  if (!payload.cargo?.trim()) {
    return { isValid: false, error: 'El cargo del solicitante es obligatorio.' };
  }
  if (!payload.email?.trim() || !payload.email.includes('@')) {
    return { isValid: false, error: 'Ingrese un correo electrónico de contacto válido.' };
  }
  if (!payload.telefono?.trim()) {
    return { isValid: false, error: 'El teléfono de contacto es obligatorio.' };
  }
  if (!payload.comuna?.trim()) {
    return { isValid: false, error: 'Debe seleccionar una comuna de la Región Metropolitana.' };
  }
  if (!payload.direccion?.trim()) {
    return { isValid: false, error: 'La dirección del recinto o instalación es obligatoria.' };
  }
  if (!payload.tipoRequerimiento?.trim()) {
    return { isValid: false, error: 'Debe seleccionar un tipo de servicio o requerimiento.' };
  }
  if (!payload.urgencia?.trim()) {
    return { isValid: false, error: 'Debe especificar el horario preferente o urgencia.' };
  }

  return { isValid: true };
}

/**
 * Genera un código de seguimiento único para la solicitud de visita técnica
 */
export function generateTrackingCode(): string {
  const currentYear = new Date().getFullYear();
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  return `SEIN-${currentYear}-${randomSuffix}`;
}

/**
 * Envía la solicitud de visita técnica directamente al correo corporativo
 * seingeniaconstruccion@gmail.com mediante servicio serverless (FormSubmit AJAX API),
 * sin requerir backend ni bases de datos, ideal para despliegue en GitHub Pages.
 */
export async function sendTechnicalVisitByEmail(
  payload: TechnicalVisitPayload,
  extraDetails?: {
    restriccionOperativa?: string;
    fechaEstimada?: string;
    trackingCode?: string;
  }
): Promise<TechnicalVisitResponse> {
  // 1. Validación de campos en el cliente
  const validation = validateTechnicalVisitPayload(payload);
  if (!validation.isValid) {
    throw new Error(validation.error || 'Por favor complete todos los campos obligatorios.');
  }

  const trackingCode = extraDetails?.trackingCode || generateTrackingCode();

  // 2. Preparar el cuerpo del correo estructurado
  const emailData = {
    _subject: `Nueva Solicitud de Visita Técnica [${trackingCode}] - ${payload.empresa} (${payload.comuna})`,
    _replyto: payload.email,
    _template: 'table',
    _captcha: 'false',
    'Código de Seguimiento': trackingCode,
    'Nombre Solicitante': payload.nombreSolicitante,
    'Cargo': payload.cargo,
    'Empresa': payload.empresa,
    'Email de Contacto': payload.email,
    'Teléfono': payload.telefono,
    'Comuna (RM)': payload.comuna,
    'Dirección': payload.direccion,
    'Tipo de Servicio': payload.tipoRequerimiento,
    'Detalles del Proyecto': payload.detallesProyecto || 'No especificados',
    'Horario Preferente': payload.urgencia,
    'Fecha Estimada': extraDetails?.fechaEstimada || 'A coordinar',
    'Restricción Operativa': extraDetails?.restriccionOperativa || 'No declarada',
    'Fecha y Hora de Envío': new Date().toLocaleString('es-CL', { timeZone: 'America/Santiago' }),
  };

  try {
    // 3. Envío HTTP directo vía AJAX a FormSubmit apuntando a seingeniaconstruccion@gmail.com
    const endpoint = `https://formsubmit.co/ajax/${TARGET_CONTACT_EMAIL}`;
    
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(emailData),
    });

    if (!response.ok) {
      throw new Error(`Error en el servicio de correo (HTTP ${response.status}).`);
    }

    const data = await response.json();

    if (data && (data.success === 'true' || data.success === true || response.status === 200)) {
      return {
        success: true,
        message: 'Solicitud enviada exitosamente a seingeniaconstruccion@gmail.com',
        codigoSeguimiento: trackingCode,
      };
    } else if (data?.message && data.message.includes('needs Activation')) {
      return {
        success: true,
        message: 'Solicitud registrada. Por favor confirme el correo de activación de FormSubmit en seingeniaconstruccion@gmail.com para habilitar la recepción continua.',
        codigoSeguimiento: trackingCode,
      };
    } else {
      throw new Error(data?.message || 'No fue posible completar el envío del correo.');
    }
  } catch (error: any) {
    console.error('Error enviando correo serverless:', error);
    // Si hay un error de red o timeout, lanzamos el mensaje para que la interfaz informe al usuario
    throw new Error(
      error.message || 'No fue posible enviar la solicitud automáticamente. Por favor comuníquese a seingeniaconstruccion@gmail.com o al +56 9 8244 4940.'
    );
  }
}

