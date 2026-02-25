import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from './NavBar';
const Header = () => {
  return (
    <>
      <header className='flex items-center justify-between p-4 text-primary-2000'>
        <div className='logo'>hero</div>
        <NavBar />
      </header>
    </>
  );
};

export default Header;
