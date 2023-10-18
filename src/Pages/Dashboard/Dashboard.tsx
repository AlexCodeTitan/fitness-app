import { DashboardWrapper } from "./Dashboard.styles";
import CalorieGraphCard from "../../Components/CalorieGraphCard/CalorieGraphCard";
import NutrientCard from "../../Components/NutrientCard/NutrientCard";
import DailyCalorieCard from "../../Components/DailyCalorieCard/DailyCalorieCard";

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <CalorieGraphCard />
      <NutrientCard />
      <DailyCalorieCard />
    </DashboardWrapper>
  );
};

export default Dashboard;
