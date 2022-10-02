import React from 'react'
import Lists from './Lists'
import Logo from './Logo'
import './Nav.css'
export default function Nav() {
  return (
    <div className='navbar'>
        <Logo/>
        <Lists/>
    </div>
  )
}
