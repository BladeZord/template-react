import axios from 'axios'

/**
 * Cliente HTTP único para toda la app. Cambia `baseURL` vía la variable
 * de entorno `VITE_API_URL` (ver `.env.example`) — no la hardcodees en
 * los hooks que la consuman.
 */
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? '/api',
  timeout: 15_000,
})

// Adjunta el token de autenticación si existe. Ajusta el origen del token
// (localStorage, un store propio, una cookie, etc.) a tu solución de auth real.
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Normaliza el error para que quien consuma `api` (por ejemplo, un queryFn
// de React Query) siempre reciba un `Error` con mensaje legible.
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error)) {
      const message =
        (error.response?.data as { message?: string } | undefined)?.message ??
        error.message ??
        'Error de red'
      return Promise.reject(new Error(message))
    }
    return Promise.reject(error)
  }
)
