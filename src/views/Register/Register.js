import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { authOperations } from "../../redux/auth";
import styles from "./Register.module.css";

export default function Register() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonAvailability, setButtonAvailability] = useState(false);

  useEffect(() => {
    function handleButtonAvailability() {
      if (name && email && password.length >= 7) {
        setButtonAvailability(true);
      } else {
        setButtonAvailability(false);
      }
    }
    handleButtonAvailability();
  }, [name, email, password]);

  const handleChangeName = ({ target: { value } }) => {
    setName(value);
  };

  const handleChangeEmail = ({ target: { value } }) => {
    setEmail(value);
  };

  const handleChangePassword = ({ target: { value } }) => {
    setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPassword("");
    dispatch(authOperations.register({ name, email, password }));
  };

  return (
    <div className={styles.container}>
      <h1>REGISTER</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        <TextField
          required
          id="outlined-name-input"
          label="Name"
          type="text"
          name="name"
          value={name}
          autoComplete="current-name"
          variant="outlined"
          onChange={handleChangeName}
          className={styles.input}
        />

        <TextField
          required
          id="outlined-email-input"
          label="Email"
          type="email"
          name="email"
          value={email}
          autoComplete="current-email"
          variant="outlined"
          onChange={handleChangeEmail}
          className={styles.input}
        />

        <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          name="password"
          value={password}
          autoComplete="current-password"
          variant="outlined"
          onChange={handleChangePassword}
          className={styles.input}
        />

        <Button color="primary" type="submit" disabled={!buttonAvailability}>
          Register
        </Button>
      </form>
    </div>
  );
}
