import * as React from 'react';
import * as _ from "lodash";

import { HiddenTextArea } from "../components/HiddenTextArea";
import { Term, PromptInput, TextLine } from "../components/presentationals/Terminal";

import { Directory } from "../models/Directory";
import { Message } from "../models/Message";
import { TextBasis } from "../models/Text";

interface Props {
  prompt: TextBasis[];
  currentMessage: string;
  cursorPosition: number;
  messages: Message[];
  currentDirectory: Directory;
  userName: string;

  onTypeIntoPrompt(message: string): void;
  onUpdatePromptCursorPosition(position: number): void;
  onSubmitPrompt(): void;
}

export class TerminalPage extends React.Component<Props, {}> {
  private textarea: any;
  private terminal: any;

  constructor (props) {
    super(props);
    this.textarea = React.createRef<HTMLTextAreaElement>();
    this.terminal = React.createRef<HTMLDivElement>();
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

  handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const { value } = e.target;
    this.props.onTypeIntoPrompt(value);
  }

  handleClickTerm = (e) => {
    this.textarea.current.focus();
  }

  render () {
    const {
      prompt, currentMessage, cursorPosition, messages,
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
            <TextLine key={message.id}
              message={message}
            />
          );
        })}

        <TextLine
          message={new Message({ type: 'system', texts: prompt} )}
        >
          <PromptInput
            text={currentMessage}
            cursorPosition={cursorPosition}
          />
        </TextLine>

        <HiddenTextArea
          ref={this.textarea}
          value={currentMessage}
          onChange={this.handleChangeTextArea}
          onKeyPress={this.handleKeyPress}
          onKeyUp={this.handleKeyUp}
        />
      </Term>
    );
  }
}
