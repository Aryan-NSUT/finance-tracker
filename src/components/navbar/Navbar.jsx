import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import classes from "./navbar.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Navbar = ({onClickShow}) => {
  return (
    <div className={classes.root}>
      <AppBar className={classes.AppBar}  elevation={0}>
        <Toolbar  style={{minHeight : "100px"}}>
          <Typography
            variant="h6"
            color="white"
            fontWeight={800}
            fontFamily="initial"
          >
            Title
          </Typography>
          <div className={classes.grow} />
            <Button sx={{mx : 1, background : "#F5A640", "&:hover": { backgroundColor: "GrayText" }}} variant="h6" onClick={()=>onClickShow()}> Add goals </Button>
            <Button sx={{mx : 1, background : "#F5A640", "&:hover": { backgroundColor: "GrayText" }}} variant="h6">My Finance</Button>
            <Button sx={{mx : 1, background : "#F5A640", "&:hover": { backgroundColor: "GrayText" }}} variant="h6">Compare Finance</Button>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
