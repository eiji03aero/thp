import * as systemActions from '../modules/System.js';
import * as fileSystemActions from "../modules/FileSystem.js";
import * as terminalActions from '../modules/Terminal.js';

import { Directory } from "../models/Directory.js";
import { TextFile } from "../models/Files";

import { initialFileNodes, homeDirectory } from "../utils/initialFileNodes.js";

export const bootApp = () => dispatch => {
  dispatch(systemActions.beginBootApp());
  dispatch(fileSystemActions.setRootChildren(initialFileNodes));
  dispatch(fileSystemActions.setCurrentDirectory(homeDirectory));

  setTimeout(() => {
    dispatch(systemActions.completeBootApp());
    dispatch(terminalActions.addMessage({
      type: 'system',
      text: 'Log into ssh client',
    }));
    dispatch(terminalActions.addMessage({
      type: 'system',
      text: 'please wait ...',
    }));
    dispatch(terminalActions.addMessage({
      type: 'system',
      text: 'Log in succeeded!',
    }));
  }, 4000);
};
