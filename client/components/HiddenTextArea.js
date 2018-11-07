import React from 'react';
import styled from "styled-components";

const StyledHiddenTextArea = styled.textarea`
  position: absolute;
  top: -1000px;
  width: 0;
  height: 0;
  max-width: 0;
  max-height: 0;
`;

export class HiddenTextArea extends React.Component {
  static defaultProps = {
    onKeyUP: f => f,
  };

  constructor (props) {
    super(props);
    this.textarea = React.createRef();
  }

  focus () {
    this.textarea.current.focus();
  }

  handleKeyUp = e => {
    const { selectionStart } = this.textarea.current;
    this.props.onKeyUp(e, { position: selectionStart });
  }

  render () {
    return (
      <StyledHiddenTextArea
        ref={this.textarea}
        value={this.props.value}
        onChange={e => this.props.onChange(e)}
        onKeyPress={e => this.props.onKeyPress(e)}
        onKeyUp={this.handleKeyUp}
      />
    );
  }
}
