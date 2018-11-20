import { put, select, takeEvery } from "redux-saga/effects";
import { push } from "connected-react-router";

import { SUBMIT_PROMPT } from "../modules/Terminal";
import * as terminalActions from '../modules/Terminal';
import * as fileSystemActions from '../modules/FileSystem';
import { executeCommand } from "../models/Commands";

export function* watchSubmitPrompt () {
  yield takeEvery(SUBMIT_PROMPT, submitPrompt);
}

function* submitPrompt () {
  const {
    terminal: { prompt, currentMessage },
    user: { name: userName },
    fileSystem: { currentDirectory },
  } = yield select();

  yield put(terminalActions.addMessage({
    type: 'user',
    texts: [
      ...prompt,
      { text: currentMessage },
    ],
  }));

  yield put(terminalActions.clearCurrentMessage());


  const result = executeCommand({
    input: currentMessage,
    currentDirectory: currentDirectory
  });

  for (var message of result.messages) {
    yield put(terminalActions.addMessage(message));
  }

  if (result.data.navigateTo) {
    console.log('navigate: ', result.data.navigateTo);
    yield put(push(result.data.navigateTo));
  }

  if (result.data.moveTo) {
    yield put(fileSystemActions.setCurrentDirectory(result.data.moveTo));
    yield put(terminalActions.updatePromptStatus({ userName, directoryName: result.data.moveTo.name }));
  }
};
