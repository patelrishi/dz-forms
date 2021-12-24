import { all } from "redux-saga/effects";
import {
  userDetailsWatcher,
  userLoginWatcher,
  userRegisterWatcher,
} from "./user/UserSaga";

export default function* rootSaga() {
  yield all([userLoginWatcher(), userRegisterWatcher(), userDetailsWatcher()]);
}
