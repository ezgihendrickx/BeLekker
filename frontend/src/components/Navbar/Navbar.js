import React, { useState, useRef, useEffect } from "react";

function Navbar() {
  return (
    <div className="Navbar">
      <nav class="bg-red-800 relative flex items-center justify-between h-16">
        <div class="logo">
          <img class="h-12 w-auto ml-5" src="/img/logo.png" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
