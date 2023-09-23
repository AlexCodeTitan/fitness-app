import {
  createUserDocumentFromAuth,
  signInWithGooglePopUp,
} from "../firebase/firebase";

const Login = () => {
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
