import { all } from "redux-saga/effects";

import { watchBootApp } from "./bootApp";
import { watchSubmitPrompt } from "./submitPrompt";
import { detectKeyIntoPrompt } from "./detectKeyIntoPrompt";
import { watchPostCurrentMessage } from "./postCurrentMessage";

export function* rootSaga () {
  yield all([
    watchBootApp(),
    watchSubmitPrompt(),
    detectKeyIntoPrompt(),
    watchPostCurrentMessage(),
  ]);
}
