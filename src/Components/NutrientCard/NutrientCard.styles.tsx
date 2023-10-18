import styled from "styled-components";
import { CardContainer } from "../Card/Card.styles";

type ProgressFillProps = {
  color: string;
  percentage: string;
};

export const NutrientCardContainer = styled(CardContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #cfdbd5;
  color: #333533;
  border-radius: 15px;
  padding: 20px 30px 30px 30px;
`;

export const NutrientsWrapper = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const NutrientContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NutrientLabel = styled.p`
  font-size: 1rem;
  font-weight: 500;
  width: 20%;
`;

export const ProgressBar = styled.div`
  height: 16px;
  width: 60%;
  background-color: #333533c0;
  border-radius: 10px;
  margin: 0 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

export const ProgressFill = styled.div<ProgressFillProps>`
  height: 100%;
  background-color: ${(props) => props.color || "#FFD700"};
  width: ${(props) => props.percentage || "50%"};
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const GoalValue = styled.span`
  font-size: 1rem;
  font-weight: 500;
  width: 20%;
  text-align: end;
`;
