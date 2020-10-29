import React, { useState, useRef, useEffect } from "react";
import Login from "./Login";
import Register from "./Register";

function Main() {
  return (
    <main
      class="h-screen place-content-center"
      style={{
        //backgroundImage: `url(https://i1.wp.com/blog.hellofresh.com/wp-content/uploads/2017/03/cookingtogether.jpg?ssl=1)`,
        //backgroundImage: `url(${cooktogether})`,
        backgroundImage: `url(img/cooktogether.png)`,
        backgroundSize: `100%`,
      }}
    >
      <Login />
      <Register />
    </main>
  );
}

export default Main;
