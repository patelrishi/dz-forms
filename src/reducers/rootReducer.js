import { combineReducers } from "redux";
import { user } from "./User/UserReducer";
import { form } from "./formReducer/FormReducer";

export default combineReducers({ user, form });
