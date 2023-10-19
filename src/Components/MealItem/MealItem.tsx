import { MealItemContainer, MealNutrients } from "./MealItem.styles";
import { FaDrumstickBite, FaWheatAwn } from "react-icons/fa6";
import { GiAvocado } from "react-icons/gi";

type MealItemProps = {
  name: string;
  measure: string;
  quantity: number;
  protein: number;
  carbs: number;
  fats: number;
};

const MealItem = ({
  name,
  quantity,
  measure,
  protein,
  carbs,
  fats,
}: MealItemProps) => {
  return (
    <MealItemContainer>
      <p>
        {name}
        <span>
          ({quantity}
          {measure})
        </span>
      </p>
      <MealNutrients>
        <span>
          <FaWheatAwn />
          <p>{carbs}g</p>
        </span>
        <span>
          <FaDrumstickBite />
          <p>{protein}g</p>
        </span>
        <span>
          <GiAvocado />
          <p>{fats}g</p>
        </span>
      </MealNutrients>
    </MealItemContainer>
  );
};

export default MealItem;
