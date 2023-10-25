import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import css from "./UserMenu.module.css";
import { useAuth } from "../../hooks";
export const UserMenu = () => {
  const { user } = useAuth();
  return (
    <div className={css.container}>
      <p className={css.user_greetens}> {user.email} </p>
      <NavLink to="/">
        <Button type="button" typeButton="button">
          Log out
        </Button>
      </NavLink>
    </div>
  );
};
