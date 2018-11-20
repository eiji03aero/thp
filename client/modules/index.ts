import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { terminalReducer, TerminalActions, TerminalStoreState } from './Terminal';
import { systemReducer, SystemActions, SystemStoreState } from "./System";
import { fileSystemReducer, FileSystemActions, FileSystemStoreState } from "./FileSystem";
import { userReducer, UserStoreState } from "./User";

export type RootActions =
  | TerminalActions
  | SystemActions
  | FileSystemActions;

export interface RootStoreState {
  terminal: TerminalStoreState;
  system: SystemStoreState;
  fileSystem: FileSystemStoreState;
  user: UserStoreState;
}

export const createRootReducer = (history: any) => combineReducers({
  router: connectRouter(history),
  terminal: terminalReducer,
  system: systemReducer,
  fileSystem: fileSystemReducer,
  user: userReducer,
});
