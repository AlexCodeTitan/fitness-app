import styled from "styled-components";
import { Header } from "../Card/Card.styles";

export const MealCardHeader = styled(Header)`
  color: #cfdbd5;
  height: calc(20% - 10px);
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 2px solid #cfdbd5;
`;

export const MealWrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
`;

export const MealListContainer = styled.div`
  width: 75%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding-right: 20px;
  margin-right: 30px;
`;

export const MealGraphContainer = styled.div`
  display: flex;
  width: 25%;
  align-items: center;
  justify-content: center;
`;
