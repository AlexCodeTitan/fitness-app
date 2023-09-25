import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createTestUserDocument,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../firebase/firebase";
import FormInput from "../../Components/FormInput/FormInput";
import { useDispatch } from "react-redux";
import { AppUser, setUser } from "../../redux/userSlice";
import { SignUpContainer, SignUpRightContainer } from "./SignUp.styles";
import { AuthForm, ButtonsWrapper } from "../Login/Login.styles";
import Button from "../../Components/CustomButton/Button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

type FormFields = {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const defaultFormFields: FormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

type SignUpPropTypes = {
  setSignUpScreen: (value: boolean) => void;
};

const SignUp: React.FC<SignUpPropTypes> = ({ setSignUpScreen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user }: any = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      // await createUserDocumentFromAuth(user, { displayName });
      await createTestUserDocument(user, { displayName });

      console.log(user);

      if (user) {
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
          navigate("/");
          resetFormFields();
        }
      }
      // dispatch(setUser(user));
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        alert("A user with this email already exists");
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
    <SignUpContainer>
      <h1>Please Sign Up here</h1>
      <AuthForm onSubmit={handleSignUp}>
        <FormInput
          placeholder="Display Name"
          type="text"
          required
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />

        <FormInput
          placeholder="Email"
          type="email"
          required
          name="email"
          value={email}
          onChange={handleChange}
        />

        <FormInput
          placeholder="Password"
          type="password"
          required
          name="password"
          value={password}
          onChange={handleChange}
        />

        <FormInput
          placeholder="Confirm Password"
          type="password"
          required
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
        <ButtonsWrapper>
          <Button type="submit" size="xl">
            Sign Up
          </Button>
          <Button
            type="button"
            size="xl"
            customType="secondary"
            onClick={() => setSignUpScreen(false)}
          >
            Back
          </Button>
        </ButtonsWrapper>
      </AuthForm>
    </SignUpContainer>
  );
};

export default SignUp;
