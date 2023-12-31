import { useSelector } from "react-redux";
import css from "./Phonebook.module.css";
import ContactForm from "../../ContactForm/ContactsForm";
import Filter from "../../Filter/Filter";
import ContactList from "../../contactList/ContactList";
import {
  selectFilteredContacts,
  selectIsLoading,
} from "../../../redux/contacts/selectors";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../../redux/contacts/operations";

export const Phonebook = () => {
  const displayContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section className={css.appheader}>
      <section className={css.section}>
        <h1>Phonebook</h1>
        <ContactForm />
      </section>
      <section className={css.section}>
        <h2>Contacts</h2>
        <Filter />
        {isLoading ? (
          <p>Loading</p>
        ) : displayContacts.length > 0 ? (
          <ContactList displayedContacts={displayContacts} />
        ) : (
          <p> No contacts </p>
        )}
      </section>
    </section>
  );
};
