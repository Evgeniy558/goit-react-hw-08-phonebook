import { useDispatch } from "react-redux";
import css from "./LoginForm.module.css";
import { logIn } from "../../redux/auth/operations";
import Button from "../Button/Button";
export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (ev) => {
    ev.preventDefault();
    const form = ev.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
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
          // pattern=".{7,}"
          // required
          // title="The password must be at least 7 characters long."
        />
      </label>
      <Button typeButton={"button_add"}>Log in</Button>
    </form>
  );
};
