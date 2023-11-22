import { useSelector } from "react-redux";
import { getUserStatus } from "../redux/selectors";

export const useAuth = () => {
  const { isAdmin, isLoggedIn } = useSelector(getUserStatus);

  return {
    isLoggedIn,
    isAdmin,
  };
};
