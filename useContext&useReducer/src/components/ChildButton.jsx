import React from 'react'
import { useMenuToggleContext } from '../context/MenuContext'

export default function ChildButton() {
  const { setIsMenuOpen } = useMenuToggleContext()
  return (
    <button onClick={setIsMenuOpen}>ChildButton</button>
  )
}
