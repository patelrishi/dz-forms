import React, { Component } from "react";
import NavBarMain from "../components/Navbar.js/NavBarMain";
import {
  START_GET_FORM_DETAILS,
  START_SUBMIT_FORM,
  START_UPDATE_FORM_DETAILS,
} from "../constants/FormConstants";
import { connect } from "react-redux";
import FormViewMain from "../components/forms/FormViewMain";
class FormViewContainer extends Component {
  componentDidMount() {
    const { getFormDetails, user } = this.props;
    const id = window.location.href.split("/")[4];

    if (id !== undefined) {
      getFormDetails(id);
    }
  }
  render() {
    const { user, formData, updateFormDetails, submitForm, submitResponse } =
      this.props;
    return (
      <>
        {/* <NavBarMain /> */}
        <FormViewMain
          formData={formData}
          updateFormDetails={updateFormDetails}
          submitForm={submitForm}
          user={user}
          submitResponse={submitResponse}
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
  submitResponse: state.form.submitResponse,
  error: state.user.error,
});

const mapDispatchToProps = (dispatch) => ({
  getFormDetails: (_id, creator_id) =>
    dispatch({ type: START_GET_FORM_DETAILS, _id, creator_id }),

  updateFormDetails: (data) =>
    dispatch({ type: START_UPDATE_FORM_DETAILS, data }),

  submitForm: (data) => dispatch({ type: START_SUBMIT_FORM, data }),
});
export default connect(mapStateToProps, mapDispatchToProps)(FormViewContainer);
