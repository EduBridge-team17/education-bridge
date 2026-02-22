import React from 'react'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <>
        <nav className='nav-bar m-4 flex gap-4 text-primary-700'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/signup'>Sign Up</NavLink>
        </nav>
        
    </>
    
  )
}

export default NavBar
