import { Header } from "../Card/Card.styles";
import {
  CalorieGraphContainer,
  Circle,
  Fill,
  Text,
  TotalCaloriesText,
  Track,
} from "./CalorieGraphCard.styles";

const CalorieGraphCard = ({
  totalCalories = 2934,
  consumedCalories = 2916,
}) => {
  const radius = 80;
  const strokeWidth = 14;
  const circumference = 2 * Math.PI * radius;
  const progress = consumedCalories / totalCalories;
  const adjustment = progress > 0.98 && progress < 1 ? strokeWidth : 0;
  const offset = circumference * (1 - progress) + adjustment;

  return (
    <CalorieGraphContainer size="small">
      <Header>Daily's calorie goal</Header>
      <Circle viewBox="0 -10 200 200">
        <Track cx="100" cy="100" r={radius} />
        <Fill
          cx="100"
          cy="100"
          r={radius}
          circumference={circumference}
          offset={offset}
          transform="rotate(-90 100 100)"
        />
        <Text x="50%" y="50%" textAnchor="middle" dy=".3em" dx="-20">
          {consumedCalories}&nbsp;/
        </Text>
        <TotalCaloriesText
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          dx="20"
        >
          &nbsp;{totalCalories}
        </TotalCaloriesText>
      </Circle>
    </CalorieGraphContainer>
  );
};

export default CalorieGraphCard;
