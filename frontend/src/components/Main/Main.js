import React, { useState, useRef, useEffect } from 'react';
import Login from './Login';
import Register from './Register';

function Main() {
  //STATE
  const [authToken, setAuthToken] = useState('');

  //RENDER
  return (
    <main
      className='place-content-center h-screen'
      style={{
        backgroundImage: `url(img/cooktogether.png)`,
        backgroundSize: `100%`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Login />
      <Register />
    </main>
  );
}

export default Main;
