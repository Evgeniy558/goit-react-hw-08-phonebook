import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { fetchContacts } from "./redux/contacts/operations";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./components/HomePage";
import { Phonebook } from "./components/pages/Phonebook";

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/phonebook" element={<Phonebook />} />
      </Route>
    </Routes>

    // <div className="App">
    //   <section className={css.appheader}>
    //     <section className={css.section}>
    //       <h1>Phonebook</h1>
    //       <Form />
    //     </section>
    //     <section className={css.section}>
    //       <h2>Contacts</h2>
    //       <Filter />
    //       {isLoading ? (
    //         <p>Loading</p>
    //       ) : displayContacts.length > 0 ? (
    //         <ContactList displayedContacts={displayContacts} />
    //       ) : (
    //         <p> No contacts </p>
    //       )}
    //     </section>
    //   </section>
    // </div>
  );
};
