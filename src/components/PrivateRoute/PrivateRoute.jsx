import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/isAuth";
import PropTypes from "prop-types";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const { isLoggedIn, isAdmin } = useAuth();
  const shouldRedirect = !isLoggedIn && !isAdmin;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

PrivateRoute.propTypes = {
  component: PropTypes.element,
  redirectTo: PropTypes.any,
};
