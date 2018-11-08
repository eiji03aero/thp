import { combineReducers } from "redux";
import { terminalReducer } from './Terminal.js';
import { systemReducer } from "./System.js";

export const rootReducer = combineReducers({
  terminal: terminalReducer,
  system: systemReducer,
});
