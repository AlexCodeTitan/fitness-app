import { NavButtonsContainer } from "./NavComponent.styles";
import NavButton from "../NavButton/NavButton";

const NavComponent = () => {
  return (
    <NavButtonsContainer>
      <NavButton type="dashboard" />
      <NavButton type="notes" />
      <NavButton type="workout" />
    </NavButtonsContainer>
  );
};

export default NavComponent;
