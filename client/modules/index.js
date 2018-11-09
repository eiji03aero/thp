import { combineReducers } from "redux";
import { terminalReducer } from './Terminal.js';
import { systemReducer } from "./System.js";
import { fileSystemReducer } from "./FileSystem.js";
import { userReducer } from "./User.js";

export const rootReducer = combineReducers({
  terminal: terminalReducer,
  system: systemReducer,
  fileSystem: fileSystemReducer,
  user: userReducer,
});
