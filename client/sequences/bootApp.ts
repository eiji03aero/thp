import { Action, ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

import { RootStoreState, RootActions } from "../modules";
import * as systemActions from '../modules/System';
import * as fileSystemActions from "../modules/FileSystem";
import * as terminalActions from '../modules/Terminal';

import { Directory } from "../models/Directory";
import { TextFile } from "../models/Files";
import { Message } from "../models/Message";

import { initialFileNodes, homeDirectory } from "../utils/initialFileNodes";


export const bootApp: ActionCreator<ThunkAction<void, RootStoreState, null, RootActions>> = () => (dispatch, getState) => {
  const {
    user: { name: userName }
  } = getState();

  dispatch(systemActions.beginBootApp());
  dispatch(fileSystemActions.setRootChildren(initialFileNodes));
  dispatch(fileSystemActions.setCurrentDirectory(homeDirectory));
  dispatch(terminalActions.updatePromptStatus({
    userName: userName, directoryName: homeDirectory.name
  }));

  setTimeout(() => {
    dispatch(systemActions.completeBootApp());
    dispatch(terminalActions.addMessage({
      type: 'system',
      texts: [ { text: 'log into ssh client'} ],
    }));
    dispatch(terminalActions.addMessage({
      type: 'system',
      texts: [ { text: 'please wait...' } ],
    }));
    dispatch(terminalActions.addMessage({
      type: 'system',
      texts: [ { text: 'log in succeeded!' } ],
    }));
  }, 500);
};
