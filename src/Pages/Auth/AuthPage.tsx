import { useState } from "react";
import {
  AuthContainer,
  AuthWrapper,
  LogoCircle,
  LogoContainer,
} from "./AuthPage.styles";
import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";
import logo from "../../assets/bodybuilder.svg";

const AuthPage = () => {
  const [signUpScreen, setSignUpScreen] = useState(false);

  return (
    <AuthWrapper>
      <AuthContainer $isSignUp={signUpScreen}>
        {!signUpScreen ? (
          <Login setSignUpScreen={setSignUpScreen} />
        ) : (
          <SignUp setSignUpScreen={setSignUpScreen} />
        )}
      </AuthContainer>
      <LogoContainer
        $isSignUp={signUpScreen}
        key={signUpScreen ? "signed-up" : "not-signed-up"}
      >
        <img src={logo} alt="" />
        <LogoCircle />
      </LogoContainer>
    </AuthWrapper>
  );
};

export default AuthPage;
