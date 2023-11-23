import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/isAuth";
import PropTypes from "prop-types";

export const AdminRoute = ({ component: Component, redirectTo = "/" }) => {
  const { isAdmin } = useAuth();
  const shouldRedirect = !isAdmin;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

AdminRoute.propTypes = {
  component: PropTypes.element,
  redirectTo: PropTypes.any,
};
