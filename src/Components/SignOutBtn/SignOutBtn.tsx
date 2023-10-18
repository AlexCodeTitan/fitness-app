import NavButton from "../NavButton/NavButton";

import { useDispatch } from "react-redux";
import { signOutUser } from "../../firebase/firebase";
import { signOut } from "../../redux/userSlice";
import { SignOutWrapper } from "./SignOutBtn.styles";
import { useNavigate } from "react-router-dom";

const SignOutBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOutUser();
    dispatch(signOut());
    navigate("/auth");
  };

  return (
    <SignOutWrapper onClick={handleSignOut}>
      <NavButton type="signout" />
    </SignOutWrapper>
  );
};

export default SignOutBtn;
