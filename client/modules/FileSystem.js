import { Directory } from "../models/Directory.js";

/* -------------------- Constants -------------------- */
const SET_CURRENT_DIRECTORY = 'SET_CURRENT_DIRECTORY';
const SET_ROOT_CHILDREN = 'SET_ROOT_CHILDREN';

/* -------------------- Actions -------------------- */
export const setCurrentDirectory = (directory) => ({
  type: SET_CURRENT_DIRECTORY,
  payload: {
    currentDirectory: directory,
  },
});

export const setRootChildren = (children) => ({
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

const initialState = {
  root: rootDirectory,
  currentDirectory: rootDirectory,
};

/* -------------------- Reducers -------------------- */

export const fileSystemReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_CURRENT_DIRECTORY:
      return { ...state, currentDirectory: action.payload.currentDirectory };

    case SET_ROOT_CHILDREN:
      return { ...state, root: { ...state.root, children: action.payload.children } };

    default:
      return state;
  }
};
