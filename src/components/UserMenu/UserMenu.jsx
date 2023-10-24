import { NavLink } from "react-router-dom";
import Button from "../contactForm/button/Button";
import css from "./UserMenu.module.css";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { useAuth } from "../../hooks";
export const UserMenu = () => {
  // const { token } = useAuth();
  // console.log("token", token);
  // const handleClick = () => {
  //   dispatch(logOut(token));
  // };
  return (
    <div className={css.container}>
      <NavLink to="/phonebook">Contacts</NavLink>
      <div className={css.log_out_container}>
        <p className={css.user_greetens}>Welcome {"user"} </p>
        <Button type="button" typeButton="button">
          Log out
        </Button>
      </div>
    </div>
  );
};
