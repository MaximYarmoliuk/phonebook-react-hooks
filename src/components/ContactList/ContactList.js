import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useSelector } from "react-redux";
import ContactListItem from "../ContactListItem/ContactListItem";
import { contactsSelectors } from "../../redux/contacts";
import styles from "./ContactList.module.css";
import itemsStyles from "./Items.module.css";

export default function ContactList() {
  const contacts = useSelector((state) =>
    contactsSelectors.getFilteredContacts(state)
  );
  return (
    <div>
      <TransitionGroup component="ul" className={styles.container}>
        {contacts.map(({ id }) => (
          <CSSTransition
            key={id}
            timeout={250}
            classNames={itemsStyles}
            unmountOnExit
          >
            <ContactListItem id={id} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}
