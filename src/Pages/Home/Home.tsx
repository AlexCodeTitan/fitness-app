import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectUser, signOut } from "../../redux/userSlice";
import { signOutUser } from "../../firebase/firebase";
import { fetchUserDataAndMeals } from "../../utils/mealsfetch";
import SideBar from "./../../Components/SideBar/SideBar";
import { HomeWrapper } from "./Home.styles";

const Home = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);

  const handleSignOut = async () => {
    await signOutUser();
    dispatch(signOut());
  };

  const handleFetchMeals = () => {
    fetchUserDataAndMeals(currentUser);
  };

  return (
    <HomeWrapper>
      <SideBar />
      {/* <div>
        <h1>{currentUser?.displayName}</h1>
        <button onClick={handleSignOut}>Log-Out</button>
        <button onClick={handleFetchMeals}>Fetch Meals</button>
      </div> */}
    </HomeWrapper>
  );
};

export default Home;
