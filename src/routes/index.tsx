import { createBrowserRouter, Navigate } from 'react-router-dom'
import { AppLayout } from '@/components/layout'
import { routesConfig } from './routes.config'
import type { RouteItemConfig, RouteData } from './types'

function buildRoute(config: RouteItemConfig) {
  const { component: Component, data, ...rest } = config
  const route: {
    index?: boolean
    path?: string
    element: JSX.Element
    handle?: RouteData
  } = {
    ...rest,
    element: <Component />,
  }
  if (data) route.handle = data
  return route
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      ...routesConfig.map(buildRoute),
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
])
