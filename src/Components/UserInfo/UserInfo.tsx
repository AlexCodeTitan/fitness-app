import React from "react";
import { InfoContainer } from "./UserInfo.styles";
import InfoItem from "../InfoItem/InfoItem";

type UserInfoProps = {
  data: {
    photo: string;
    name: string;
    height: number;
    weight: number;
    bf: number;
  };
};

const UserInfo = ({ data }: UserInfoProps) => {
  return (
    <InfoContainer>
      <InfoItem title={"Height"} data={data.height} />
      <InfoItem title={"Weight"} data={data.weight} />
      <InfoItem title={"Body Fat"} data={data.bf} />
    </InfoContainer>
  );
};

export default UserInfo;
