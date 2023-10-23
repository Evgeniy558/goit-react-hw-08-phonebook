import { AppBar } from "../AppBar/AppBar";
import css from "./Layout.module.css";
export const Layout = () => {
  return (
    <div className={css.container}>
      <AppBar />
    </div>
  );
};
