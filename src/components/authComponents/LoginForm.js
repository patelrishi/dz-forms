import React, { useEffect, useState } from "react";
import { Button, CircularProgress, Grid, makeStyles } from "@material-ui/core";
import CommonTextField from "../common/textfields/CommonTextField";
import { H5, H6 } from "../common/typography/Header";
import { Body1 } from "../common/typography/Typography";
import { connect } from "react-redux";
import { START_USER_LOGIN } from "../../constants/UserConstants";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  loginRoot: {
    // width: 200,
    maxWidth: 340,
    margin: "auto",
    height: "fit-content",
    borderRadius: 10,
    background: "#ffffff",
    marginTop: 80,
    boxShadow:
      "0 4px 20px 0px rgb(0 0 0 / 14%), 0 7px 12px -5px rgb(156 39 176 / 46%)",
    "&>div": {
      padding: "40px 20px",
      "&>h6": {
        color: "#f4534c",
        textAlign: "center",
      },
      "&>div": {
        margin: "8px 0",
      },
      "&>h5": {
        textAlign: "center",
      },
      "&>p": {
        textAlign: "center",
        margin: "8px 0",
        "&>a": {
          textDecoration: "none",
          color: "#9c27b0",
        },
      },
      "&>button": {
        width: "100%",
      },
    },
  },
}));
const LoginForm = ({ login, userDataLoading, user, error }) => {
  const classes = useStyles();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [apiError, setapiError] = useState("");

  useEffect(() => {
    if (error !== "") {
      setapiError(error);
    }
  }, [error, userDataLoading]);
  // const { enqueueSnackbar } = useSnackbar();
  const handleSubmit = (e) => {
    e.preventDefault();
    let dataError = 0;

    if (email === "") {
      dataError = 1;
      setEmailError("Please enter the email..!");
    }

    // passwordValidator;
    if (password === "") {
      dataError = 1;
      setPasswordError("Please enter the Password..!");
    }

    if (dataError === 0) {
      login(email, password);
    }
  };
  useEffect(() => {
    if (
      window.localStorage.getItem("token") !== null &&
      window.localStorage.getItem("token") !== undefined
    ) {
      window.location.href = "/dashboard";
    }
  }, [user, userDataLoading]);
  return (
    <Grid item xs={10} md={4} className={classes.loginRoot}>
      <div>
        <H5 bold>Login</H5>
        <CommonTextField
          variant="outlined"
          label="email"
          value={email}
          error={emailError !== ""}
          onChange={(e) => {
            setEmailError("");
            setemail(e.target.value);
            setapiError("");
          }}
        />
        <H6>{emailError}</H6>
        <CommonTextField
          variant="outlined"
          label="password"
          type="password"
          value={password}
          error={passwordError !== ""}
          onChange={(e) => {
            setPasswordError("");
            setpassword(e.target.value);
            setapiError("");
          }}
        />
        <H6>{passwordError}</H6>
        <H6>{apiError}</H6>
        <Button
          startIcon={
            userDataLoading && <CircularProgress size={15} color="primary" />
          }
          color="primary"
          onClick={handleSubmit}
        >
          Get started
        </Button>
        <Body1 medium>
          New Here? <Link to="/register">Register</Link>
        </Body1>
      </div>
    </Grid>
  );
};
const mapStateToProps = (state, ownProps) => ({
  user: state.user.userData,
  userDataLoading: state.user.userDataLoading,
  error: state.user.error,
});

const mapDispatchToProps = (dispatch) => ({
  login: (email, password) =>
    dispatch({ type: START_USER_LOGIN, email, password }),
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
