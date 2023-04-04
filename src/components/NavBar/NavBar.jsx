import { Menu } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import AppBar from "../../components-styled/AppBar/AppBar";
import { logoutUser } from "../../redux/reducers/authSlice";
import { toggleDrawer } from "../../redux/reducers/settingsSlice";
import { authState, settingsState } from "../../redux/store";

const NavBar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(authState);
  const { isDrawerOpen } = useSelector(settingsState);

  const handleToggle = () => dispatch(toggleDrawer());

  const handleLogout = () => dispatch(logoutUser());

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" isOpen={isDrawerOpen}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleToggle}
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          {user ? (
            <Button
              color="inherit"
              onClick={handleLogout}
              sx={{ marginLeft: "auto" }}
            >
              Logout
            </Button>
          ) : null}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
