import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contacts/operations";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./components/pages/HomePage/HomePage";
import { Phonebook } from "./components/pages/Phonebook";
import { RestrictedRoute } from "./components/RestrictedRouter";
import { RegistrationForm } from "./components/RegistrationForm/RegistrationForm";
import { LoginForm } from "./components/loginForm";
import { PrivateRoute } from "./components/PrivateRoute";

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/phonebook"
              component={<RegistrationForm />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              redirectTo="/phonebook"
              component={<LoginForm />}
            />
          }
        />
        <Route
          path="/phonebook"
          element={
            <PrivateRoute redirectTo="/login" component={<Phonebook />} />
          }
        />
      </Route>
    </Routes>
  );
};
