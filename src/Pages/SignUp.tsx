import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../firebase/firebase";
import FormInput from "../Components/FormInput/FormInput";
import { useDispatch } from "react-redux";
import { selectUser, setUser } from "../redux/userSlice";
import { useSelector } from "react-redux";

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

const SignUp = () => {
  const dispatch = useDispatch();
  const newUser = useSelector(selectUser);
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
      dispatch(setUser(user));
      console.log(user);

      console.log(newUser);

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
      alert("User created");
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
    <div>
      <h1>Sign up with email & password</h1>
      <form onSubmit={handleSignUp}>
        <FormInput
          label="Display Name"
          type="text"
          required
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />

        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          value={password}
          onChange={handleChange}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
