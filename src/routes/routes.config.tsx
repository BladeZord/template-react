import type { RouteItemConfig } from './types'
import {
  HomePage,
  DashboardPage,
  Page1,
  Page2,
  SettingsPage,
} from '@/pages'

/**
 * Configuración de rutas por módulo.
 * Cada entrada define path, data (title + urls breadcrumb) y component.
 * El title se usa en el layout; las vistas no lo definen.
 * urls soporta N niveles.
 */
export const routesConfig: RouteItemConfig[] = [
  {
    index: true,
    data: {
      title: 'Bienvenido al Template',
      urls: [{ title: 'Inicio' }],
    },
    component: HomePage,
  },
  {
    path: 'dashboard',
    data: {
      title: 'Dashboard',
      urls: [{ title: 'Inicio', path: '/' }, { title: 'Dashboard' }],
    },
    component: DashboardPage,
  },
  {
    path: 'page1',
    data: {
      title: 'Página 1',
      urls: [
        { title: 'Inicio', path: '/' },
        { title: 'Contenido' },
        { title: 'Página 1' },
      ],
    },
    component: Page1,
  },
  {
    path: 'page2',
    data: {
      title: 'Página 2',
      urls: [
        { title: 'Inicio', path: '/' },
        { title: 'Contenido' },
        { title: 'Página 2' },
      ],
    },
    component: Page2,
  },
  {
    path: 'settings',
    data: {
      title: 'Configuración',
      urls: [{ title: 'Inicio', path: '/' }, { title: 'Configuración' }],
    },
    component: SettingsPage,
  },
  // Ejemplo módulo "cargo" (descomenta y añade CargoComponent):
  // {
  //   path: 'cargo',
  //   data: {
  //     title: 'Gestión de cargos',
  //     urls: [{ title: 'Administración' }, { title: 'Gestión de cargos' }],
  //   },
  //   component: CargoComponent,
  // },
]
