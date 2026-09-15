import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type ThemeMode = 'light' | 'dark'

interface ThemeState {
  mode: ThemeMode
  primaryColor: string
  setMode: (mode: ThemeMode) => void
  toggleMode: () => void
  setPrimaryColor: (color: string) => void
}

/**
 * Estado global del tema. Persistido en localStorage bajo la key
 * "template-react-theme", así el usuario conserva su elección entre sesiones.
 * Para agregar más ajustes de apariencia (radio de bordes, compacto, etc.),
 * añádelos aquí y consúmelos donde se construye el `theme` de ConfigProvider.
 */
export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      mode: 'light',
      primaryColor: '#1677ff', // azul por defecto de Ant Design
      setMode: (mode) => set({ mode }),
      toggleMode: () => set({ mode: get().mode === 'light' ? 'dark' : 'light' }),
      setPrimaryColor: (primaryColor) => set({ primaryColor }),
    }),
    { name: 'template-react-theme' }
  )
)
