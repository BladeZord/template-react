import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import type { BreadcrumbLevel } from '@/routes/types'

export interface AppBreadcrumbProps {
  /** Niveles del breadcrumb (soporta N niveles). Sin path = nivel actual (no enlace). */
  urls: BreadcrumbLevel[]
}

export function AppBreadcrumb({ urls }: AppBreadcrumbProps) {
  if (!urls?.length) return null

  const items = urls.map((level, index) => {
    const isLast = index === urls.length - 1
    const href = level.path && !isLast ? level.path : undefined
    return {
      title: href ? <Link to={href}>{level.title}</Link> : level.title,
    }
  })

  return <Breadcrumb items={items} style={{ marginBottom: 16 }} />
}
