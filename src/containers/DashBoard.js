import React, { Component } from "react";
import { connect } from "react-redux";
import DashboardMain from "../components/dashboard/DashboardMain";
import NavBarMain from "../components/Navbar.js/NavBarMain";
import {
  START_CREATE_FORM,
  START_GET_USER_FORMS,
} from "../constants/FormConstants";

class DashBoard extends Component {
  componentDidMount() {
    const { getUserForms, user } = this.props;

    console.log(user);
    if (user._id !== undefined) {
      const _id = user._id;
      getUserForms(_id);
    }
  }

  render() {
    const { createForm, user, isFormLoading, formData, userForms } = this.props;

    return (
      <>
        <NavBarMain />
        <DashboardMain
          user={user}
          createForm={createForm}
          formData={formData}
          isFormLoading={isFormLoading}
          userForms={userForms}
        />
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.user.userData,
  userDataLoading: state.user.userDataLoading,
  isFormLoading: state.form.isFormLoading,
  formData: state.form.formData,
  userForms: state.form.userForms,
  error: state.user.error,
});

const mapDispatchToProps = (dispatch) => ({
  createForm: (_id) => dispatch({ type: START_CREATE_FORM, _id }),
  getUserForms: (_id) => dispatch({ type: START_GET_USER_FORMS, _id }),
});
export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
