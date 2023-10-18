import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import AuthPage from "./Pages/Auth/AuthPage";
import Home from "./Pages/Home/Home";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/auth" index element={<AuthPage />} />
      <Route path="/home" element={<PrivateRoute element={<Home />} />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
