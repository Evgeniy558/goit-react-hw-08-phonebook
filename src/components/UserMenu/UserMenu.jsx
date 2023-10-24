import { NavLink } from "react-router-dom";
import Button from "../contactForm/button/Button";
import css from "./UserMenu.module.css";
export const UserMenu = () => {
  return (
    <div className={css.container}>
      <NavLink to="/phonebook">Contacts</NavLink>
      <div className={css.log_out_container}>
        <p className={css.user_greetens}>Welcome {"user"} </p>
        <Button
          type="button"
          typeButton="button_del"
          onClick={console.log("log out")}
        >
          Log out
        </Button>
      </div>
    </div>
  );
};
