import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import { auth, signOutUser } from "./firebase/firebase";
import { useDispatch } from "react-redux";
import { selectUser, setLoading, setUser, signOut } from "./redux/userSlice";
import SignUp from "./Pages/SignUp";
import { useSelector } from "react-redux";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);

  const handleSignOut = async () => {
    await signOutUser();
    dispatch(signOut());
  };

  return (
    <>
      {/* <nav>
        <ul>
          <li>
            {currentUser ? (
              <button onClick={handleSignOut}>Log-Out</button>
            ) : (
              <Link to="/">Login</Link>
            )}
          </li>
          <li>
            <Link to="/home">User Home</Link>
          </li>
        </ul>
      </nav> */}
      <Routes>
        <Route path="/login" index element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<PrivateRoute element={<h1>Home</h1>} />} />
      </Routes>
    </>
  );
}

export default App;
