import React from "react";
import { connect } from "react-redux";
import DashboardMain from "../components/dashboard/DashboardMain";
import NavBarMain from "../components/Navbar.js/NavBarMain";
import { START_CREATE_FORM } from "../constants/FormConstants";

const DashBoard = ({ createForm, user, isFormLoading, formData }) => {
  return (
    <div>
      <NavBarMain />
      <DashboardMain
        user={user}
        createForm={createForm}
        formData={formData}
        isFormLoading={isFormLoading}
      />
    </div>
  );
};

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
export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
