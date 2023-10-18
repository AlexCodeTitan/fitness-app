import { FC } from "react";
import {
  SideBarContainer,
  ImageContainer,
  SideBarTitle,
  SideBarHeader,
} from "./SideBar.styles";

import profile from "../../assets/PSX_20230109_223112 (1).jpg";
import UserInfo from "../UserInfo/UserInfo";
import NavComponent from "../NavComponent/NavComponent";
import NavButton from "../NavButton/NavButton";

import SignOutBtn from "../SignOutBtn/SignOutBtn";

const FAKE_DATA = {
  photo: profile,
  name: "Alexandru",
  height: 175,
  weight: 76,
  bf: 14,
};

const SideBar: FC = () => {
  return (
    <SideBarContainer>
      <SideBarHeader>
        <ImageContainer>
          <img src={FAKE_DATA.photo} alt="" />
        </ImageContainer>
        <SideBarTitle>
          <h2>Hello,&nbsp;</h2>
          <h2>{FAKE_DATA.name}</h2>
        </SideBarTitle>
      </SideBarHeader>
      <NavComponent />
      <UserInfo data={FAKE_DATA} />
      <SignOutBtn />
    </SideBarContainer>
  );
};

export default SideBar;
