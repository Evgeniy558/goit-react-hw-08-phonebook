import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./components/pages/HomePage/HomePage";
import { Phonebook } from "./components/pages/Phonebook/Phonebook";
import { RestrictedRoute } from "./components/RestrictedRouter";
import { RegistrationForm } from "./components/RegistrationForm/RegistrationForm";
import { LoginForm } from "./components/loginForm";
import { PrivateRoute } from "./components/PrivateRoute";
import { refreshUser } from "./redux/auth/operations";
import { useAuth } from "./hooks";

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  const { isRefresh } = useAuth();

  return isRefresh ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegistrationForm />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginForm />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Phonebook />} />
          }
        />
      </Route>
    </Routes>
  );
};
