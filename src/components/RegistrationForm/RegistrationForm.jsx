import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrartionForm.module.css";
import Button from "../Button/Button";

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (ev) => {
    ev.preventDefault();
    const form = ev.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    dispatch(register({ name, email, password }));
    form.reset();
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Username
        <input className={css.input} type="text" name="name" />
      </label>
      <label className={css.label}>
        Email
        <input className={css.input} type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input
          className={css.input}
          type="password"
          name="password"
          //   pattern=".{7,}"
          //   required
          //   title="The password must be at least 8 characters long."
        />
      </label>
      <Button typeButton={"button_add"}>Register</Button>
    </form>
  );
};
