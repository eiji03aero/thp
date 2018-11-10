import _ from "lodash";
import * as terminalActions from '../modules/Terminal.js';
import { executeCommand } from "../models/Commands";

export const submitPrompt = () => (dispatch, getState) => {
  const {
    terminal: { currentMessage },
    user: { name },
    fileSystem: { currentDirectory },
  } = getState();

  dispatch(terminalActions.addMessage({
    type: 'user',
    text: `${name}:${currentDirectory.name}$ ${currentMessage}`,
  }));


  const result = executeCommand({
    message: currentMessage,
    currentDirectory: currentDirectory
  });

  _.each(result.messages, message => {
    dispatch(terminalActions.addMessage({
      type: 'system',
      text: message,
    }));
  });

  dispatch(terminalActions.clearCurrentMessage());
};
