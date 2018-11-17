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
  onTypeIntoPrompt: (text: string) => dispatch(actions.typeIntoPrompt(text)),
  onUpdatePromptCursorPosition: (position: number) => dispatch(actions.updatePromptCursorPosition(position)),
  onSubmitPrompt: () => dispatch(actions.submitPrompt()),
});

export const TerminalPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TerminalPage);
