import * as React from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core";
import { ReactComponent as Logo } from "../../assets/icons/SmartHealthLogo.svg";
import NavMenu from "./NavMenu";
import { Link } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 1300,
    height: "fit-content",
    width: "100%",
    position: "fixed",
    background: "#FFFFFF",
    zIndex: 1000,
    boxShadow:
      "0 4px 20px 0px rgb(0 0 0 / 14%), 0 7px 12px -5px rgb(33 33 33 / 46%)",
    "&>div": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      "&>a>svg": {
        cursor: "pointer",
        padding: 7,
      },
    },
  },
  navMenu: {
    display: "flex",
    alignItems: "center",
    "&>button": {
      padding: 8,
      TextAlign: "center",
      background: "#F5f5f5",
      borderRadius: 10,
      height: 35,
      "&>div": {
        height: 25,
        width: 25,
        marginRight: 5,
      },
    },
  },
}));

const NavBarMain = ({ tabs }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box>
        <Link href="/" underline="none">
          <Logo />
        </Link>

        <NavMenu />
      </Box>
    </div>
  );
};

export default NavBarMain;
