import { connect } from "react-redux";

import { TerminalPage } from "../pages/TerminalPage.js";
import * as actions from "../modules/Terminal.js";

const mapStateToProps = ({ terminal, fileSystem }) => ({
  currentMessage: terminal.currentMessage,
  cursorPosition: terminal.cursorPosition,
  messages: terminal.messages,
  prompt: terminal.prompt,
  currentDirectory: fileSystem.currentDirectory,
});

const mapDispatchToProps = (dispatch) => ({
  onTypeIntoPrompt: text => dispatch(actions.typeIntoPrompt(text)),
  onUpdatePromptCursorPosition: position => dispatch(actions.updatePromptCursorPosition(position)),
  onSubmitPrompt: () => dispatch(actions.submitPrompt()),
});

export const TerminalPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TerminalPage);
