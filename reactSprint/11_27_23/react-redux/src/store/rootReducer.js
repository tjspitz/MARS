import { combineReducers } from "redux";
import bankReducer from "./bankReducer";
import customerReducer from "./customerReducer";

export const rootReducer = combineReducers({
  bankReducer,
  customerReducer,
});
