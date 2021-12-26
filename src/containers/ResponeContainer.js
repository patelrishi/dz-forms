import React, { Component } from "react";
import { connect } from "react-redux";
import NavBarMain from "../components/Navbar.js/NavBarMain";
import ResponseMain from "../components/response/ResponseMain";
import {
  START_GET_SINGLE_RESPONSE,
  START_SINGLE_FORM_RESPONSE,
} from "../constants/FormConstants";

class ResponeContainer extends Component {
  componentDidMount() {
    const { getFormResponses, getSingleResponse } = this.props;

    if (window.location.href.split("/").at(5) !== "s") {
      const _id = window.location.href.split("/").at(5);
      getFormResponses(_id);
    } else {
      const _id = window.location.href.split("/").at(6);
      getSingleResponse(_id);
      // getFormResponses(_id);
    }
  }
  render() {
    const { formResponses, singleResponse } = this.props;

    return (
      <>
        <NavBarMain />
        <ResponseMain
          formResponses={formResponses}
          singleResponse={singleResponse}
        />
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  formResponses: state.form.formResponses.response,
  singleResponse: state.form.singleResponse,
});

const mapDispatchToProps = (dispatch) => ({
  //   getFormDetails: (_id, creator_id) =>
  //     dispatch({ type: START_GET_FORM_DETAILS, _id, creator_id }),
  getFormResponses: (_id) =>
    dispatch({ type: START_SINGLE_FORM_RESPONSE, _id }),
  getSingleResponse: (_id) =>
    dispatch({ type: START_GET_SINGLE_RESPONSE, _id }),
});
export default connect(mapStateToProps, mapDispatchToProps)(ResponeContainer);
