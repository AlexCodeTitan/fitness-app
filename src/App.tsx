import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import { auth } from "./firebase/firebase";
import { useDispatch } from "react-redux";
import { setError, setLoading, setUser } from "./redux/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      (user) => {
        dispatch(setUser(user));
        dispatch(setLoading(false));
      },
      (error) => {
        dispatch(setError(error.message));
        dispatch(setLoading(false));
      }
    );

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/home">User Home</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<h1>Home</h1>} />
      </Routes>
    </div>
  );
}

export default App;
