import React, { useState } from 'react';
import axios from 'axios';

//COMPONENT
function Register() {
  //FUNCTIONS
  const registerUser = (e) => {
    e.preventDefault();
    const [
      first_name,
      last_name,
      password,
      repeat_password,
      dob,
      email,
      repeat_email,
    ] = [
      e.target.first_name.value,
      e.target.last_name.value,
      e.target.password.value,
      e.target.repeat_password.value,
      e.target.dob.value,
      e.target.email.value,
      e.target.repeat_email.value,
    ];

    //API REGISTER
    axios
      .post('http://localhost:3000/api/user/register', {
        first_name: first_name,
        last_name: last_name,
        password: password,
        repeat_password: repeat_password,
        dob: dob,
        email: email,
        repeat_email: repeat_email,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
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
        <form className='mt-8' action='' onSubmit={registerUser}>
          <input type='hidden' name='remember' value='true' />
          <div className='rounded-md shadow-sm'>
            <div className=' grid grid-cols-2'>
              <div>
                <input
                  name='first_name'
                  type='text'
                  className='rounded-t-md focus:outline-none focus:shadow-outline-red focus:border-red-300 focus:z-10 sm:text-sm sm:leading-5 relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none'
                  placeholder='First Name'
                  aria-label='First Name'
                  required
                />
              </div>
              <div className='ml-3'>
                <input
                  name='last_name'
                  type='text'
                  className='rounded-b-md focus:outline-none focus:shadow-outline-red focus:border-red-300 focus:z-10 sm:text-sm sm:leading-5 relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none'
                  placeholder='Last Name'
                  aria-label='Last Name'
                  required
                />
              </div>
            </div>
            <div className='mt-5'>
              <input
                name='password'
                type='password'
                className='rounded-b-md focus:outline-none focus:shadow-outline-red focus:border-red-300 focus:z-10 sm:text-sm sm:leading-5 relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none'
                placeholder='Password'
                aria-label='Password'
                required
              />
            </div>
            <div className='mt-5'>
              <input
                name='repeat_password'
                type='password'
                className='rounded-b-md focus:outline-none focus:shadow-outline-red focus:border-red-300 focus:z-10 sm:text-sm sm:leading-5 relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none'
                placeholder='Repeat Password'
                aria-label='Repeat Password'
                required
              />
            </div>
            <div className='mt-5'>
              <input
                name='dob'
                type='date'
                className='rounded-b-md focus:outline-none focus:shadow-outline-red focus:border-red-300 focus:z-10 sm:text-sm sm:leading-5 relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none'
                placeholder='Date of Birth'
                aria-label='Date of Birth'
                required
              />
            </div>

            <div className='mt-5'>
              <input
                name='email'
                type='email'
                className='rounded-t-md focus:outline-none focus:shadow-outline-red focus:border-red-300 focus:z-10 sm:text-sm sm:leading-5 relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none'
                placeholder='Email Address'
                aria-label='Email Address'
                required
              />
            </div>
            <div className='mt-5'>
              <input
                name='repeat_email'
                type='email'
                className='rounded-t-md focus:outline-none focus:shadow-outline-red focus:border-red-300 focus:z-10 sm:text-sm sm:leading-5 relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none'
                placeholder='Repeat Email Address'
                aria-label='Repeat Email Address'
                required
              />
            </div>
          </div>

          <div className='mt-6'>
            <button
              type='submit'
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
              REGISTER
            </button>
          </div>
        </form>
        <div className='flex items-center justify-center mt-10 text-sm leading-5'>
          <footer className='hover:text-red-600 focus:outline-none focus:underline font-medium text-gray-900 transition duration-150 ease-in-out cursor-pointer'>
            Already have an account <strong>Login</strong>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Register;
