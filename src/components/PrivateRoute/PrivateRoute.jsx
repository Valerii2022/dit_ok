import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/isAuth";

// eslint-disable-next-line react/prop-types
export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const { isLoggedIn, isAdmin } = useAuth();
  const shouldRedirect = !isLoggedIn && !isAdmin;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
