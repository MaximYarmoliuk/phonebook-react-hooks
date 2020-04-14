import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import Filter from "../../components/Filter/Filter";
import { contactsOperations, contactsSelectors } from "../../redux/contacts";
import contactListStyles from "./ContactListStyles.module.css";
import filterStyles from "./FilterStyles.module.css";

export default function Contacts() {
  const contacts = useSelector((state) => contactsSelectors.getContacts(state));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      {" "}
      <ContactForm />
      <CSSTransition
        in={contacts.length >= 2}
        timeout={250}
        classNames={filterStyles}
        unmountOnExit
      >
        <Filter />
      </CSSTransition>
      <CSSTransition
        in={contacts.length > 0}
        timeout={250}
        classNames={contactListStyles}
        unmountOnExit
      >
        <ContactList />
      </CSSTransition>
    </>
  );
}
