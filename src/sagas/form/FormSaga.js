import { call, put, takeEvery } from "redux-saga/effects";
import { createForm, getFormDetails } from "../../actions/FormApis";
import {
  ERROR_CREATE_FORM,
  ERROR_GET_FORM_DETAILS,
  START_CREATE_FORM,
  START_GET_FORM_DETAILS,
  SUCCESS_CREATE_FORM,
  SUCCESS_GET_FORM_DETAILS,
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
