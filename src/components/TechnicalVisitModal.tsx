import React, { useState } from 'react';
import { X, Calendar, MapPin, Building, User, Briefcase, Phone, Mail, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { REGION_METROPOLITANA_COMUNAS, VisitaTecnicaFormData, TechnicalVisitPayload } from '../types';
import { sendTechnicalVisitByEmail, TARGET_CONTACT_EMAIL } from '../services/technicalVisitService';

interface TechnicalVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  initialData?: Partial<VisitaTecnicaFormData>;
  onSuccessSubmitted?: () => void;
}

export const TechnicalVisitModal: React.FC<TechnicalVisitModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
  initialData,
  onSuccessSubmitted,
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [trackingCode, setTrackingCode] = useState<string>('');

  const [formData, setFormData] = useState<VisitaTecnicaFormData>({
    nombreContacto: '',
    cargo: '',
    empresa: '',
    email: '',
    telefono: '',
    comuna: initialData?.comuna || 'Quilicura',
    direccion: '',
    tipoServicio: preselectedService || initialData?.tipoServicio || 'Estudios y Diagnóstico',
    detallesProyecto: initialData?.detallesProyecto || '',
    restriccionOperativa: initialData?.restriccionOperativa || 'Coordinación según disponibilidad del recinto',
    horarioPreferente: 'Diurno de Mañana (08:30 - 12:30)',
    fechaEstimada: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (
      !formData.nombreContacto?.trim() ||
      !formData.empresa?.trim() ||
      !formData.cargo?.trim() ||
      !formData.email?.trim() ||
      !formData.telefono?.trim() ||
      !formData.comuna?.trim() ||
      !formData.direccion?.trim() ||
      !formData.tipoServicio?.trim() ||
      !formData.horarioPreferente?.trim()
    ) {
      setErrorMsg('Por favor complete todos los campos obligatorios del formulario antes de confirmar.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    const payload: TechnicalVisitPayload = {
      nombreSolicitante: formData.nombreContacto.trim(),
      empresa: formData.empresa.trim(),
      cargo: formData.cargo.trim(),
      email: formData.email.trim(),
      telefono: formData.telefono.trim(),
      comuna: formData.comuna.trim(),
      direccion: formData.direccion.trim(),
      tipoRequerimiento: formData.tipoServicio.trim(),
      detallesProyecto: formData.detallesProyecto?.trim() || '',
      urgencia: formData.horarioPreferente.trim(),
    };

    try {
      // Envío serverless directo por correo a seingeniaconstruccion@gmail.com
      const res = await sendTechnicalVisitByEmail(payload, {
        restriccionOperativa: formData.restriccionOperativa,
        fechaEstimada: formData.fechaEstimada,
      });

      if (res && res.success) {
        setTrackingCode(res.codigoSeguimiento || `SEIN-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`);
        setStep(3);
        if (onSuccessSubmitted) onSuccessSubmitted();
      } else {
        setErrorMsg(res?.message || 'No fue posible registrar la solicitud. Por favor, inténtelo nuevamente.');
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'No fue posible enviar la solicitud. Por favor, inténtelo nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white text-slate-900 rounded-lg max-w-xl w-full border border-slate-300 shadow-xl overflow-hidden text-left my-8">
        
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-5 flex items-start justify-between border-b border-slate-800">
          <div className="space-y-1">
            <h2 className="text-lg font-bold text-white">
              {step === 3 ? 'Solicitud Confirmada' : 'Agendar Visita Técnica en Terreno'}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Wizard Progress Bar */}
        {step < 3 && (
          <div className="bg-slate-100 px-5 py-2 border-b border-slate-200 flex items-center justify-between text-xs font-medium text-slate-600">
            <span className={step === 1 ? 'text-slate-900 font-bold' : ''}>
              1. Contacto y Empresa
            </span>
            <span className="text-slate-300">/</span>
            <span className={step === 2 ? 'text-slate-900 font-bold' : ''}>
              2. Detalles del Requerimiento
            </span>
          </div>
        )}

        {/* Form Body */}
        <div className="p-5 sm:p-6">
          
          {errorMsg && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-800 rounded text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {step === 1 && (
            <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="nombreContacto"
                    required
                    placeholder="ej. Roberto Gómez"
                    value={formData.nombreContacto}
                    onChange={handleChange}
                    className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded focus:outline-none focus:border-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Cargo *
                  </label>
                  <input
                    type="text"
                    name="cargo"
                    required
                    placeholder="ej. Jefatura de Operaciones / Mantención"
                    value={formData.cargo}
                    onChange={handleChange}
                    className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded focus:outline-none focus:border-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Empresa *
                  </label>
                  <input
                    type="text"
                    name="empresa"
                    required
                    placeholder="ej. Centro Logístico San Bernardo"
                    value={formData.empresa}
                    onChange={handleChange}
                    className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded focus:outline-none focus:border-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Comuna (RM) *
                  </label>
                  <select
                    name="comuna"
                    value={formData.comuna}
                    onChange={handleChange}
                    className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded focus:outline-none focus:border-slate-900"
                  >
                    {REGION_METROPOLITANA_COMUNAS.map((comuna) => (
                      <option key={comuna} value={comuna}>
                        {comuna}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Corporativo *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="contacto@empresa.cl"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded focus:outline-none focus:border-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Teléfono Móvil *
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    required
                    placeholder="+56 9 1234 5678"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded focus:outline-none focus:border-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Dirección o Sector (Opcional)
                </label>
                <input
                  type="text"
                  name="direccion"
                  placeholder="ej. Parque Industrial Enea, Módulo 4"
                  value={formData.direccion}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded focus:outline-none focus:border-slate-900"
                />
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-5 py-2 rounded text-xs transition-colors"
                >
                  Siguiente &rarr;
                </button>
              </div>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Categoría de Servicio
                </label>
                <select
                  name="tipoServicio"
                  value={formData.tipoServicio}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded focus:outline-none focus:border-slate-900 bg-white"
                >
                  <option value="Estudios y Diagnóstico">Estudios y Diagnóstico</option>
                  <option value="Arquitectura e Ingeniería">Arquitectura e Ingeniería</option>
                  <option value="Sistemas e Instalaciones">Sistemas e Instalaciones</option>
                  <option value="Ejecución de Obras">Ejecución de Obras</option>
                  <option value="Operación y Mantención">Operación y Mantención</option>
                  <option value="Ampliación y Renovación de Infraestructura">Ampliación y Renovación de Infraestructura</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Descripción Breve del Proyecto
                </label>
                <textarea
                  name="detallesProyecto"
                  rows={3}
                  placeholder="Detalles sobre las áreas a intervenir o requerimientos..."
                  value={formData.detallesProyecto}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded focus:outline-none focus:border-slate-900"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Horario Preferente
                  </label>
                  <select
                    name="horarioPreferente"
                    value={formData.horarioPreferente}
                    onChange={handleChange}
                    className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded focus:outline-none focus:border-slate-900"
                  >
                    <option value="Diurno de Mañana (08:30 - 12:30)">Diurno de Mañana (08:30 - 12:30)</option>
                    <option value="Diurno de Tarde (14:00 - 18:00)">Diurno de Tarde (14:00 - 18:00)</option>
                    <option value="Fuera de Horario / Fin de Semana">Fuera de Horario / Fin de Semana</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Fecha Deseada
                  </label>
                  <input
                    type="date"
                    name="fechaEstimada"
                    value={formData.fechaEstimada}
                    onChange={handleChange}
                    className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded focus:outline-none focus:border-slate-900"
                  />
                </div>
              </div>

              <div className="pt-3 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-slate-600 text-xs font-medium px-2 py-1"
                >
                  &larr; Volver
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-cta-gold px-5 py-2 rounded text-xs transition-colors flex items-center gap-2 shadow-sm disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Enviando solicitud...</span>
                    </>
                  ) : (
                    'Confirmar y Agendar Visita'
                  )}
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="text-center space-y-4 py-2">
              <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center mx-auto border border-slate-300">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <span className="text-[10px] uppercase font-semibold text-slate-500">
                  Código de Seguimiento
                </span>
                <p className="text-2xl font-bold text-slate-900 font-mono tracking-wider">
                  {trackingCode}
                </p>
                <p className="text-xs text-slate-700">
                  Estimado(a) {formData.nombreContacto} ({formData.cargo} en {formData.empresa})
                </p>
                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed pt-1">
                  Su solicitud para la comuna de <strong className="text-slate-900">{formData.comuna}</strong> ha sido enviada exitosamente a <strong className="text-slate-900">{TARGET_CONTACT_EMAIL}</strong>. Un especialista se contactará con usted a la brevedad al teléfono <strong className="text-slate-900">{formData.telefono}</strong>.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-3 rounded text-left text-xs space-y-1 max-w-md mx-auto">
                <p><strong>Especialidad:</strong> {formData.tipoServicio}</p>
                <p><strong>Comuna:</strong> {formData.comuna}</p>
                <p><strong>Horario:</strong> {formData.horarioPreferente}</p>
              </div>

              <button
                onClick={onClose}
                className="bg-slate-900 text-white font-medium px-6 py-2 rounded text-xs hover:bg-slate-800 transition-colors"
              >
                Cerrar
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
