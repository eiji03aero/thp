import React from 'react';
import _ from "lodash";

import { Term } from "../presentationals/Term.js";
import { HiddenTextArea } from "./HiddenTextArea.js";

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

  handleClickTerm = (e) => {
    this.textarea.current.focus();
  }

  render () {
    const {
      messages, currentMessage, prompt,
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
          { `$ ${prompt} ${currentMessage}` }
        </div>

        <HiddenTextArea
          ref={this.textarea}
          value={currentMessage}
          onChange={e => onTypeIntoPrompt(e.target.value)}
          onKeyPress={this.handleKeyPress}
        />
      </Term>
    );
  }
}
