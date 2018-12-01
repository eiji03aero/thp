import { delay } from "redux-saga";
import { put, select, take, takeEvery, call, race } from "redux-saga/effects";

import { Completer } from "../models/Completer";
import { Suggester } from "../models/Suggester";
import { Directory } from "../models/Directory";
import { DETECT_KEY_INTO_PROMPT } from "../modules/Terminal";
import * as terminalActions from "../modules/Terminal";

function* inputCompletion (currentMessage: string, currentDirectory: Directory) {
  const completerResult = Completer.execute(currentMessage, currentDirectory);
  if (completerResult.completed) {
    yield put(terminalActions.updateCurrentMessage(completerResult.completedText));
    yield put(terminalActions.updatePromptCursorPosition(completerResult.completedText.length));
  }

  const { action } = yield race({
    action: take(DETECT_KEY_INTO_PROMPT),
    timout: call(delay, 1000),
  });

  if (action) {
    const suggesterResult = Suggester.execute(currentMessage, currentDirectory);
    if (suggesterResult.suggested) {
      yield put(terminalActions.postCurrentMessage());
      yield put(terminalActions.addMessage({ type:'system', texts: suggesterResult.suggestions }));
      yield put(terminalActions.updateCurrentMessage(currentMessage));
    }
  }
}

export function* watchDetectKeyIntoPrompt () {
  yield takeEvery(DETECT_KEY_INTO_PROMPT, detectKeyIntoPrompt);
}

type DetectKeyIntoPromptAction = ReturnType<typeof terminalActions.detectKeyIntoPrompt>;
function* detectKeyIntoPrompt (action: DetectKeyIntoPromptAction) {
  const {
    terminal: { currentMessage },
    fileSystem: { currentDirectory },
  } = yield select();
  const { key } = action.payload.event;

  switch (key) {
    case "Tab":
      yield call(inputCompletion, currentMessage, currentDirectory);
  }
}
