import {
  GoalValue,
  NutrientCardContainer,
  NutrientContainer,
  NutrientLabel,
  NutrientsWrapper,
  ProgressBar,
  ProgressFill,
} from "./NutrientCard.styles";
import { Header } from "../Card/Card.styles";

const NUTRIENTS_DATA = [
  { name: "Proteins", consumed: 134, total: 168, unit: "g", color: "#FFD700" },
  { name: "Carbs", consumed: 256, total: 468, unit: "g", color: "#FFD700" },
  { name: "Fats", consumed: 34, total: 68, unit: "g", color: "#FFD700" },
  { name: "Water", consumed: 2.2, total: 2.5, unit: "l", color: "#03989E" },
];

const NutrientCard = () => {
  return (
    <NutrientCardContainer size="large">
      <Header>Macro Nutrients</Header>
      <NutrientsWrapper>
        {NUTRIENTS_DATA.map((nutrient, index) => (
          <NutrientContainer key={index}>
            <NutrientLabel>{nutrient.name}</NutrientLabel>
            <ProgressBar>
              <ProgressFill
                color={nutrient.color}
                percentage={`${(nutrient.consumed / nutrient.total) * 100}%`}
              />
            </ProgressBar>
            <GoalValue>
              {nutrient.consumed} / {nutrient.total} {nutrient.unit}
            </GoalValue>
          </NutrientContainer>
        ))}
      </NutrientsWrapper>
    </NutrientCardContainer>
  );
};

export default NutrientCard;
