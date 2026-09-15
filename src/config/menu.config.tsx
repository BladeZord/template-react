import type { ReactNode } from 'react'
import type { TFunction } from 'i18next'
import {
  HomeOutlined,
  SettingOutlined,
  FileTextOutlined,
  DashboardOutlined,
} from '@ant-design/icons'

/**
 * Nodo de menú. Es la ÚNICA fuente de verdad: de aquí sale el menú lateral,
 * el breadcrumb (ProLayout/PageContainer lo arma solo comparando `path` con
 * la URL actual) y el título de cada página.
 *
 * `name` es una clave de i18n (ver src/i18n/locales/*.json), no el texto
 * final — se traduce en tiempo de render con `buildMenuTree`.
 *
 * Para añadir una página nueva:
 * 1. Crea el componente en `src/pages/`.
 * 2. Agrega su texto a los locales (`src/i18n/locales/es.json` y `en.json`).
 * 3. Añade el nodo aquí (con `path`).
 * 4. Registra `path -> componente` en `src/routes/routes.config.tsx`.
 */
export interface MenuNode {
  path?: string
  name: string
  icon?: ReactNode
  children?: MenuNode[]
  /** Oculta el nodo del menú lateral pero lo deja como ruta navegable. */
  hideInMenu?: boolean
}

export const menuData: MenuNode[] = [
  { path: '/', name: 'menu.home', icon: <HomeOutlined /> },
  { path: '/dashboard', name: 'menu.dashboard', icon: <DashboardOutlined /> },
  {
    name: 'menu.content',
    icon: <FileTextOutlined />,
    children: [
      {
        path: '/page1',
        name: 'menu.page1',
        children: [
          { path: '/page1-1', name: 'menu.page1_1' },
          { path: '/page1-2', name: 'menu.page1_2' },
        ],
      },
      { path: '/page2', name: 'menu.page2' },
    ],
  },
  { path: '/settings', name: 'menu.settings', icon: <SettingOutlined /> },
]

/** Traduce recursivamente las claves `name` a texto, para pasarle el árbol a ProLayout. */
export function buildMenuTree(nodes: MenuNode[], t: TFunction): MenuNode[] {
  return nodes.map((node) => ({
    ...node,
    name: t(node.name),
    children: node.children ? buildMenuTree(node.children, t) : undefined,
  }))
}
