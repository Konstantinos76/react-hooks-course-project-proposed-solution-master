import React, { useState } from 'react'

export default function useHover() {
  const [hovering, setHovering] = useState(false);

  const mouseOver = () => setHovering(true)
  const mouseOut = () => setHovering(false)

  const attrs = {
    onMouseOver: mouseOver,
    onMouseOut: mouseOut
  }

  return [hovering, attrs]
}