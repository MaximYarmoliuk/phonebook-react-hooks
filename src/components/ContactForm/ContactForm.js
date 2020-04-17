import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CSSTransition } from "react-transition-group";
import TextField from "@material-ui/core/TextField";
import { contactsOperations, contactsSelectors } from "../../redux/contacts";
import NameofContactExist from "../NameOfContactExist/NameOfContactExist";
import FillInEntryFields from "../FillInEntryFields/FillInEntryFields";
import styles from "./ContactForm.module.css";
import nameExistStyles from "./NameExist.module.css";
import entryFieldsStyles from "./FillInEntryFields.module.css";

export default function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [nameExistErr, setNameExistErr] = useState(false);
  const [entryFieldsErr, setEntryFieldsErr] = useState(false);

  const contacts = useSelector((state) => contactsSelectors.getContacts(state));

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkLength = (string) => string.length < 1;

    const checkOnExist = contacts.find((contact) => contact.name === name);

    if (checkLength(`${name}`) || checkLength(`${number}`)) {
      setEntryFieldsErr(true);
      setTimeout(() => {
        setEntryFieldsErr(false);
      }, 1000);
      return;
    }

    if (checkOnExist) {
      setNameExistErr(true);
      setTimeout(() => {
        setNameExistErr(false);
      }, 1000);
      return;
    }

    dispatch(contactsOperations.addContact({ name, number }));

    setName("");
    setNumber("");
  };

  const handleChangeName = ({ target: { value } }) => {
    setName(value);
  };

  const handleChangeNumber = ({ target: { value } }) => {
    setNumber(value);
  };

  return (
    <div>
      <CSSTransition
        in={entryFieldsErr}
        classNames={entryFieldsStyles}
        timeout={250}
        unmountOnExit
      >
        <FillInEntryFields />
      </CSSTransition>

      <CSSTransition
        in={nameExistErr}
        classNames={nameExistStyles}
        timeout={250}
        unmountOnExit
      >
        <NameofContactExist />
      </CSSTransition>

      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          type="text"
          value={name}
          name="name"
          className={styles.contactInput}
          onChange={handleChangeName}
        />

        <TextField
          label="Number"
          variant="outlined"
          type="text"
          value={number}
          name="number"
          className={styles.contactInput}
          onChange={handleChangeNumber}
        />

        <button className={styles.contactSubmit} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
}
