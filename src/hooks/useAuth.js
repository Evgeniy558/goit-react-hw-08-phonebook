import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectIsRefresh,
  selectToken,
  selectUser,
} from "../redux/auth";

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefresh = useSelector(selectIsRefresh);
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  return { isLoggedIn, isRefresh, user, token };
};
