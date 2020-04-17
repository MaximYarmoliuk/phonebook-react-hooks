import React, {useState} from "react";
import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { authSelectors } from "../../redux/auth";
import Appbar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import styles from "./AppBar.module.css";

export default function AppBar() {
  const isAuthenticated = useSelector((state) => authSelectors.isAuthenticated(state));
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Appbar position="static">
        <Toolbar className={styles.container}>
          <IconButton
            edge="start"
            color="inherit"
            title="Menu"
            aria-label="menu"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem>
              <Navigation />
            </MenuItem>
          </Menu>

          <div
            style={{
              display: "flex",
            }}
          >
            {isAuthenticated ? <UserMenu /> : <AuthNav />}
          </div>
        </Toolbar>
      </Appbar>
    </div>
  );
}

