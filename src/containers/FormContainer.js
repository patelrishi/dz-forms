import React, { Component } from "react";
import NavBarMain from "../components/Navbar.js/NavBarMain";
import FormMain from "../components/forms/FormMain";
import { MemoryRouter, useParams } from "react-router-dom";
import {
  START_CREATE_FORM,
  START_GET_FORM_DETAILS,
  START_UPDATE_FORM_DETAILS,
} from "../constants/FormConstants";
import { connect } from "react-redux";
class FormContainer extends Component {
  componentDidMount() {
    const { getFormDetails, user, formData } = this.props;
    const id = window.location.pathname.split("/").at(-1);

    if (user._id !== undefined && id !== undefined) {
      const creator_id = user._id;
      getFormDetails(id, creator_id);
    }
  }
  render() {
    const { user, formData, updateFormDetails } = this.props;
    return (
      <>
        <NavBarMain tabs={["questions", "responses", "settings"]} />
        <FormMain
          formData={formData}
          updateFormDetails={updateFormDetails}
          user={user}
        />
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.user.userData,
  userDataLoading: state.user.userDataLoading,
  isFormLoading: state.form.isFormLoading,
  formData: state.form.formData.form,
  error: state.user.error,
});

const mapDispatchToProps = (dispatch) => ({
  getFormDetails: (_id, creator_id) =>
    dispatch({ type: START_GET_FORM_DETAILS, _id, creator_id }),

  updateFormDetails: (data) =>
    dispatch({ type: START_UPDATE_FORM_DETAILS, data }),
});
export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
