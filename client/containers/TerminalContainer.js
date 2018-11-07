import { connect } from "react-redux";

import { Terminal } from "../components/Terminal.js";
import * as actions from "../modules/Terminal.js";

const mapStateToProps = ({ terminal }) => ({
  currentMessage: terminal.currentMessage,
  cursorPosition: terminal.cursorPosition,
  messages: terminal.messages,
  prompt: terminal.prompt,
});

const mapDispatchToProps = (dispatch) => ({
  onTypeIntoPrompt: text => dispatch(actions.typeIntoPrompt(text)),
  onUpdatePromptCursorPosition: position => dispatch(actions.updatePromptCursorPosition(position)),
  onSubmitPrompt: () => dispatch(actions.submitPrompt()),
});

export const TerminalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Terminal);
