import { DashboardRow, DashboardWrapper } from "./Dashboard.styles";
import CalorieGraphCard from "../../Components/CalorieGraphCard/CalorieGraphCard";
import NutrientCard from "../../Components/NutrientCard/NutrientCard";
import DailyCalorieCard from "../../Components/DailyCalorieCard/DailyCalorieCard";

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <DashboardRow>
        <CalorieGraphCard />
        <NutrientCard />
        <DailyCalorieCard />
      </DashboardRow>
      <DashboardRow>
        <NutrientCard />
        <DailyCalorieCard />
        <CalorieGraphCard />
      </DashboardRow>
      <DashboardRow>
        <DailyCalorieCard />
        <CalorieGraphCard />
        <NutrientCard />
      </DashboardRow>
    </DashboardWrapper>
  );
};

export default Dashboard;
