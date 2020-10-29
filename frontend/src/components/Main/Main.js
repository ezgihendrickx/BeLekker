import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

function Main() {
  //STATE
  const [authToken, setAuthToken] = useState('');

  //FUNCTIONS
  const saveAuthToken = (token) => {
    setAuthToken(token);
  };

  //RENDER JSX
  return (
    <main className='place-content-center bg-cook-together h-screen bg-no-repeat bg-cover'>
      <Login saveAuthToken={saveAuthToken} />
      <Register />
    </main>
  );
}

export default Main;
