# Reglas de Protección Permanente de Recursos

## Recursos Protegidos e Inmutables

Las siguientes 7 imágenes son recursos permanentes y protegidos del proyecto. **NUNCA** deben ser renombradas, movidas, copiadas, eliminadas, ni alteradas en sus rutas o imports.

### Ubicaciones Físicas Únicas
- `src/assets/images/logo/LOGO NEGRO.png`
- `src/assets/images/obras/a01/WhatsApp Image 2026-08-11 at 6.26.24 PM.jpeg`
- `src/assets/images/obras/a01/WhatsApp Image 2026-08-11 at 6.32.00 PM (1).jpeg`
- `src/assets/images/obras/a01/WhatsApp Image 2026-08-11 at 6.32.00 PM.jpeg`
- `src/assets/images/obras/a02/WhatsApp Image 2026-08-11 at 6,24,55 PM-1.jpeg`
- `src/assets/images/obras/a02/WhatsApp Image 2026-08-12 at 7.14.29 PM.jpeg`
- `src/assets/images/obras/a02/WhatsApp Image 2026-08-12 at 7.15.55 PM.jpeg`

### Registro Central de Referencia (`src/assets/images.ts`)
- Las imágenes deben ser consumidas exclusivamente vía el objeto exportado `IMAGES` en `src/assets/images.ts`.
- **PROHIBIDO**: Crear cadenas de texto `/images/...`, funciones `getPublicUrl()`, `Blob`, `URL.createObjectURL()`, o copias en `public/`.
- **PROHIBIDO**: Duplicar los archivos físicamente en `public/` o cualquier otra carpeta.

### Relación y Orden de Imágenes
1. **Logo Principal** (`LOGO NEGRO.png`): Hero Section e inicio de página, junto al nombre/título principal.
2. **Obra A01**:
   - Foto 1: `WhatsApp Image 2026-08-11 at 6.26.24 PM.jpeg`
   - Foto 2: `WhatsApp Image 2026-08-11 at 6.32.00 PM (1).jpeg`
   - Foto 3: `WhatsApp Image 2026-08-11 at 6.32.00 PM.jpeg`
3. **Obra A02**:
   - Foto 1: `WhatsApp Image 2026-08-11 at 6,24,55 PM-1.jpeg`
   - Foto 2: `WhatsApp Image 2026-08-12 at 7.14.29 PM.jpeg`
   - Foto 3: `WhatsApp Image 2026-08-12 at 7.15.55 PM.jpeg`

### Protocolo para Modificaciones Futuras
Si una solicitud requiere alterar alguno de estos recursos, informar al usuario primero con el mensaje exacto:
`"Esta modificación requiere alterar un recurso protegido."`
y explicar en detalle el cambio solicitado antes de realizar cualquier acción.
