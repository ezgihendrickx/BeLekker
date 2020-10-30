import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Landingpage from "./Landingpage";

function Main() {
  //STATE
  const [authToken, setAuthToken] = useState("");
  const [page, setPage] = useState("login"); //when you open the browser it will be first page

  //FUNCTIONS
  const saveAuthToken = (token) => {
    setAuthToken(token);
  };

  //RENDER JSX
  //We have State and default state as Login
  //This function below here is saying if my state login I will call the login component.
  //In our Login page We have the "don't have an account yet button, if I click on it calls the function which changes the state page to the register page.
  //And then function below calls the register component.

  return (
    <main className="place-content-center bg-cook-together h-screen bg-no-repeat bg-cover">
      {page === "login" ? (
        <Login saveAuthToken={saveAuthToken} setPage={setPage} />
      ) : page === "register" ? (
        <Register setPage={setPage} />
      ) : (
        <Landingpage setPage={setPage} />
      )}
    </main>
  );
}

export default Main;
