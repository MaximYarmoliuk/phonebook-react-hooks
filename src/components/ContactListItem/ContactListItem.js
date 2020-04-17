import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import { contactsOperations, contactsSelectors } from "../../redux/contacts";
import removeMessage from "../../helpers/removeMessage";
import styles from "./ContactListItem.module.css";

export default function ContactListItem({ id }) {
  const contact = useSelector((state) =>
    contactsSelectors.getContactById(state, id)
  );

  const dispatch = useDispatch();
  const onRemoveContact = () => {
    dispatch(contactsOperations.removeContact(id));
  };

  return (
    <li className={styles.item}>
      {contact && (
        <p className="TaskList-text">
          {contact.name}: {contact.number}
        </p>
      )}

      <DeleteIcon
        fontSize="large"
        className={styles.button}
        title="Delete contact"
        type="button"
        onClick={() => removeMessage(contact.name, onRemoveContact)}
      />
    </li>
  );
}

