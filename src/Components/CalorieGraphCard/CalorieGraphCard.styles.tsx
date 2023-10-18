import styled from "styled-components";
import { CardContainer } from "../Card/Card.styles";

type FillProps = {
  circumference: number;
  offset: number;
};

export const CalorieGraphContainer = styled(CardContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffd666;
  border-radius: 15px;
  padding: 20px;
`;

export const Circle = styled.svg`
  width: 100%;
  height: 100%;
`;

export const Track = styled.circle`
  stroke: #333533;
  fill: none;
  stroke-width: 13;
`;

export const Fill = styled.circle<FillProps>`
  stroke: #cfdbd5;
  /* fill: none; */
  fill: #333533;
  stroke-width: 14;
  stroke-linecap: round;
  stroke-dasharray: ${(props) => props.circumference};
  stroke-dashoffset: ${(props) => props.offset};
`;

export const Text = styled.text`
  font-size: 16px;
  font-weight: 700;
  fill: #cfdbd5;
`;

export const TotalCaloriesText = styled.text`
  font-size: 16px;
  font-weight: 700;
  fill: #ffd666;
`;
