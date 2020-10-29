import React, { useState } from 'react';
import axios from 'axios';

// COMPONENT
function Login({ saveAuthToken }) {
  //FUNCTIONS
  const loginUser = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    e.target.password.value = '';

    //API LOGIN
    axios
      .post('http://localhost:3000/api/user/login', {
        email: email,
        password: password,
      })
      .then(function (response) {
        if (response.data.token) {
          console.log(response.data.message);
          saveAuthToken(response.data.token);
        } else {
          console.log(response.data);
          saveAuthToken('');
        }
      })
      .catch(function (error) {
        console.log(error);
        saveAuthToken('');
      });
  };

  //RENDER JSX
  return (
    <div className='bg-gray-50 sm:px-6 lg:px-8 flex items-center justify-center min-h-screen px-4 py-12'>
      <div className='w-full max-w-md'>
        <div>
          <h1 className='mt-6 text-5xl font-extrabold leading-9 text-center text-red-800'>
            BeLekker
          </h1>
          <h2 className='mt-6 text-3xl font-extrabold leading-9 text-center text-gray-900'>
            Cooking Together App
          </h2>
        </div>
        <form className='mt-8' action='' onSubmit={loginUser}>
          <input type='hidden' name='remember' value='true' />
          <div className='rounded-md shadow-sm'>
            <div>
              <input
                aria-label='Email address'
                name='email'
                type='email'
                className='rounded-t-md focus:outline-none focus:shadow-outline-red focus:border-red-300 focus:z-10 sm:text-sm sm:leading-5 relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none'
                placeholder='Email address'
                required
              />
            </div>
            <div className='mt-5'>
              <input
                aria-label='Password'
                name='password'
                type='password'
                className='rounded-b-md focus:outline-none focus:shadow-outline-red focus:border-red-300 focus:z-10 sm:text-sm sm:leading-5 relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none'
                placeholder='Password'
                required
              />
            </div>
          </div>

          <div className='flex items-center justify-between mt-6'>
            <div className='flex items-center'>
              <input
                id='remember_me'
                type='checkbox'
                className='form-checkbox w-4 h-4 text-indigo-600 transition duration-150 ease-in-out'
              />
              <label
                htmlFor='remember_me'
                className='block ml-2 text-sm leading-5 text-gray-900'
              >
                Remember me
              </label>
            </div>

            <div className='text-sm leading-5'>
              <a
                href='#'
                className='hover:text-red-600 focus:outline-none focus:underline font-medium text-red-800 transition duration-150 ease-in-out'
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div className='mt-6'>
            <button
              type='submit'
              name='submit'
              className='group hover:bg-red-600 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700 relative flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-red-800 border border-transparent rounded-md'
            >
              <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                <svg
                  className='group-hover:text-red-400 w-5 h-5 text-red-300 transition duration-150 ease-in-out'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
                    clipRule='evenodd'
                  />
                </svg>
              </span>
              LOGIN
            </button>
          </div>
        </form>
        <div className='flex items-center justify-center mt-16 text-sm leading-5'>
          <footer className='hover:text-red-600 focus:outline-none focus:underline font-medium text-gray-900 transition duration-150 ease-in-out cursor-pointer'>
            Don't have an account <strong>Sign Up</strong>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Login;
