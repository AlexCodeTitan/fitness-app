import styled from "styled-components";

export const MealItemContainer = styled.div`
  width: 100%;
  min-height: 30px;
  margin-bottom: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MealNutrients = styled.span`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  gap: 20px;

  span {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 30%;
  }
`;
