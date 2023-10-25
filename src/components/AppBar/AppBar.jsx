import { useAuth } from "../../hooks";
import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu";
import css from "./AppBar.module.css";

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav className={css.container}>
      {isLoggedIn ? <UserMenu /> : <Navigation />}
    </nav>
  );
};
