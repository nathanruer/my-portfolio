import React from 'react'

import dynamic from 'next/dynamic';

const ThemeButton = dynamic(() => import("./ThemeButton"), {ssr: false})

const Navbar = () => {
  return (
    <ThemeButton />
  )
}

export default Navbar;