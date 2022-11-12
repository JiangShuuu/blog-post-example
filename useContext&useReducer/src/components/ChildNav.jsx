import React from 'react'
import { useColorToggleContext } from '../context/ColorContext'
import ChildButton from './ChildButton'
export default function ChildNav() {
  const { colorChange } = useColorToggleContext()

  const color = colorChange ? { color: 'red' } : { color: 'blue' }

  return (
    <div>
      <h1 style={color}>
        ChildNav
      </h1>
      <ChildButton />
    </div>
  )
}
