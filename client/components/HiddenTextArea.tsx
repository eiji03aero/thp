import * as React from 'react';
import styled from "styled-components";

const StyledHiddenTextArea = styled.textarea`
  position: absolute;
  top: -1000px;
  width: 0;
  height: 0;
  max-width: 0;
  max-height: 0;
`;

interface selectionData {
  selectionStart: number;
}

interface Props {
  ref: React.RefObject<HTMLTextAreaElement>;
  value: string;
  onChange(e: React.SyntheticEvent): void;
  onKeyPress(e: React.SyntheticEvent): void;
  onKeyUp(e: React.SyntheticEvent, selectionData): void;
}

export class HiddenTextArea extends React.Component<Props, {}> {
  static defaultProps = {
    onKeyUP: f => f,
  };

  private textarea: any;

  constructor (props) {
    super(props);
    this.textarea = React.createRef<HTMLTextAreaElement>();
  }

  focus () {
    this.textarea.current.focus();
  }

  handleKeyUp = e => {
    const { selectionStart } = this.textarea.current;
    this.props.onKeyUp(e, { position: selectionStart });
  }

  render () {
    const { onChange, onKeyPress, onKeyUp } = this.props;

    return (
      <StyledHiddenTextArea
        ref={this.textarea}
        value={this.props.value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        onKeyUp={this.handleKeyUp}
      />
    );
  }
}
