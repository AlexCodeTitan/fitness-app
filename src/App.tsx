import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import AuthPage from "./Pages/Auth/AuthPage";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/auth" index element={<AuthPage />} />
      <Route path="/" element={<PrivateRoute element={<Home />} />} />
    </Routes>
  );
}

export default App;
