import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import { RootStoreState } from "../modules";
import { TerminalPage } from "../pages/TerminalPage";
import * as actions from "../modules/Terminal";

const mapStateToProps = ({ terminal, fileSystem, user }: RootStoreState) => ({
  prompt: terminal.prompt,
  currentMessage: terminal.currentMessage,
  cursorPosition: terminal.cursorPosition,
  messages: terminal.messages,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onUpdateCurrentMessage: (text: string) => dispatch(actions.updateCurrentMessage(text)),
  onUpdatePromptCursorPosition: (position: number) => dispatch(actions.updatePromptCursorPosition(position)),
  onSubmitPrompt: () => dispatch(actions.submitPrompt()),
  onDetectKeyIntoPrompt: (e: React.KeyboardEvent) => dispatch(actions.detectKeyIntoPrompt(e)),
});

export const TerminalPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TerminalPage);
