import { useState } from "react";
import { Link } from "react-router-dom";
import {
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopUp,
} from "../../firebase/firebase";
import FormInput from "../../Components/FormInput/FormInput";
import { useDispatch } from "react-redux";
import { AppUser, selectUser, setUser } from "../../redux/userSlice";
import { useSelector } from "react-redux";
import {
  ButtonsWrapper,
  LoginContainer,
  LoginForm,
  LoginLeftContainer,
  LoginTitle,
  LoginWrapper,
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

const Login: React.FC = () => {
  const dispatch = useDispatch();
  // const newUser = useSelector(selectUser);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const loginWithGoogle = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAuth(user);
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
    <LoginWrapper>
      {/* {newUser && <h1>{newUser.displayName}</h1>} */}
      <LoginLeftContainer>
        <LoginContainer>
          <LoginTitle>
            <h1>Welcome to your journey</h1>
            <h2>Login or Sign up below</h2>
          </LoginTitle>
          <LoginForm onSubmit={handleLogin}>
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
              <Button type="submit" width="xl">
                Login
              </Button>
              <Button type="button" width="xl">
                <Link to="/signup">Sign Up</Link>
              </Button>
            </ButtonsWrapper>
          </LoginForm>
          <Button type="button" customType="google" onClick={loginWithGoogle}>
            Login with Google
          </Button>
        </LoginContainer>
      </LoginLeftContainer>
    </LoginWrapper>
  );
};

export default Login;
