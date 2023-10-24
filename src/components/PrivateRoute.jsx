import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks";
export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const { isLoggedIn, isRefresh } = useAuth();
  const shouldredirect = !isLoggedIn && !isRefresh;
  return shouldredirect ? <Navigate to={redirectTo} /> : Component;
};
