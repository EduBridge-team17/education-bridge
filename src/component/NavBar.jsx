import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  const navLinkClass = ({ isActive }) => 
    isActive 
      ? 'px-4 py-2  rounded font-semibold border-b-2 border-primary-800' 
      : 'px-4 py-2 text-primary-700 hover:text-primary-800 transition-colors duration-200'

  return (
    <>
      <nav className='nav-bar m-4 flex gap-4'>
        <NavLink to='/' className={navLinkClass}>
          Home
        </NavLink>
        <NavLink to='/login' className={navLinkClass}>
          Login
        </NavLink>
        <NavLink to='/signup' className={navLinkClass}>
          Sign Up
        </NavLink>
      </nav>
    </>
  )
}

export default NavBar
