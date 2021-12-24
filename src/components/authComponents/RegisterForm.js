import React, { useEffect, useState } from "react";
import { Button, CircularProgress, Grid, makeStyles } from "@material-ui/core";
import CommonTextField from "../common/textfields/CommonTextField";
import { H5, H6 } from "../common/typography/Header";
import { Body1 } from "../common/typography/Typography";
import { Link } from "react-router-dom";
import {
  START_USER_LOGIN,
  START_USER_REGISTER,
} from "../../constants/UserConstants";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  loginRoot: {
    // width: 200,
    maxWidth: 340,
    margin: "auto",
    height: "fit-content",
    borderRadius: 10,
    background: "#f5f5f5",
    marginTop: 80,
    boxShadow:
      "0 4px 20px 0px rgb(0 0 0 / 14%), 0 7px 12px -5px rgb(156 39 176 / 46%)",
    "&>div": {
      padding: "40px 20px",
      "&>h6": {
        color: "#f4534c",
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
const RegisterForm = ({ userDataLoading, register, user }) => {
  const classes = useStyles();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let dataError = 0;

    if (name === "") {
      dataError = 1;
      setNameError("please enter the name");
    }

    // email validator
    if (email === "") {
      setEmailError("Please enter an email address");
      dataError = 1;
    } else {
      const emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!emailRegex.test(email)) {
        dataError = 1;
        setEmailError("Please enter a valid email address");
      }
    }

    // passwordValidator;
    if (password === "") {
      dataError = 1;
      setPasswordError("Please enter the Password");
    } else if (password.length < 8) {
      dataError = 1;
      setPasswordError("Password length should be at least 8 char");
    }

    if (password !== confirmPassword) {
      dataError = 1;
      setPasswordError("password not match");
    }

    if (dataError === 0) {
      register(name, email, password);
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
        <H5 bold>Register</H5>
        <CommonTextField
          variant="outlined"
          label="name"
          error={nameError !== ""}
          value={name}
          onChange={(e) => {
            setNameError("");
            setname(e.target.value);
          }}
        />
        <H6>{nameError}</H6>
        <CommonTextField
          variant="outlined"
          label="email"
          error={emailError !== ""}
          onChange={(e) => {
            setEmailError("");
            setemail(e.target.value);
          }}
        />
        <H6>{emailError}</H6>
        <CommonTextField
          variant="outlined"
          label="password"
          type="password"
          error={passwordError !== ""}
          onChange={(e) => {
            setPasswordError("");
            setpassword(e.target.value);
          }}
        />
        <H6>{passwordError}</H6>
        <CommonTextField
          variant="outlined"
          label="confirm password"
          type="password"
          error={passwordError !== ""}
          onChange={(e) => {
            setPasswordError("");
            setconfirmPassword(e.target.value);
          }}
        />
        <Button
          color="primary"
          onClick={handleSubmit}
          startIcon={
            userDataLoading && <CircularProgress size={15} color="primary" />
          }
        >
          Get started
        </Button>
        <Body1 medium>
          Already Member? <Link to="/login">Login</Link>
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
  register: (name, email, password) =>
    dispatch({ type: START_USER_REGISTER, name, email, password }),
});
export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
