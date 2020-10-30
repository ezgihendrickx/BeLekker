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
        </div>
      </section>
      <div className="ml-6 mb-5 text-3xl italic leading-2 text-center text-red-800">
        <h2>What's on the Menu Today?</h2>
      </div>
      <div class="items-center justify-center ml-40">
        <img src="../img/landingpagetransparent.png" width="70%"></img>
      </div>
    </div>
  );
}
export default Landingpage;
