import { put, select, takeEvery } from "redux-saga/effects";
import * as _ from "lodash";

import { POST_CURRENT_MESSAGE } from "../modules/Terminal";
import * as terminalActions from '../modules/Terminal';

export function* watchPostCurrentMessage () {
  yield takeEvery(POST_CURRENT_MESSAGE, postCurrentMessage);
}

function* postCurrentMessage () {
  const {
    terminal: { prompt, currentMessage: bareCurrentMessage },
  } = yield select();

  const currentMessage = _.trim(bareCurrentMessage);

  yield put(terminalActions.addMessage({
    type: 'user',
    texts: [
      ...prompt,
      { text: currentMessage },
    ],
  }));

  yield put(terminalActions.clearCurrentMessage());
};
