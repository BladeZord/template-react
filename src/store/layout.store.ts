import { create } from 'zustand'
import { persist } from 'zustand/middleware'

/**
 * 'side': sidebar vertical clásico (equivalente al "vertical" del Angular original).
 * 'top': todo el menú arriba, sin sidebar (equivalente a su "horizontal").
 * 'mix': primer nivel arriba, submenú del item activo en un panel lateral.
 */
export type MenuLayout = 'side' | 'top' | 'mix'

interface LayoutState {
  collapsed: boolean
  setCollapsed: (collapsed: boolean) => void
  layout: MenuLayout
  setLayout: (layout: MenuLayout) => void
}

/** Recuerda las preferencias de layout del usuario (sidebar colapsado, side/top/mix) entre sesiones. */
export const useLayoutStore = create<LayoutState>()(
  persist(
    (set) => ({
      collapsed: false,
      setCollapsed: (collapsed) => set({ collapsed }),
      layout: 'side',
      setLayout: (layout) => set({ layout }),
    }),
    { name: 'template-react-layout' }
  )
)
