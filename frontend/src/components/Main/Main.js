import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Landingpage from "./Landingpage";

function Main() {
  //STATE
  const [authToken, setAuthToken] = useState("");
  const [page, setPage] = useState("login");

  //FUNCTIONS
  const saveAuthToken = (token) => {
    setAuthToken(token);
  };

  //RENDER JSX
  return (
    <main className="place-content-center bg-cook-together h-screen bg-no-repeat bg-cover">
      {page === "login" ? (
        <Login saveAuthToken={saveAuthToken} setPage={setPage} />
      ) : (
        <Register setPage={setPage} />
      )}
      <Landingpage />
    </main>
  );
}

export default Main;
