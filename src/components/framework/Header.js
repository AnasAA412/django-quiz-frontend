import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbarTitle: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" elevation={0}>
        <Toolbar>
          <Typography
            variant="h6"
            color="inherit"
            className={classes.toolbarTitle}
          >
            Quizzes
          </Typography>
          <LoginButton to="/auth/login/">Login</LoginButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const LoginButton = styled(Link)`
  background: #046bf6;
  border-radius: 4px;
  padding: 13px 45px;
  color: #fff;
  font-size: 18px;
  border-radius: 4px;
  font-weight: bold;
`;