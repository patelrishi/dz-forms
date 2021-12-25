import { call, put, takeEvery } from "redux-saga/effects";
import { createForm } from "../../actions/FormApis";
import {
  ERROR_CREATE_FORM,
  START_CREATE_FORM,
  SUCCESS_CREATE_FORM,
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
