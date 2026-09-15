import { QueryClient } from '@tanstack/react-query'

/**
 * Cliente único de React Query para toda la app.
 * Ajusta los defaults según las necesidades del proyecto real
 * (staleTime más alto para datos que cambian poco, retry, etc.).
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
})
