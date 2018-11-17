import { all } from "redux-saga/effects";

import { watchBootApp } from "./bootApp";
import { watchSubmitPrompt } from "./submitPrompt";

export function* rootSaga () {
  yield all([
    watchBootApp(),
    watchSubmitPrompt(),
  ]);
}
