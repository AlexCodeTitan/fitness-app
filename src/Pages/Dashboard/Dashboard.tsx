import { DashboardRow, DashboardWrapper } from "./Dashboard.styles";
import CalorieGraphCard from "../../Components/CalorieGraphCard/CalorieGraphCard";
import NutrientCard from "../../Components/NutrientCard/NutrientCard";
import DailyCalorieCard from "../../Components/DailyCalorieCard/DailyCalorieCard";
import MealCard from "../../Components/MealCard/MealCard";

type fakeIngredientsType = {
  name: string;
  measure: string;
  quantity: number;
  protein: number;
  carbs: number;
  fats: number;
};

const Dashboard = () => {
  const fakeIngredients = [
    {
      name: "Chicken Breast",
      quantity: 100,
      measure: "g",
      kcal: 165,
      protein: 31,
      carbs: 80,
      fats: 3.6,
    },
    {
      name: "Broccoli",
      quantity: 100,
      measure: "g",
      kcal: 55,
      protein: 3.7,
      carbs: 11.2,
      fats: 0.6,
    },
    {
      name: "Brown Rice",
      quantity: 100,
      measure: "g",
      kcal: 216,
      protein: 5,
      carbs: 45,
      fats: 1.6,
    },
    {
      name: "Olive Oil",
      quantity: 100,
      measure: "ml",
      kcal: 119,
      protein: 0,
      carbs: 0,
      fats: 13.5,
    },
    {
      name: "Egg",
      quantity: 100,
      measure: "g",
      kcal: 68,
      protein: 5.5,
      carbs: 0.6,
      fats: 4.8,
    },
    {
      name: "Apple",
      quantity: 100,
      measure: "g",
      kcal: 52,
      protein: 0.3,
      carbs: 14,
      fats: 0.2,
    },
    {
      name: "Banana",
      quantity: 100,
      measure: "g",
      kcal: 89,
      protein: 1.1,
      carbs: 23,
      fats: 0.3,
    },
    {
      name: "Almonds",
      quantity: 100,
      measure: "g",
      kcal: 7,
      protein: 0.3,
      carbs: 0.2,
      fats: 0.6,
    },
    {
      name: "Egg",
      quantity: 100,
      measure: "g",
      kcal: 68,
      protein: 5.5,
      carbs: 0.6,
      fats: 4.8,
    },
    {
      name: "Apple",
      quantity: 100,
      measure: "g",
      kcal: 52,
      protein: 0.3,
      carbs: 14,
      fats: 0.2,
    },
    {
      name: "Banana",
      quantity: 100,
      measure: "g",
      kcal: 89,
      protein: 1.1,
      carbs: 23,
      fats: 0.3,
    },
    {
      name: "Almonds",
      quantity: 100,
      measure: "g",
      kcal: 7,
      protein: 0.3,
      carbs: 0.2,
      fats: 0.6,
    },
    {
      name: "Egg",
      quantity: 100,
      measure: "g",
      kcal: 68,
      protein: 5.5,
      carbs: 0.6,
      fats: 4.8,
    },
    {
      name: "Apple",
      quantity: 100,
      measure: "g",
      kcal: 52,
      protein: 0.3,
      carbs: 14,
      fats: 0.2,
    },
    {
      name: "Banana",
      quantity: 100,
      measure: "g",
      kcal: 89,
      protein: 1.1,
      carbs: 23,
      fats: 0.3,
    },
    {
      name: "Almonds",
      quantity: 100,
      measure: "g",
      kcal: 7,
      protein: 0.3,
      carbs: 0.2,
      fats: 0.6,
    },
    {
      name: "Salmon",
      quantity: 100,
      measure: "g",
      kcal: 206,
      protein: 22,
      carbs: 0,
      fats: 13,
    },
    {
      name: "Potato",
      quantity: 100,
      measure: "g",
      kcal: 130,
      protein: 2,
      carbs: 30,
      fats: 0.2,
    },
    {
      name: "Quinoa",
      quantity: 100,
      measure: "g",
      kcal: 120,
      protein: 4.1,
      carbs: 21.3,
      fats: 1.9,
    },
    {
      name: "Spinach",
      quantity: 100,
      measure: "g",
      kcal: 23,
      protein: 2.9,
      carbs: 3.6,
      fats: 0.4,
    },
    {
      name: "Cheddar Cheese",
      quantity: 100,
      measure: "g",
      kcal: 402,
      protein: 24,
      carbs: 1.3,
      fats: 33,
    },
    {
      name: "Tomato",
      quantity: 100,
      measure: "g",
      kcal: 18,
      protein: 0.9,
      carbs: 3.9,
      fats: 0.2,
    },
    {
      name: "Carrot",
      quantity: 100,
      measure: "g",
      kcal: 41,
      protein: 0.9,
      carbs: 10,
      fats: 0.2,
    },
    {
      name: "Greek Yogurt",
      quantity: 100,
      measure: "g",
      kcal: 59,
      protein: 10,
      carbs: 3.6,
      fats: 0.4,
    },
    {
      name: "Peanut Butter",
      quantity: 100,
      measure: "g",
      kcal: 94,
      protein: 3.6,
      carbs: 3.1,
      fats: 8,
    },
    {
      name: "Oats",
      quantity: 100,
      measure: "g",
      kcal: 68,
      protein: 2.4,
      carbs: 12,
      fats: 1.4,
    },
    {
      name: "Milk",
      quantity: 100,
      measure: "ml",
      kcal: 42,
      protein: 3.4,
      carbs: 4.8,
      fats: 1,
    },
    {
      name: "Avocado",
      quantity: 100,
      measure: "g",
      kcal: 160,
      protein: 2,
      carbs: 8.5,
      fats: 14.7,
    },
  ];

  function chunkArray(array: fakeIngredientsType[], size: number) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      const chunk = array.slice(i, i + size);
      result.push(chunk);
    }
    return result;
  }

  const chunks = chunkArray(fakeIngredients, 7);
  const chunksOfThree = chunkArray(fakeIngredients, 3);
  const chunksOfFour = chunkArray(fakeIngredients, 4);
  const chunksOfFive = chunkArray(fakeIngredients, 5);

  return (
    <DashboardWrapper>
      <DashboardRow>
        <CalorieGraphCard />
        <NutrientCard />
        <DailyCalorieCard />
      </DashboardRow>

      <DashboardRow>
        <MealCard meal="Breakfast" ingredients={chunksOfFive[0]} />
        <MealCard meal="Lunch" ingredients={chunksOfFive[1]} />
      </DashboardRow>

      <DashboardRow>
        <MealCard meal="Snacks" ingredients={chunksOfThree[3]} />
        <MealCard meal="Dinner" ingredients={chunksOfFour[5]} />
      </DashboardRow>
    </DashboardWrapper>
  );
};

export default Dashboard;
