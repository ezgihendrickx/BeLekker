import React, { useState, useRef, useEffect } from 'react';
import Login from './Login';
import Register from './Register';

function Main() {
  //STATE
  const [authToken, setAuthToken] = useState('');

  //RENDER JSX
  return (
    <main className='place-content-center bg-cook-together h-screen bg-no-repeat bg-cover'>
      <Login />
      {/* <Register /> */}
    </main>
  );
}

export default Main;
