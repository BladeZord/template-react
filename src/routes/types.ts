import type { ComponentType } from 'react'

/** Nivel del breadcrumb (soporta N niveles) */
export interface BreadcrumbLevel {
  title: string
  path?: string
}

/** Datos de ruta: título de la vista y breadcrumb vinculado al router */
export interface RouteData {
  title: string
  urls: BreadcrumbLevel[]
}

/** Definición de ruta por módulo. Cada módulo define path, data y component. */
export interface RouteItemConfig {
  index?: boolean
  path?: string
  data?: RouteData
  component: ComponentType
}
