import * as React from 'react';
import * as _ from "lodash";

import { HiddenTextArea } from "../components/HiddenTextArea";
import { Term, PromptInput, TextLine } from "../components/sfcs/Terminal";

import { Message } from "../models/Message";
import { TextBasis } from "../models/Text";

interface Props {
  prompt: TextBasis[];
  currentMessage: string;
  cursorPosition: number;
  messages: Message[];

  onUpdateCurrentMessage(message: string): void;
  onUpdatePromptCursorPosition(position: number): void;
  onSubmitPrompt(): void;
  onDetectKeyIntoPrompt(e: React.KeyboardEvent): void;
}

interface State {

}

export class TerminalPage extends React.Component<Props, State> {
  private textarea: any;
  private terminal: any;

  constructor (props: Props) {
    super(props);
    this.textarea = React.createRef<HTMLTextAreaElement>();
    this.terminal = React.createRef<HTMLDivElement>();
  }

  componentDidMount () {
    this.textarea.current.focus();
  }

  componentDidUpdate (prevProps: Props, prevState: State, snapshot: any) {
    if (this.props.messages.length !== prevProps.messages.length) {
      this.terminal.current.scrollTop = this.terminal.current.scrollHeight;
    }
  }

  handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      this.props.onSubmitPrompt();
    }
  }

  handleKeyUp = (e: React.KeyboardEvent, { position }: { position: number }) => {
    e.preventDefault();
    this.props.onUpdatePromptCursorPosition(position);
    this.props.onDetectKeyIntoPrompt(e);
  }

  handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const { value } = e.target;
    const ensuredValue = _.trim(value) === ""
      ? ""
      : value;
    this.props.onUpdateCurrentMessage(ensuredValue);
  }

  handleClickTerm = (e: React.MouseEvent<HTMLElement>) => {
    this.textarea.current.focus();
  }

  render () {
    const {
      prompt, currentMessage, cursorPosition, messages,
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
