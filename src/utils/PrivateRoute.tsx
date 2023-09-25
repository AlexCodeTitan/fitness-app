import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";

type PrivateRouteProps = {
  element: React.ReactElement;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const user = useSelector(selectUser);

  if (!user) {
    // Redirect them to login page if not authenticated
    return <Navigate to="/auth" />;
  }

  return element; // Return the element directly
};

export default PrivateRoute;
