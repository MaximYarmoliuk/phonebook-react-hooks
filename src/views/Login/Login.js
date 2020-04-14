import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { authOperations } from "../../redux/auth";
import styles from "./Login.module.css";

export default function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonAvailability, setButtonAvailability] = useState(false);

  useEffect(() => {
    function handleButtonAvailability() {
      if (email && password.length >= 7) {
        setButtonAvailability(true);
      } else {
        setButtonAvailability(false);
      }
    }
    handleButtonAvailability();
  }, [email, password]);

  const handleChangeEmail = ({ target: { value } }) => {
    setEmail(value);
  };

  const handleChangePassword = ({ target: { value } }) => {
    setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    dispatch(authOperations.login({ email, password }));
  };

  return (
    <div className={styles.container}>
      <h1>LOGIN</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
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
          Login
        </Button>
      </form>
    </div>
  );
}

// class Login extends Component {
//   state = {
//     email: "",
//     password: "",
//     buttonAvailability: false,
//   };

// handleButtonAvailability = () => {
//   if (this.state.email && this.state.password.length >= 7) {
//     this.setState({ buttonAvailability: true });
//   } else {
//     this.setState({ buttonAvailability: false });
//   }
// };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//     this.handleButtonAvailability();
//   };

// handleSubmit = (e) => {
//   e.preventDefault();
//   this.props.onLogin({ ...this.state });
//   this.setState({ email: "", password: "" });
// };

// render() {
//   const { email, password, buttonAvailability } = this.state;

//   return (
//     <div className={styles.container}>
//       <h1>LOGIN</h1>

//       <form onSubmit={this.handleSubmit} className={styles.form}>
//         <TextField
//           required
//           id="outlined-email-input"
//           label="Email"
//           type="email"
//           name="email"
//           value={email}
//           autoComplete="current-email"
//           variant="outlined"
//           onChange={this.handleChange}
//           className={styles.input}
//         />

//         <TextField
//           required
//           id="outlined-password-input"
//           label="Password"
//           type="password"
//           name="password"
//           value={password}
//           autoComplete="current-password"
//           variant="outlined"
//           onChange={this.handleChange}
//           className={styles.input}
//         />

//         <Button color="primary" type="submit" disabled={!buttonAvailability}>
//           Login
//         </Button>
//       </form>
//     </div>
//   );
//   }
// }

// export default connect(null, { onLogin: authOperations.login })(Login);
