import * as _ from "lodash";
import { FileSystemNode } from "../models/FileSystemNode";
import { Directory } from "../models/Directory";

/* -------------------- Constants -------------------- */
export const SET_CURRENT_DIRECTORY = 'SET_CURRENT_DIRECTORY';
export const SET_ROOT_CHILDREN = 'SET_ROOT_CHILDREN';

/* -------------------- Actions -------------------- */
export type FileSystemActions =
  | ReturnType<typeof setCurrentDirectory>
  | ReturnType<typeof setRootChildren>;

export const setCurrentDirectory = (directory: Directory): any => ({
  type: SET_CURRENT_DIRECTORY,
  payload: {
    currentDirectory: directory,
  },
});

export const setRootChildren = (children: FileSystemNode[]): any=> ({
  type: SET_ROOT_CHILDREN,
  payload: {
    children: children,
  },
});

/* -------------------- Initial state -------------------- */
const rootDirectory = new Directory({
  name: 'root',
  children: []
});

export interface FileSystemStoreState {
  root: Directory;
  currentDirectory: Directory;
}

const initialState: FileSystemStoreState = {
  root: rootDirectory,
  currentDirectory: rootDirectory,
};

/* -------------------- Reducers -------------------- */

export const fileSystemReducer = (state: FileSystemStoreState = initialState, action: FileSystemActions) => {
  switch (action.type) {

    case SET_CURRENT_DIRECTORY:
      return { ...state, currentDirectory: action.payload.currentDirectory };

    case SET_ROOT_CHILDREN:
      _.each(action.payload.children, child => state.root.addChild(child));
      return { ...state };

    default:
      return state;
  }
};
