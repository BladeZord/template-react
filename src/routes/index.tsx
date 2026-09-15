import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from '@/components/layout'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { menuData } from '@/config/menu.config'
import type { MenuNode } from '@/config/menu.config'
import { pageComponents } from './routes.config'

/** Recolecta todos los `path` presentes en el árbol de menú (en cualquier nivel). */
function collectPaths(nodes: MenuNode[]): string[] {
  return nodes.flatMap((node) => [
    ...(node.path ? [node.path] : []),
    ...(node.children ? collectPaths(node.children) : []),
  ])
}

const paths = collectPaths(menuData)

// Falla rápido en desarrollo/build si el menú y el mapa de componentes se
// desincronizan, en vez de dejar una ruta "fantasma" que caiga en el 404.
const missing = paths.filter((path) => !pageComponents[path])
if (missing.length > 0) {
  throw new Error(
    `Faltan componentes para las rutas del menú: ${missing.join(', ')}. ` +
      'Regístralas en src/routes/routes.config.tsx.'
  )
}

const children = paths.map((path) => {
  const Component = pageComponents[path]
  return path === '/'
    ? { index: true as const, element: <Component /> }
    : { path: path.replace(/^\//, ''), element: <Component /> }
})

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [...children, { path: '*', element: <NotFoundPage /> }],
  },
])
