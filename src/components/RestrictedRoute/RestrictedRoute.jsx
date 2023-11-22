import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/isAuth";
import PropTypes from "prop-types";

export const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

RestrictedRoute.propTypes = {
  component: PropTypes.element,
  redirectTo: PropTypes.any,
};
