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

  componentDidUpdate (prevProps, prevState, snapshot) {
    if (this.props.messages.length !== prevProps.messages.length) {
      this.terminal.current.scrollTop = this.terminal.current.scrollHeight;
    }
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
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
      currentMessage, cursorPosition, messages, prompt,
      onTypeIntoPrompt
    } = this.props;

    return (
      <Term
        ref={this.terminal}
        onClick={this.handleClickTerm}
      >
        { _.map(messages, (message, idx) => {
          const displayMessage = message.type === 'user'
            ? `$ ${prompt} ${message.text}`
            : message.text;

          return (
            <TextLine key={idx}>
              { displayMessage }
            </TextLine>
          );
        })}

        <TextLine>
          <span>
            { `$ ${prompt} ` }
          </span>
          <PromptInput text={currentMessage} cursorPosition={cursorPosition}/>
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
