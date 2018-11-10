import React from 'react';
import _ from "lodash";

import { HiddenTextArea } from "../components/HiddenTextArea.js";
import { Term, PromptInput, TextLine } from "../components/presentationals/Terminal";

export class TerminalPage extends React.Component {
  constructor (props) {
    super(props);
    this.textarea = React.createRef();
    this.terminal = React.createRef();
  }

  componentDidMount () {
    this.textarea.current.focus();
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    if (this.props.messages.length !== prevProps.messages.length) {
      this.terminal.current.scrollTop = this.terminal.current.scrollHeight;
    }
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.props.onSubmitPrompt();
    }
  }

  handleKeyUp = (e, { position }) => {
    this.props.onUpdatePromptCursorPosition(position);
  }

  handleClickTerm = (e) => {
    this.textarea.current.focus();
  }

  render () {
    const {
      currentMessage, cursorPosition, messages,
      currentDirectory,
      userName,
      onTypeIntoPrompt
    } = this.props;

    return (
      <Term
        ref={this.terminal}
        onClick={this.handleClickTerm}
      >
        { _.map(messages, (message, idx) => {
          return (
            <TextLine key={idx}>
              { message.text }
            </TextLine>
          );
        })}

        <TextLine>
          <span>
            { `${userName}:${currentDirectory.name}$ ` }
          </span>
          <PromptInput
            text={currentMessage}
            cursorPosition={cursorPosition}
          />
        </TextLine>

        <HiddenTextArea
          ref={this.textarea}
          value={currentMessage}
          onChange={e => onTypeIntoPrompt(e.target.value)}
          onKeyPress={this.handleKeyPress}
          onKeyUp={this.handleKeyUp}
        />
      </Term>
    );
  }
}
