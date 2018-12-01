import * as React from 'react';
import styled from "styled-components";
import * as _ from "lodash";

const StyledHiddenTextArea = styled.textarea`
  position: absolute;
  top: -1000px;
  width: 0;
  height: 0;
  max-width: 0;
  max-height: 0;
`;

interface Props {
  ref: React.RefObject<HTMLTextAreaElement>;
  value: string;
  onChange(e: React.SyntheticEvent): void;
  onKeyPress(e: React.SyntheticEvent): void;
  onKeyUp(e: React.SyntheticEvent, data: { position: number }): void;
}

export class HiddenTextArea extends React.Component<Props, {}> {
  static defaultProps = {
    onKeyUP: () => {},
  };

  private textarea: any;

  constructor (props: Props) {
    super(props);
    this.textarea = React.createRef<HTMLTextAreaElement>();
  }

  focus () {
    this.textarea.current.focus();
  }

  handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Tab') {
      e.preventDefault();
    }
  }

  handleKeyUp = (e: React.KeyboardEvent) => {
    const { selectionStart } = this.textarea.current;
    this.props.onKeyUp(e, { position: selectionStart });
  }

  render () {
    const { onChange, onKeyPress } = this.props;

    return (
      <StyledHiddenTextArea
        ref={this.textarea}
        value={this.props.value}
        onChange={onChange}
        onKeyDown={this.handleKeyDown}
        onKeyPress={onKeyPress}
        onKeyUp={this.handleKeyUp}
      />
    );
  }
}
