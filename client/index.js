import React from 'react';
import ReactDOM from 'react-dom';
import _ from "lodash";

import { Term } from "./presentationals/Term.js";
import { HiddenTextArea } from "./components/HiddenTextArea.js";

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentMessage: '',
      prompt: 'username:~',
      messages: [
        {
          text: 'Log into ssh client ...',
          type: 'system',
        },
        {
          text: 'wait ...',
          type: 'system',
        },
        {
          text: 'Log in successed!',
          type: 'system',
        },
      ],
    };
  }

  handleStart = (e) => {
    this.textarea.focus();
  }

  handleTyping = (e) => {
    if (e.key === 'Enter') {
      this.textarea.clear();
      this.setState(pre => ({
        currentMessage: '',
        messages: [
          ...pre.messages,
          { text: pre.currentMessage, type: 'user' }
        ],
      }));
    } else {
      this.setState({ currentMessage: e.target.value });
    }
  }

  render () {
    const { messages, currentMessage, prompt } = this.state;

    return (
      <Term
        onClick={this.handleStart}
      >
        { _.map(messages, (message, idx) => {
          const displayMessage = message.type === 'user'
            ? `$ ${prompt} ${message.text}`
            : message.text;

          return (
            <div>
              { displayMessage }
            </div>
          );
        })}

        <div>
          { `$ ${prompt} ${currentMessage}` }
        </div>

        <HiddenTextArea
          ref={el => this.textarea = el}
          onKeyUp={this.handleTyping}
        />
      </Term>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#app-root'));
