import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopUp,
} from "../../firebase/firebase";
import FormInput from "../../Components/FormInput/FormInput";
import { useDispatch } from "react-redux";
import { AppUser, setUser } from "../../redux/userSlice";
import {
  AuthForm,
  ButtonsWrapper,
  LoginContainer,
  LoginTitle,
} from "./Login.styles";
import Button from "../../Components/CustomButton/Button";

type FormFields = {
  email: string;
  password: string;
};

const defaultFormFields: FormFields = {
  email: "",
  password: "",
};

type LoginPropTypes = {
  setSignUpScreen: (value: boolean) => void;
};

const Login: React.FC<LoginPropTypes> = ({ setSignUpScreen }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const loginWithGoogle = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAuth(user);

    if (user) {
      console.log(user);
      // Extract and shape the response into AppUser format
      const userData: AppUser = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        // Add any other fields you might need
      };
      dispatch(setUser(userData));
      navigate("/home");
    }
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      console.log(response);

      if (response) {
        console.log(response);
        // Extract and shape the response into AppUser format
        const userData: AppUser = {
          uid: response.uid,
          email: response.email,
          displayName: response.displayName,
          // Add any other fields you might need
        };

        dispatch(setUser(userData));
        navigate("/");
        resetFormFields();
      }
    } catch (error: any) {
      switch (error.code) {
        case "auth/invalid-login-credentials":
          alert("Invalid login credentials");
          break;
        default:
          console.log(error);
      }

      console.log(error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const { name, value } = event.target;

    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  return (
    <LoginContainer>
      <LoginTitle>
        <h1>Welcome to your journey</h1>
        <h2>Login or Sign up below</h2>
      </LoginTitle>
      <AuthForm onSubmit={handleLogin}>
        <FormInput
          type="email"
          required
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          type="password"
          required
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
        />
        <ButtonsWrapper>
          <Button type="submit" size="xl">
            Login
          </Button>
          <Button
            type="button"
            size="xl"
            customType="secondary"
            onClick={() => setSignUpScreen(true)}
          >
            Sign Up
          </Button>
        </ButtonsWrapper>
      </AuthForm>
      <Button type="button" customType="google" onClick={loginWithGoogle}>
        Login with Google
      </Button>
    </LoginContainer>
  );
};

export default Login;
