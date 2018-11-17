import { delay } from "redux-saga";
import { put, select, takeEvery } from "redux-saga/effects";

import { BOOT_APP } from "../modules/System";
import * as systemActions from '../modules/System';
import * as fileSystemActions from "../modules/FileSystem";
import * as terminalActions from '../modules/Terminal';

import { initialFileNodes, homeDirectory } from "../utils/initialFileNodes";

export function* watchBootApp () {
  yield takeEvery(BOOT_APP, bootApp);
}

function* bootApp () {
  const {
    user: { name: userName }
  } = yield select();

  yield put(systemActions.beginBootApp());
  yield put(fileSystemActions.setRootChildren(initialFileNodes));
  yield put(fileSystemActions.setCurrentDirectory(homeDirectory));
  yield put(terminalActions.updatePromptStatus({
    userName: userName, directoryName: homeDirectory.name
  }));

  yield delay(4000);

  yield put(systemActions.completeBootApp());
  yield put(terminalActions.addMessage({
    type: 'system',
    texts: [ { text: 'log into ssh client'} ],
  }));
  yield put(terminalActions.addMessage({
    type: 'system',
    texts: [ { text: 'please wait...' } ],
  }));
  yield put(terminalActions.addMessage({
    type: 'system',
    texts: [ { text: 'log in succeeded!' } ],
  }));
};
