import { connect } from "react-redux";

import { TerminalPage } from "../pages/TerminalPage";
import { submitPrompt } from "../sequences/submitPrompt";
import * as actions from "../modules/Terminal";

const mapStateToProps = ({ terminal, fileSystem, user }) => ({
  prompt: terminal.prompt,
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
