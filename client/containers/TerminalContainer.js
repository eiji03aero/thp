import { connect } from "react-redux";

import { Terminal } from "../components/Terminal.js";
import * as actions from "../modules/Terminal.js";

const mapStateToProps = ({ terminal }) => ({
  messages: terminal.messages,
  prompt: terminal.prompt,
  currentMessage: terminal.currentMessage,
});

const mapDispatchToProps = (dispatch) => ({
  onTypeIntoPrompt: text => dispatch(actions.typeIntoPrompt(text)),
  onSubmitPrompt: () => dispatch(actions.submitPrompt()),
});

export const TerminalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Terminal);
