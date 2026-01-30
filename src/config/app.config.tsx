import type { AppConfig } from './types'
import {
  HomeOutlined,
  SettingOutlined,
  FileTextOutlined,
  DashboardOutlined,
} from '@ant-design/icons'

export const appConfig: AppConfig = {
  appName: 'Template React',

  layout: {
    sidebarWidth: 256,
    sidebarCollapsedWidth: 80,
    mobileBreakpoint: 768,
    defaultMobileSidebarOpen: false,
    theme: 'light',
    contentStyle: { padding: 24, minHeight: 360 },
  },

  menu: {
    collapsed: false,
    defaultOpenKeys: ['sub1'],
    items: [
      {
        key: 'home',
        label: 'Inicio',
        path: '/',
        icon: <HomeOutlined />,
      },
      {
        key: 'dashboard',
        label: 'Dashboard',
        path: '/dashboard',
        icon: <DashboardOutlined />,
      },
      {
        key: 'sub1',
        label: 'Contenido',
        icon: <FileTextOutlined />,
        children: [
          { key: 'page1', label: 'Página 1', path: '/page1', children: [{ key: 'page1-1', label: 'Página 1.1', path: '/page1-1' }, { key: 'page1-2', label: 'Página 1.2', path: '/page1-2' }] },
          { key: 'page2', label: 'Página 2', path: '/page2' },
        ],
      },
      {
        key: 'settings',
        label: 'Configuración',
        path: '/settings',
        icon: <SettingOutlined />,
      },
    ],
  },

  header: {
    title: 'Template React',
    showLogo: true,
    logo: <img src="/vite.svg" alt="Logo" style={{ height: 28 }} />,
    showUser: true,
    fixed: true,
    userMenu: {
      label: 'Usuario',
      items: [
        { key: 'profile', label: 'Mi perfil' },
        { key: 'settings', label: 'Configuración' },
        { key: 'logout', label: 'Cerrar sesión' },
      ],
    },
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} Template React. Todos los derechos reservados.`,
    showBuiltWith: true,
    links: [
      { key: 'privacy', label: 'Privacidad', href: '#' },
      { key: 'terms', label: 'Términos', href: '#' },
      { key: 'help', label: 'Ayuda', href: '#' },
    ],
  },
}
