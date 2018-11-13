import * as systemActions from '../modules/System.js';
import * as fileSystemActions from "../modules/FileSystem.js";
import * as terminalActions from '../modules/Terminal.js';

import { Directory } from "../models/Directory.js";
import { TextFile } from "../models/Files";
import { Message } from "../models/Message.js";

import { initialFileNodes, homeDirectory } from "../utils/initialFileNodes.js";

export const bootApp = () => ( dispatch, getState ) => {
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
