import { FC } from "react";
import {
  SideBarContainer,
  ImageContainer,
  SideBarTitle,
  InfoContainer,
  InfoItem,
} from "./SideBar.styles";

import { LuPencilRuler, LuPencil } from "react-icons/lu";

import profile from "../../assets/PSX_20230109_223112 (1).jpg";

const FAKE_DATA = {
  photo: profile,
  name: "Alexandru",
  height: 1.75,
  weight: 76,
  bf: 14,
  type: "metric",
};

const SideBar: FC = () => {
  return (
    <SideBarContainer>
      <ImageContainer>
        <img src={FAKE_DATA.photo} alt="" />
      </ImageContainer>
      <SideBarTitle>
        <h2>Hello,&nbsp;</h2>
        <h2>{FAKE_DATA.name}</h2>
      </SideBarTitle>
      <InfoContainer>
        <InfoItem>
          <span>
            <LuPencilRuler />
          </span>
          <p>Height:</p>
          <p>175 {FAKE_DATA.type === "metric" ? "cm" : ""} </p>
          <span>
            <LuPencil />
          </span>
        </InfoItem>
        <InfoItem>
          <span>
            <LuPencilRuler />
          </span>
          <p>Weight:</p>
          <p>76 {FAKE_DATA.type === "metric" ? "kg" : "lbs"} </p>
          <span>
            <LuPencil />
          </span>
        </InfoItem>
        <InfoItem>
          <span>
            <LuPencilRuler />
          </span>
          <p>Body Fat:</p>
          <p>175 {FAKE_DATA.type === "metric" ? "cm" : ""} </p>
          <span>
            <LuPencil />
          </span>
        </InfoItem>
      </InfoContainer>
    </SideBarContainer>
  );
};

export default SideBar;
