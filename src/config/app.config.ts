/**
 * Configuración estática del layout — todo lo que ProLayout NO resuelve
 * por sí solo (menú, header, breadcrumb, responsive y colapso de sidebar
 * ya los maneja ProLayout). El color y el modo claro/oscuro son dinámicos
 * en runtime, ver `src/store/theme.store.ts` y `src/config/theme.config.ts`.
 */
export const appConfig = {
  appName: 'Template React',
  layout: {
    siderWidth: 256,
    fixedHeader: true,
    /** Ancho de pantalla debajo del cual el sidebar pasa a modo Drawer. */
    breakpoint: 'lg' as const,
    contentStyle: { padding: 24, minHeight: 360 },
  },
}
