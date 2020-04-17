import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { contactsActions, contactsSelectors } from "../../redux/contacts";
import styles from "./Filter.module.css";

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector((state) => contactsSelectors.getFilter(state));
  return (
    <div className={styles.container}>
      <TextField
        label="Find contacts by name"
        type="text"
        className={styles.input}
        value={value}
        onChange={(e) => dispatch(contactsActions.changeFilter(e.target.value))}
      />
    </div>
  );
}

