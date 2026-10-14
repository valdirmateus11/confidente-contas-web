import { createContext, useContext } from 'react'

export interface RouterContextType {
  currentPath: string
  navigate: (to: string, options?: { replace?: boolean; scroll?: boolean }) => void
}

export const RouterContext = createContext<RouterContextType>({
  currentPath: '/',
  navigate: () => {},
})

export function useRouter() {
  const context = useContext(RouterContext)
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider')
  }
  return context
}
