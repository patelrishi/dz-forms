import {
  START_CREATE_FORM,
  SUCCESS_CREATE_FORM,
  ERROR_CREATE_FORM,
  START_GET_FORM_DETAILS,
  SUCCESS_GET_FORM_DETAILS,
  ERROR_GET_FORM_DETAILS,
  START_UPDATE_FORM_DETAILS,
  SUCCESS_UPDATE_FORM_DETAILS,
  ERROR_UPDATE_FORM_DETAILS,
  START_GET_USER_FORMS,
  SUCCESS_GET_USER_FORMS,
  ERROR_GET_USER_FORMS,
  START_SUBMIT_FORM,
  SUCCESS_SUBMIT_FORM,
  ERROR_SUBMIT_FORM,
  START_SINGLE_FORM_RESPONSE,
  SUCCESS_SINGLE_FORM_RESPONSE,
  ERROR_SINGLE_FORM_RESPONSE,
  START_GET_SINGLE_RESPONSE,
  SUCCESS_GET_SINGLE_RESPONSE,
  ERROR_GET_SINGLE_RESPONSE,
} from "../../constants/FormConstants";

const initState = {
  isFormLoading: false,
  isFormUpdating: false,
  formData: {},
  error: "",
  userForms: [],
  isUserFormsListLoading: false,
  submitResponse: "",
  formResponses: [],
  isFormResponseLoading: false,
  singleResponse: "",
  isResponseLoading: false,
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
        // isFormLoading: true,
        formData: {},
      };
    case SUCCESS_GET_FORM_DETAILS:
      return {
        ...previousState,
        // isFormLoading: false,
        formData: action.data,
      };
    case ERROR_GET_FORM_DETAILS:
      return {
        ...previousState,
        // isFormLoading: false,
        error: action.data,
      };

    case START_UPDATE_FORM_DETAILS:
      return {
        ...previousState,
        isFormUpdating: true,
        formData: {},
      };
    case SUCCESS_UPDATE_FORM_DETAILS:
      return {
        ...previousState,
        isFormUpdating: false,
        formData: action.data,
      };
    case ERROR_UPDATE_FORM_DETAILS:
      return {
        ...previousState,
        isFormUpdating: false,
        error: action.data,
      };

    case START_GET_USER_FORMS:
      return {
        ...previousState,
        isUserFormsListLoading: true,
        userForms: {},
      };
    case SUCCESS_GET_USER_FORMS:
      return {
        ...previousState,
        isUserFormsListLoading: false,
        userForms: action.data,
      };
    case ERROR_GET_USER_FORMS:
      return {
        ...previousState,
        isUserFormsListLoading: false,
        error: action.data,
      };

    case START_SUBMIT_FORM:
      return {
        ...previousState,
        submitResponse: "",
      };
    case SUCCESS_SUBMIT_FORM:
      return {
        ...previousState,
        submitResponse: action.response,
      };
    case ERROR_SUBMIT_FORM:
      return {
        ...previousState,
        error: action.response,
      };

    case START_SINGLE_FORM_RESPONSE:
      return {
        ...previousState,
        formResponses: [],
        isFormResponseLoading: true,
      };
    case SUCCESS_SINGLE_FORM_RESPONSE:
      return {
        ...previousState,
        isFormResponseLoading: false,
        formResponses: action.response,
      };
    case ERROR_SINGLE_FORM_RESPONSE:
      return {
        ...previousState,
        error: action.response,
      };

    case START_GET_SINGLE_RESPONSE:
      return {
        ...previousState,
        singleResponse: "",
        isResponseLoading: true,
      };
    case SUCCESS_GET_SINGLE_RESPONSE:
      return {
        ...previousState,
        isResponseLoading: false,
        singleResponse: action.response,
      };
    case ERROR_GET_SINGLE_RESPONSE:
      return {
        ...previousState,
        isResponseLoading: false,
        error: action.response,
      };
    default:
      return previousState || initState;
  }
};
