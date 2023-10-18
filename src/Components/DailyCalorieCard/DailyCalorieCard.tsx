import {
  DailyCaloriesWrapper,
  DailyCardContainer,
  DayGraphContainer,
  DayLabel,
  DayProgressBar,
  DayProgressFill,
} from "./DailyCalorieCard.styles";
import { Header } from "../Card/Card.styles";

const NUTRIENTS_DATA = [
  { name: "Mo", consumed: 1345, total: 3168 },
  { name: "Tue", consumed: 2565, total: 2468 },
  { name: "We", consumed: 1343, total: 3168 },
  { name: "Th", consumed: 2343, total: 2468 },
  { name: "Fr", consumed: 2334, total: 3168 },
  { name: "Sa", consumed: 1834, total: 3168 },
  { name: "Su", consumed: 2000, total: 2468 },
];

const DailyCalorieCard = () => {
  return (
    <DailyCardContainer size="large">
      <Header>Daily Calories</Header>
      <DailyCaloriesWrapper>
        {NUTRIENTS_DATA.map((nutrient, index) => (
          <DayGraphContainer key={index}>
            <DayProgressBar>
              <DayProgressFill
                percentage={(nutrient.consumed / nutrient.total) * 100}
              />
            </DayProgressBar>
            <DayLabel>{nutrient.name}</DayLabel>
          </DayGraphContainer>
        ))}
      </DailyCaloriesWrapper>
    </DailyCardContainer>
  );
};

export default DailyCalorieCard;
