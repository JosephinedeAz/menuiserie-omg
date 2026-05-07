'use client'
import { createContext, useContext, useState } from 'react'

const MenuContext = createContext<{
  isMenuOpen: boolean
  setIsMenuOpen: (v: boolean) => void
}>({ isMenuOpen: false, setIsMenuOpen: () => {} })

export function MenuProvider({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </MenuContext.Provider>
  )
}

export function useMenu() { return useContext(MenuContext) }
