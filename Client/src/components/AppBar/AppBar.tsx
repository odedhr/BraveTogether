import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBarMaterial from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Popup from "../Modal/Modal";
import Login from "../Login/Login";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export default function AppBar() {
  const classes = useStyles();
  const [isModalOpen, setOpenModal] = useState(false);

  return (
    <div className={classes.root}>
      <AppBarMaterial position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => setOpenModal(!isModalOpen)}>
            התחברות
          </Button>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBarMaterial>
      <Popup isModalOpen={isModalOpen} closePopup={(isOpen: boolean) => setOpenModal(isOpen)}>
        <>
          <div>מכיר גיבור שואה שמעוניין ללמד?</div>
          <div>הרשם או התחבר על מנת להוסיף מורה חדש</div>
          <Login></Login>
        </>
      </Popup>
    </div>
  );
}
