import { connect } from "react-redux";

import { TerminalPage } from "../pages/TerminalPage.js";
import { submitPrompt } from "../sequences/submitPrompt.js";
import * as actions from "../modules/Terminal.js";

const mapStateToProps = ({ terminal, fileSystem, user }) => ({
  currentMessage: terminal.currentMessage,
  cursorPosition: terminal.cursorPosition,
  messages: terminal.messages,
  currentDirectory: fileSystem.currentDirectory,
  userName: user.name,
});

const mapDispatchToProps = (dispatch) => ({
  onTypeIntoPrompt: text => dispatch(actions.typeIntoPrompt(text)),
  onUpdatePromptCursorPosition: position => dispatch(actions.updatePromptCursorPosition(position)),
  onSubmitPrompt: () => dispatch(submitPrompt()),
});

export const TerminalPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TerminalPage);
