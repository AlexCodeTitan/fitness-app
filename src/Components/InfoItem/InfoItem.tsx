import {
  FaRulerVertical,
  FaWeightScale,
  FaPercent,
  FaPen,
} from "react-icons/fa6";
import { InfoItemWrapper } from "./InfoItem.styles";

type InfoItemProps = {
  title: string;
  data: number;
};

const InfoItem = ({ title, data }: InfoItemProps) => {
  return (
    <InfoItemWrapper>
      <span>
        {title === "Height" ? (
          <FaRulerVertical />
        ) : title === "Weight" ? (
          <FaWeightScale />
        ) : (
          <FaPercent />
        )}
      </span>
      <p>{title}:</p>
      <p>
        {data}{" "}
        {title.toLocaleLowerCase() === "height"
          ? "cm"
          : title.toLocaleLowerCase() === "weight"
          ? "kg"
          : "%"}
      </p>
      <span>
        <FaPen />
      </span>
    </InfoItemWrapper>
  );
};

export default InfoItem;
