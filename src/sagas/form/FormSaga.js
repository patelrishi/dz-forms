import { call, put, takeEvery } from "redux-saga/effects";
import {
  createForm,
  getFormDetails,
  getSingleFormResponse,
  getSingleResponse,
  getUserFormList,
  submitResponse,
  updateFormDetails,
} from "../../actions/FormApis";
import {
  ERROR_CREATE_FORM,
  ERROR_GET_FORM_DETAILS,
  ERROR_GET_SINGLE_RESPONSE,
  ERROR_GET_USER_FORMS,
  ERROR_SINGLE_FORM_RESPONSE,
  ERROR_SUBMIT_FORM,
  ERROR_UPDATE_FORM_DETAILS,
  START_CREATE_FORM,
  START_GET_FORM_DETAILS,
  START_GET_SINGLE_RESPONSE,
  START_GET_USER_FORMS,
  START_SINGLE_FORM_RESPONSE,
  START_SUBMIT_FORM,
  START_UPDATE_FORM_DETAILS,
  SUCCESS_CREATE_FORM,
  SUCCESS_GET_FORM_DETAILS,
  SUCCESS_GET_SINGLE_RESPONSE,
  SUCCESS_GET_USER_FORMS,
  SUCCESS_SINGLE_FORM_RESPONSE,
  SUCCESS_SUBMIT_FORM,
  SUCCESS_UPDATE_FORM_DETAILS,
} from "../../constants/FormConstants";

function* formCreateWorker({ _id }) {
  const response = yield call(createForm, _id);

  try {
    if (response) {
      yield put({
        type: SUCCESS_CREATE_FORM,
        data: response,
      });
    } else {
      yield put({
        type: ERROR_CREATE_FORM,
        data: response,
      });
    }
  } catch (error) {
    yield put({
      type: ERROR_CREATE_FORM,
      data: response,
    });
  }
}
export function* formCreateWatcher() {
  yield takeEvery(START_CREATE_FORM, formCreateWorker);
}

function* formDetailsWorker({ _id, creator_id }) {
  const response = yield call(getFormDetails, _id, creator_id);

  try {
    if (response) {
      yield put({
        type: SUCCESS_GET_FORM_DETAILS,
        data: response,
      });
    } else {
      yield put({
        type: ERROR_GET_FORM_DETAILS,
        data: response,
      });
    }
  } catch (error) {
    yield put({
      type: ERROR_GET_FORM_DETAILS,
      data: response,
    });
  }
}
export function* formDetailsWatcher() {
  yield takeEvery(START_GET_FORM_DETAILS, formDetailsWorker);
}

function* formUpdateWorker({ _id, data }) {
  const response = yield call(updateFormDetails, data);

  try {
    if (response) {
      yield put({
        type: SUCCESS_UPDATE_FORM_DETAILS,
        data: response,
      });
    } else {
      yield put({
        type: ERROR_UPDATE_FORM_DETAILS,
        data: response,
      });
    }
  } catch (error) {
    yield put({
      type: ERROR_UPDATE_FORM_DETAILS,
      data: response,
    });
  }
}
export function* formUpdateWatcher() {
  yield takeEvery(START_UPDATE_FORM_DETAILS, formUpdateWorker);
}

function* getUserFormListWorker({ _id }) {
  const response = yield call(getUserFormList, _id);
  try {
    if (response) {
      yield put({
        type: SUCCESS_GET_USER_FORMS,
        data: response.form,
      });
    } else {
      yield put({
        type: ERROR_GET_USER_FORMS,
        data: response,
      });
    }
  } catch (error) {
    yield put({
      type: ERROR_GET_USER_FORMS,
      data: response,
    });
  }
}

export function* getUserFormListWatcher() {
  yield takeEvery(START_GET_USER_FORMS, getUserFormListWorker);
}

function* formSubmitWorker({ data }) {
  const response = yield call(submitResponse, data);
  try {
    if (response) {
      yield put({
        type: SUCCESS_SUBMIT_FORM,
        response: "success",
      });
    } else {
      yield put({
        type: ERROR_SUBMIT_FORM,
        data: response,
      });
    }
  } catch (error) {
    yield put({
      type: ERROR_SUBMIT_FORM,
      data: response,
    });
  }
}

export function* formSubmitWatcher() {
  yield takeEvery(START_SUBMIT_FORM, formSubmitWorker);
}

function* singleFormResponseWorker({ _id }) {
  const response = yield call(getSingleFormResponse, _id);
  try {
    if (response) {
      yield put({
        type: SUCCESS_SINGLE_FORM_RESPONSE,
        response: response,
      });
    } else {
      yield put({
        type: ERROR_SINGLE_FORM_RESPONSE,
        data: response,
      });
    }
  } catch (error) {
    yield put({
      type: ERROR_SINGLE_FORM_RESPONSE,
      data: response,
    });
  }
}

export function* singleFormResponseWatcher() {
  yield takeEvery(START_SINGLE_FORM_RESPONSE, singleFormResponseWorker);
}

function* singleResponseWorker({ _id }) {
  const data = yield call(getSingleResponse, _id);
  try {
    if (data) {
      yield put({
        type: SUCCESS_GET_SINGLE_RESPONSE,
        response: data.response,
      });
    } else {
      yield put({
        type: ERROR_GET_SINGLE_RESPONSE,
        data: data,
      });
    }
  } catch (error) {
    yield put({
      type: ERROR_GET_SINGLE_RESPONSE,
      data: data,
    });
  }
}

export function* singleResponseWatcher() {
  yield takeEvery(START_GET_SINGLE_RESPONSE, singleResponseWorker);
}
