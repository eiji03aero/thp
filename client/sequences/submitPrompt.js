import * as terminalActions from '../modules/Terminal.js';

export const submitPrompt = () => (dispatch, getState) => {
  const {
    terminal: { currentMessage },
    user: { name },
    fileSystem: { currentDirectory },
  } = getState();

  dispatch(terminalActions.clearCurrentMessage());
  dispatch(terminalActions.addMessage({
    type: 'user',
    text: `${name}:${currentDirectory.name}$ ${currentMessage}`,
  }));
};
