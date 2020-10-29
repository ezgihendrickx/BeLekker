import React, { useState, useRef, useEffect } from "react";

function Register() {
  //RENDER JSX
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div>
          <h1 className="mt-6 text-center text-5xl leading-9 font-extrabold text-red-800">
            BeLekker
          </h1>
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Cooking Together App
          </h2>
        </div>
        <form className="mt-8" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm">
            <div className="grid grid-cols-2  ">
              <div>
                <input
                  aria-label="First Name"
                  name="firstname"
                  type="firstname"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-red focus:border-red-300 focus:z-10 sm:text-sm sm:leading-5"
                  placeholder="First Name"
                />
              </div>
              <div className="ml-3">
                <input
                  aria-label="Last Name"
                  name="lastname"
                  type="lastname"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-red focus:border-red-300 focus:z-10 sm:text-sm sm:leading-5"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="mt-5">
              <input
                aria-label="Password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-red focus:border-red-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Password"
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-red focus:border-red-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Password"
              />
            </div>
            <div className="mt-5">
              <input
                placeholder="Repeat Password"
                aria-label="repeatpassword"
                name="repeatpassword"
                type="repeatpassword"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-red focus:border-red-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Repeat Password"
              />
            </div>
            <div className="mt-5">
              <input
                placeholder="Date of Birth"
                aria-label="dob"
                name="dob"
                type="dob"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-red focus:border-red-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Date of Birth"
              />
            </div>

            <div className="mt-5">
              <input
                aria-label="Email Address"
                name="email"
                type="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-red focus:border-red-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Email Address"
              />
            </div>
            <div className="mt-5">
              <input
                aria-label="Repeat Email Address"
                name="repeatemail"
                type="repeatemail"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-red focus:border-red-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Repeat Email Address"
              />
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div className="text-sm leading-5">
              <a
                href="#"
                className="font-medium text-red-800 hover:text-red-600 focus:outline-none focus:underline transition ease-in-out duration-150"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div class="mt-6">
            <button
              type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-red-800 hover:bg-red-600 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700 transition duration-150 ease-in-out"
            >
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  class="h-5 w-5 text-red-300 group-hover:text-red-400 transition ease-in-out duration-150"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              REGISTER
            </button>
          </div>
        </form>
        <div className="text-sm leading-5 mt-10 flex items-center justify-center">
          <footer className="cursor-pointer font-medium text-gray-900 hover:text-red-600 focus:outline-none focus:underline transition ease-in-out duration-150">
            Already have an account <strong>Login</strong>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Register;
