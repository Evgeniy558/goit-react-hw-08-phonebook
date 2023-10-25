import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import css from "./UserMenu.module.css";
import { useAuth } from "../../hooks";
export const UserMenu = () => {
  const { user } = useAuth();
  return (
    <div className={css.container}>
      <p className={css.user_info}> {user.email} </p>
      <Button type="button" typeButton="button_registration">
        <NavLink to="/" className={css.link}>
          Log out
        </NavLink>
      </Button>
    </div>
  );
};
