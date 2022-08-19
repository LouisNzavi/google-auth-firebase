import React from "react";
import { signInWithGoogle } from "../Firebase";
import GoogleButton from "react-google-button";

//signinwith google function on button, which shows google sign in pop up
//use localstorage to display user data: name/email
function Home() {
  return (
    <div>
      <GoogleButton onClick={signInWithGoogle}>
        Sign in with Google
      </GoogleButton>
      <h1>{localStorage.getItem("name")} </h1>
      <h1>{localStorage.getItem("email")} </h1>
    </div>
  );
}

export default Home;
