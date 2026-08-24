/**
 * ==============================================================================
 * CONSTRUCTORA SEINGENIA - BACKEND GOOGLE APPS SCRIPT (doPost)
 * ==============================================================================
 * Este script debe pegarse en el editor de Apps Script vinculado a tu Google Sheet.
 * Procesa las solicitudes de visita técnica, registra la fila en la hoja de cálculo
 * y envía una notificación por correo electrónico.
 */

// 1. CONFIGURACIÓN: Ingresa el correo que recibirá las notificaciones de visitas técnicas
var NOTIFICATION_EMAIL = "contacto@constructora-seingenia.cl"; // Reemplazar por tu correo real

/**
 * Función principal que atiende las solicitudes HTTP POST enviadas desde la web.
 */
function doPost(e) {
  try {
    // 1. Lectura y deserialización del cuerpo de la solicitud
    var data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (parseErr) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    // Normalización de los 10 campos del formulario
    var nombreSolicitante = (data.nombreSolicitante || data.nombreContacto || "").trim();
    var empresa           = (data.empresa || "").trim();
    var cargo             = (data.cargo || "").trim();
    var email             = (data.email || "").trim();
    var telefono          = (data.telefono || "").trim();
    var comuna            = (data.comuna || "").trim();
    var direccion         = (data.direccion || "").trim();
    var tipoRequerimiento = (data.tipoRequerimiento || data.tipoServicio || "").trim();
    var detallesProyecto  = (data.detallesProyecto || "").trim();
    var urgencia          = (data.urgencia || data.horarioPreferente || "").trim();

    // 2. Validación estricta de campos obligatorios en el servidor
    if (!nombreSolicitante || !empresa || !cargo || !email || !telefono || !comuna || !direccion || !tipoRequerimiento || !urgencia) {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        message: "Faltan campos obligatorios para registrar la solicitud de visita técnica."
      })).setMimeType(ContentService.MimeType.JSON);
    }

    // 3. Generación de fecha, hora y código de seguimiento único
    var fechaHora = Utilities.formatDate(new Date(), "America/Santiago", "dd/MM/yyyy HH:mm:ss");
    var timestampCode = Utilities.formatDate(new Date(), "America/Santiago", "yyyyMMdd-HHmmss");
    var randomSuffix = Math.floor(1000 + Math.random() * 9000).toString();
    var codigoSeguimiento = "SEIN-" + timestampCode + "-" + randomSuffix;

    // 4. Registro en Google Sheets
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Si la hoja está vacía, inicializar la fila de encabezados oficial
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Código seguimiento",
        "Fecha y hora",
        "Nombre solicitante",
        "Empresa",
        "Cargo",
        "Correo electrónico",
        "Teléfono",
        "Comuna",
        "Dirección",
        "Tipo de requerimiento",
        "Detalles del proyecto",
        "Urgencia"
      ]);
      // Formato a la fila de encabezado
      var headerRange = sheet.getRange(1, 1, 1, 12);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#0f172a");
      headerRange.setFontColor("#ffffff");
    }

    // Agregar la nueva fila con los datos de la solicitud
    sheet.appendRow([
      codigoSeguimiento,
      fechaHora,
      nombreSolicitante,
      empresa,
      cargo,
      email,
      telefono,
      comuna,
      direccion,
      tipoRequerimiento,
      detallesProyecto || "Sin detalles adicionales",
      urgencia
    ]);

    // 5. Envío de notificación por correo electrónico
    var emailSent = false;
    var emailErrorDetail = null;

    if (NOTIFICATION_EMAIL && NOTIFICATION_EMAIL.indexOf("@") !== -1 && NOTIFICATION_EMAIL !== "contacto@constructora-seingenia.cl") {
      try {
        var emailSubject = "Nueva solicitud de visita técnica [" + codigoSeguimiento + "] - " + empresa + " (" + comuna + ")";
        var emailBody = 
          "Nueva solicitud de visita técnica\n\n" +
          "Código de seguimiento: " + codigoSeguimiento + "\n" +
          "Nombre: " + nombreSolicitante + "\n" +
          "Empresa: " + empresa + "\n" +
          "Cargo: " + cargo + "\n" +
          "Correo: " + email + "\n" +
          "Teléfono: " + telefono + "\n" +
          "Comuna: " + comuna + "\n" +
          "Dirección: " + direccion + "\n" +
          "Tipo de requerimiento: " + tipoRequerimiento + "\n" +
          "Detalles del proyecto: " + (detallesProyecto || "Sin detalles adicionales") + "\n" +
          "Urgencia: " + urgencia + "\n" +
          "Fecha y hora de recepción: " + fechaHora + "\n\n" +
          "--- Registrado automáticamente en Google Sheets ---";

        MailApp.sendEmail({
          to: NOTIFICATION_EMAIL,
          subject: emailSubject,
          body: emailBody
        });
        emailSent = true;
      } catch (mailError) {
        emailErrorDetail = mailError.toString();
        Logger.log("Advertencia: Se registró en Google Sheets pero falló el envío de correo: " + emailErrorDetail);
      }
    }

    // 6. Respuesta JSON exitosa (la solicitud ya está en Sheets de manera permanente)
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: "Solicitud recibida correctamente",
      codigoSeguimiento: codigoSeguimiento,
      emailNotificationSent: emailSent
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log("Error crítico en doPost: " + error.toString());
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: "No fue posible registrar la solicitud"
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Función auxiliar para verificar que el Web App esté activo vía GET
 */
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: "ok",
    service: "Constructora Seingenia - Endpoint de Visitas Técnicas Google Sheets",
    timestamp: new Date().toISOString()
  })).setMimeType(ContentService.MimeType.JSON);
}
