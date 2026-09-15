import { lazy } from 'react'
import type { ComponentType } from 'react'

/**
 * Mapa `path -> componente`, cargado de forma diferida (code-splitting).
 * Los paths deben coincidir exactamente con los `path` definidos en
 * `src/config/menu.config.tsx`. Si agregas un nodo de menú con `path`
 * y no lo registras aquí, `routes/index.tsx` lanzará un error en build
 * (mejor eso que un 404 silencioso en producción).
 */
export const pageComponents: Record<string, ComponentType> = {
  '/': lazy(() => import('@/pages/HomePage').then((m) => ({ default: m.HomePage }))),
  '/dashboard': lazy(() => import('@/pages/DashboardPage').then((m) => ({ default: m.DashboardPage }))),
  '/page1': lazy(() => import('@/pages/Page1').then((m) => ({ default: m.Page1 }))),
  '/page1-1': lazy(() => import('@/pages/Page1_1').then((m) => ({ default: m.Page1_1 }))),
  '/page1-2': lazy(() => import('@/pages/Page1_2').then((m) => ({ default: m.Page1_2 }))),
  '/page2': lazy(() => import('@/pages/Page2').then((m) => ({ default: m.Page2 }))),
  '/settings': lazy(() => import('@/pages/SettingsPage').then((m) => ({ default: m.SettingsPage }))),
}
