import { combineReducers } from "redux";
import component from "./component";
import buttonComponent from "./buttonComponent";

const reducers = {
  component,
  buttonComponent,
};

export default combineReducers({
  ...reducers,
});
