import React, { useState, useRef, useEffect } from "react";

function Landingpage() {
  return (
    <div>
      <section class="bg-gray-dark h-50">
        <div class="container mx-auto">
          <img class="m-5" src="../img/avatar.png" width="70px"></img>
          <input
            class="w-full h-16 px-3 rounded  focus:outline-none focus:shadow-outline text-xl px-8 shadow-lg"
            type="search"
            placeholder="Search for a cooking experience..."
          />
          <nav class="flex">
            <a
              class="no-underline text-white py-3 px-4 font-medium mr-3 bg-gray hover:bg-gray-darker"
              href="#"
            >
              Cardamom
            </a>
            <a
              class="no-underline text-white py-3 px-4 font-medium mx-3 bg-gray-darker hover:bg-gray"
              href="#"
            >
              Cinnamon
            </a>
            <a
              class="no-underline text-white py-3 px-4 font-medium mx-3 bg-gray hover:bg-gray-darker"
              href="#"
            >
              Chamomille
            </a>
            <a
              class="no-underline text-white py-3 px-4 font-medium mx-3 bg-gray-darker hover:bg-gray"
              href="#"
            >
              Apple
            </a>
            <a
              class="no-underline text-white py-3 px-4 font-medium mx-3 bg-gray hover:bg-gray-darker"
              href="#"
            >
              Mint
            </a>
            <a
              class="no-underline text-white py-3 px-4 font-medium mx-3 bg-gray-darker hover:bg-gray"
              href="#"
            >
              Curry
            </a>
            <a
              class="no-underline text-white py-3 px-4 font-medium mx-3 bg-gray hover:bg-gray-darker"
              href="#"
            >
              Fragrance
            </a>
            <a
              class="no-underline text-white py-3 px-4 font-medium ml-auto bg-gray-darker hover:bg-gray"
              href="#"
            ></a>
          </nav>
        </div>
      </section>
      <div className="ml-6 mb-5 text-3xl italic leading-2 text-center text-red-800">
        <h2>What's on the Menu Today?</h2>
      </div>

      <img src="../img/landing.png"></img>
    </div>
  );
}
export default Landingpage;
