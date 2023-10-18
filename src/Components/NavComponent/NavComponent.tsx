import { NavButtonsContainer } from "./NavComponent.styles";
import NavButton from "../NavButton/NavButton";

const NavComponent = () => {
  return (
    <NavButtonsContainer>
      <NavButton type="home" />
      <NavButton type="notes" />
      <NavButton type="workout" />
    </NavButtonsContainer>
  );
};

export default NavComponent;
