import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectUser } from "../../redux/userSlice";
import { fetchUserDataAndMeals } from "../../utils/mealsfetch";
import SideBar from "./../../Components/SideBar/SideBar";
import { HomeContainer, HomeWrapper } from "./Home.styles";
import { Outlet } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);

  const handleFetchMeals = () => {
    fetchUserDataAndMeals(currentUser);
  };

  return (
    <HomeWrapper>
      <SideBar />
      <HomeContainer>
        <Outlet />
      </HomeContainer>
    </HomeWrapper>
  );
};

export default Home;
