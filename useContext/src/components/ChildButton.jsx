import React from 'react'
import { useColorToggleContext } from '../context/ColorContext'

export default function ChildButton() {
  const { toggleColor } = useColorToggleContext()
  return (
    <button onClick={toggleColor}>ChildButton</button>
  )
}
