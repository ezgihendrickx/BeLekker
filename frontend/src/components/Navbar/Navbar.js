import React, { useState, useRef, useEffect } from 'react';

function Navbar() {
  return (
    <div className='Navbar'>
      <nav className='relative flex items-center justify-between h-16 bg-red-800'>
        <div className='logo'>
          <img className='w-auto h-12 ml-5' src='/img/logo.png' />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
