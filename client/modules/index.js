import { combineReducers } from "redux";
import { terminalReducer } from './Terminal.js';

export const rootReducer = combineReducers({
  terminal: terminalReducer
});
