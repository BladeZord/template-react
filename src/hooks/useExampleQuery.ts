import { useQuery } from '@tanstack/react-query'

export interface ExampleStat {
  label: string
  value: number
}

/**
 * Simula una llamada a API (reemplázala por un `fetch` real).
 * Se deja como ejemplo de la forma esperada: una función async
 * que retorna los datos ya tipados.
 */
async function fetchExampleStats(): Promise<ExampleStat[]> {
  await new Promise((resolve) => setTimeout(resolve, 600))
  return [
    { label: 'Usuarios activos', value: 1240 },
    { label: 'Sesiones hoy', value: 356 },
    { label: 'Tasa de conversión', value: 3.2 },
  ]
}

/**
 * Ejemplo de hook con React Query. Patrón a seguir para nuevos
 * endpoints: una queryKey descriptiva + la función fetcher.
 */
export function useExampleQuery() {
  return useQuery({
    queryKey: ['example-stats'],
    queryFn: fetchExampleStats,
  })
}
