import { ConfigProvider, theme as antTheme } from 'antd'
import esES from 'antd/locale/es_ES'
import enUS from 'antd/locale/en_US'
import { useTranslation } from 'react-i18next'
import { QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { queryClient } from '@/lib/queryClient'
import { router } from '@/routes'
import { useThemeStore } from '@/store/theme.store'

const antdLocales = { es: esES, en: enUS }

/**
 * Punto único donde se combinan: idioma de AntD, algorithm de tema
 * (claro/oscuro) y color primario — todo reactivo a los stores de Zustand
 * y a i18next. Separado de main.tsx porque necesita hooks de React.
 */
export function AppProviders() {
  const { i18n } = useTranslation()
  const { mode, primaryColor } = useThemeStore()

  const algorithm = mode === 'dark' ? antTheme.darkAlgorithm : antTheme.defaultAlgorithm
  const locale = antdLocales[i18n.language.startsWith('en') ? 'en' : 'es']

  return (
    <ConfigProvider
      locale={locale}
      theme={{ algorithm, token: { colorPrimary: primaryColor } }}
    >
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ConfigProvider>
  )
}
