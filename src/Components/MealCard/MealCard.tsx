import { CardContainer } from "../Card/Card.styles";
import MealItem from "../MealItem/MealItem";
import {
  MealCardHeader,
  MealGraphContainer,
  MealListContainer,
  MealWrapper,
} from "./MealCard.styles";

type MealCardProps = {
  meal: string;
  ingredients: {
    name: string;
    measure: string;
    quantity: number;
    protein: number;
    carbs: number;
    fats: number;
  }[];
};

const MealCard = ({ meal, ingredients }: MealCardProps) => {
  return (
    <CardContainer>
      <MealCardHeader>{meal}</MealCardHeader>
      <MealWrapper>
        <MealListContainer>
          {ingredients.map((ingredient, index) => (
            <MealItem
              key={index}
              name={ingredient.name}
              protein={ingredient.protein}
              carbs={ingredient.carbs}
              fats={ingredient.fats}
              measure={ingredient.measure}
              quantity={ingredient.quantity}
            />
          ))}
        </MealListContainer>
        <MealGraphContainer>Graph</MealGraphContainer>
      </MealWrapper>
    </CardContainer>
  );
};

export default MealCard;
