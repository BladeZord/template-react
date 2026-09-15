import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface LayoutState {
  collapsed: boolean
  setCollapsed: (collapsed: boolean) => void
}

/** Recuerda si el usuario prefiere el sidebar colapsado entre sesiones. */
export const useLayoutStore = create<LayoutState>()(
  persist(
    (set) => ({
      collapsed: false,
      setCollapsed: (collapsed) => set({ collapsed }),
    }),
    { name: 'template-react-layout' }
  )
)
