import { all } from "redux-saga/effects";
import {
  formCreateWatcher,
  formDetailsWatcher,
  formSubmitWatcher,
  formUpdateWatcher,
  getUserFormListWatcher,
} from "./form/FormSaga";
import {
  userDetailsWatcher,
  userLoginWatcher,
  userRegisterWatcher,
} from "./user/UserSaga";

export default function* rootSaga() {
  yield all([
    userLoginWatcher(),
    userRegisterWatcher(),
    userDetailsWatcher(),
    formCreateWatcher(),
    formDetailsWatcher(),
    formUpdateWatcher(),
    getUserFormListWatcher(),
    formSubmitWatcher(),
  ]);
}
