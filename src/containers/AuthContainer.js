import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import NavBarMain from "../components/Navbar.js/NavBarMain";
import LoginForm from "../components/authComponents/LoginForm";
import RegisterForm from "../components/authComponents/RegisterForm";

const useStyles = makeStyles((theme) => ({
  authRoot: {
    height: "100vh",
    // overflow: "hidden",
    "&>div": {
      paddingTop: 50,
      // background: `url(${process.env.PUBLIC_URL}/images/auth-bg.png)`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      height: "100vh",
      // height: "95vh",
    },
  },
}));
const AuthContainer = () => {
  const classes = useStyles();
  return (
    <>
      <NavBarMain />
      <div className={classes.authRoot}>
        <Grid container>
          {window.location.href.split("/").at(-1) === "login" && <LoginForm />}
          {window.location.href.split("/").at(-1) === "register" && (
            <RegisterForm />
          )}
        </Grid>
      </div>
    </>
  );
};

export default AuthContainer;
