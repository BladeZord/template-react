import type { ReactNode, CSSProperties } from 'react'

/** Elemento del menú lateral (puede tener hijos) */
export interface MenuItemConfig {
  key: string
  label: string
  path?: string
  icon?: ReactNode
  children?: MenuItemConfig[]
}

/** Configuración del menú lateral */
export interface MenuConfig {
  items: MenuItemConfig[]
  collapsed?: boolean
  defaultOpenKeys?: string[]
}

/** Configuración del header */
export interface HeaderConfig {
  title: string
  logo?: ReactNode
  showLogo?: boolean
  showUser?: boolean
  userMenu?: {
    label: string
    items: Array<{ key: string; label: string; onClick?: () => void }>
  }
  extra?: ReactNode
  fixed?: boolean
}

/** Configuración del footer */
export interface FooterConfig {
  copyright?: string
  links?: Array<{ key: string; label: string; href?: string }>
  showBuiltWith?: boolean
  extra?: ReactNode
}

/** Configuración del layout principal */
export interface LayoutConfig {
  /** Ancho del sidebar (px) */
  sidebarWidth?: number
  /** Ancho del sidebar colapsado (px) */
  sidebarCollapsedWidth?: number
  /** Breakpoint para modo móvil (px) */
  mobileBreakpoint?: number
  /** Mostrar sidebar por defecto en móvil */
  defaultMobileSidebarOpen?: boolean
  /** Tema: light | dark */
  theme?: 'light' | 'dark'
  /** Estilo del contenido: padding, etc. */
  contentStyle?: CSSProperties
}

/** Configuración global de la aplicación */
export interface AppConfig {
  appName: string
  layout: LayoutConfig
  menu: MenuConfig
  header: HeaderConfig
  footer: FooterConfig
}
