import { put, select, takeEvery } from "redux-saga/effects";
import { push } from "connected-react-router";
import * as _ from "lodash";

import { SUBMIT_PROMPT } from "../modules/Terminal";
import * as terminalActions from '../modules/Terminal';
import * as fileSystemActions from '../modules/FileSystem';
import { executeCommand } from "../models/Commands";

export function* watchSubmitPrompt () {
  yield takeEvery(SUBMIT_PROMPT, submitPrompt);
}

function* submitPrompt () {
  const {
    terminal: { currentMessage: bareCurrentMessage },
    user: { name: userName },
    fileSystem: { currentDirectory },
  } = yield select();

  const currentMessage = _.trim(bareCurrentMessage);

  yield put(terminalActions.postCurrentMessage());


  const result = executeCommand({
    input: currentMessage,
    currentDirectory: currentDirectory
  });

  for (var message of result.messages) {
    yield put(terminalActions.addMessage(message));
  }

  if (result.data.navigateTo) {
    yield put(push(result.data.navigateTo));
  }

  if (result.data.moveTo) {
    yield put(fileSystemActions.setCurrentDirectory(result.data.moveTo));
    yield put(terminalActions.updatePromptStatus({ userName, directoryName: result.data.moveTo.name }));
  }
};
