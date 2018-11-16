import * as _ from "lodash";
import * as terminalActions from '../modules/Terminal';
import * as fileSystemActions from '../modules/FileSystem';
import { executeCommand } from "../models/Commands";

export const submitPrompt = () => (dispatch, getState) => {
  const {
    terminal: { prompt, currentMessage },
    user: { name: userName },
    fileSystem: { currentDirectory },
  } = getState();

  dispatch(terminalActions.addMessage({
    type: 'user',
    texts: [
      ...prompt,
      { text: currentMessage },
    ],
  }));


  const result = executeCommand({
    input: currentMessage,
    currentDirectory: currentDirectory
  });

  _.each(result.messages, message => {
    dispatch(terminalActions.addMessage(message));
  });

  if (result.moveTo) {
    dispatch(fileSystemActions.setCurrentDirectory(result.moveTo));
    dispatch(terminalActions.updatePromptStatus({ userName, directoryName: result.moveTo.name }));
  }

  dispatch(terminalActions.clearCurrentMessage());
};
