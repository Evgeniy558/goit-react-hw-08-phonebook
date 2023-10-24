import { Suspense } from "react";
import { AppBar } from "../AppBar/AppBar";
import css from "./Layout.module.css";
import { Outlet } from "react-router-dom";
export const Layout = () => {
  return (
    <div className={css.container}>
      <AppBar />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
