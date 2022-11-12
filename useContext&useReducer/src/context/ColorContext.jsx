import React, { useState, useContext, createContext } from 'react';

export const MenuContexts = createContext()

export const MenuProvider = ({ children }) => {
  const [colorChange, setColorChange] = useState(false)

  const toggleColor = () => {
    setColorChange(!colorChange)
  }

  return (
    <MenuContexts.Provider value={{ colorChange, toggleColor }}>
      {children}
    </MenuContexts.Provider>
  )
}

export const useColorToggleContext = () => useContext(MenuContexts)