import { NavLink } from "react-router-dom";
import React from "react";
import css from "./Navigation.module.css";
export const Navigation = () => {
  return (
    <nav className={css.container_nav}>
      <NavLink to="/">Home</NavLink>
      <div className={css.container_reg}>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Sign in</NavLink>
      </div>
    </nav>
  );
};
