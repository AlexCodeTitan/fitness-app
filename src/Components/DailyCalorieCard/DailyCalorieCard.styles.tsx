import styled from "styled-components";
import { CardContainer } from "../Card/Card.styles";

type ProgressFillProps = {
  percentage: number;
};

export const DailyCardContainer = styled(CardContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  padding: 20px 30px 30px 30px;
  h2 {
    color: #cfdbd5;
  }
`;

export const DailyCaloriesWrapper = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: space-between;
`;

export const DayGraphContainer = styled.div`
  height: 100%;
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const DayLabel = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  height: 10%;
`;

export const DayProgressBar = styled.div`
  height: 85%;
  width: 20px;
  background-color: #242423;
  border-radius: 10px;
  margin: 0 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`;

export const DayProgressFill = styled.div<ProgressFillProps>`
  height: ${(props) => props.percentage || 50}%;
  background-color: ${(props) =>
    props.percentage < 70 || props.percentage > 110
      ? "#d82626"
      : props.percentage > 90
      ? "#41e23b"
      : "#ffd700"};
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
