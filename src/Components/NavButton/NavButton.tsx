import { Link } from "react-router-dom";
import { IconContainer, NavButtonContainer } from "./NavButton.styles";

import {
  FaHouse,
  FaNoteSticky,
  FaDumbbell,
  FaArrowRightFromBracket,
} from "react-icons/fa6";

type NavButtonProps = {
  type: string;
};

const NavButton = ({ type }: NavButtonProps) => {
  return (
    <NavButtonContainer as={Link} to={`/${type === "signout" ? "" : type}`}>
      <IconContainer>
        {type === "home" ? (
          <FaHouse size={25} />
        ) : type === "notes" ? (
          <FaNoteSticky size={25} />
        ) : type === "workout" ? (
          <FaDumbbell size={25} />
        ) : (
          <FaArrowRightFromBracket size={25} />
        )}
      </IconContainer>
      <p>{type.split("")[0].toUpperCase() + type.slice(1).toLowerCase()}</p>
    </NavButtonContainer>
  );
};

export default NavButton;
