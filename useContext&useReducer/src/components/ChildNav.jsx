import React from 'react'
import { useMenuToggleContext } from '../context/MenuContext'
import ChildButton from './ChildButton'
export default function ChildNav() {
  const { isMenuOpen } = useMenuToggleContext()
  return (
    <div>
      <h1>
        ChildNav
      </h1>
      <ChildButton />
    </div>
  )
}
