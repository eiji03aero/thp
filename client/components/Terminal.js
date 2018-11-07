import React from 'react';
import _ from "lodash";

import { Term } from "../presentationals/Term.js";
import { HiddenTextArea } from "./HiddenTextArea.js";
import { PromptInput } from "../presentationals/PromptInput.js";

export class Terminal extends React.Component {
  constructor (props) {
    super(props);
    this.textarea = React.createRef();
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
        onClick={this.handleClickTerm}
      >
        { _.map(messages, (message, idx) => {
          const displayMessage = message.type === 'user'
            ? `$ ${prompt} ${message.text}`
            : message.text;

          return (
            <div key={idx}>
              { displayMessage }
            </div>
          );
        })}

        <div>
          <span>
            { `$ ${prompt} ` }
          </span>
          <PromptInput text={currentMessage} cursorPosition={cursorPosition}/>
        </div>

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
