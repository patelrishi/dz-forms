import React, { Component } from "react";
import NavBarMain from "../components/Navbar.js/NavBarMain";
import FormMain from "../components/forms/FormMain";
import { MemoryRouter, useParams } from "react-router-dom";
import { START_CREATE_FORM } from "../constants/FormConstants";
import { connect } from "react-redux";
class FormContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const id = window.location.pathname.split("/").at(-1);
    if (id !== undefined) {
    }
  }
  render() {
    return (
      <>
        <NavBarMain tabs={["questions", "responses", "settings"]} />
        <FormMain />
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.user.userData,
  userDataLoading: state.user.userDataLoading,
  isFormLoading: state.form.isFormLoading,
  formData: state.form.formData,
  error: state.user.error,
});

const mapDispatchToProps = (dispatch) => ({
  createForm: (_id) => dispatch({ type: START_CREATE_FORM, _id }),
});
export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
