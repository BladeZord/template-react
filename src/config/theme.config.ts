export interface ColorPreset {
  key: string
  label: string
  color: string
}

/**
 * Colores disponibles en el panel de ajustes (AppSettingsDrawer).
 * Para agregar uno nuevo, solo añade una entrada aquí — no hace falta
 * tocar CSS en ningún lado, AntD recalcula todos los componentes
 * a partir de `colorPrimary` vía ConfigProvider.
 */
export const colorPresets: ColorPreset[] = [
  { key: 'blue', label: 'Azul', color: '#1677ff' },
  { key: 'purple', label: 'Púrpura', color: '#722ed1' },
  { key: 'green', label: 'Verde', color: '#389e0d' },
  { key: 'red', label: 'Rojo', color: '#cf1322' },
  { key: 'orange', label: 'Naranja', color: '#d46b08' },
  { key: 'cyan', label: 'Cian', color: '#08979c' },
]
