// import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { signIn } from "./../redux/userSlice";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopUp,
} from "../firebase/firebase";

const Login = () => {
  // const dispatch = useDispatch();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={logGoogleUser}>Google</button>
    </div>
  );
};

export default Login;
