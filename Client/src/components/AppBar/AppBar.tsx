import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBarMaterial from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Menu from "./DropDownMenuContainer";
import Button from "@material-ui/core/Button";


import styled from "styled-components";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: "white",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      backgroundColor: "white",
    },
  })
);
const StyledAppBar = styled(AppBarMaterial)<any>`
  background-color: #ffffff;
  color: black;
  box-shadow: none;
`;
const StyledLoginButton = styled(Button)``;
const Link = styled.div`
  margin-left: 30px;
`;
export default function AppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <StyledAppBar position="static">
        <Toolbar>
          <StyledLoginButton color="inherit">
            <Menu></Menu>
          </StyledLoginButton>
          <Link>?איך מתחילים ללמד</Link>
          <Link>?מי אנחנו</Link>
        </Toolbar>
      </StyledAppBar>
    </div>
  );
}
