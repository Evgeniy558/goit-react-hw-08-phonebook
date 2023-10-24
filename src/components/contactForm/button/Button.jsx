import css from "./button.module.css";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../../redux/contacts/operations";
import { useAuth } from "../../../hooks";
import { logOut } from "../../../redux/auth/operations";

const Button = ({ children, typeButton, contact }) => {
  const dispatch = useDispatch();
  const { token } = useAuth();

  const handleDeleteContact = (id) => {
    console.log("delID", id);
    dispatch(deleteContact(id));
  };
  const handleLogOut = () => {
    dispatch(logOut(token));
  };

  const classButton =
    typeButton === "button_add"
      ? css["button_add"]
      : typeButton === "button_del"
      ? css["button_del"]
      : css["button"];

  return (
    <div className={css.wrapper}>
      <button
        className={`${css.button} ${classButton}`}
        onClick={
          typeButton === "button_del"
            ? () => {
                handleDeleteContact(contact.id);
              }
            : typeButton === "button"
            ? () => {
                handleLogOut();
              }
            : null
        }
      >
        {children}
      </button>
    </div>
  );
};

Button.propTypes = {
  typeButton: PropTypes.string.isRequired,
  contact: PropTypes.object,
};
export default Button;
