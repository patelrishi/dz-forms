import {
  START_CREATE_FORM,
  SUCCESS_CREATE_FORM,
  ERROR_CREATE_FORM,
  START_GET_FORM_DETAILS,
  SUCCESS_GET_FORM_DETAILS,
  ERROR_GET_FORM_DETAILS,
} from "../../constants/FormConstants";

const initState = {
  isFormLoading: false,
  formData: {},
  error: "",
};

export const form = (previousState, action) => {
  switch (action.type) {
    case START_CREATE_FORM:
      return {
        ...previousState,
        isFormLoading: true,
        formData: {},
      };
    case SUCCESS_CREATE_FORM:
      return {
        ...previousState,
        isFormLoading: false,
        formData: action.data,
      };
    case ERROR_CREATE_FORM:
      return {
        ...previousState,
        isFormLoading: false,
        error: action.data,
      };

    case START_GET_FORM_DETAILS:
      return {
        ...previousState,
        isFormLoading: true,
        formData: {},
      };
    case SUCCESS_GET_FORM_DETAILS:
      return {
        ...previousState,
        isFormLoading: false,
        formData: action.data,
      };
    case ERROR_GET_FORM_DETAILS:
      return {
        ...previousState,
        isFormLoading: false,
        error: action.data,
      };
    default:
      return previousState || initState;
  }
};
