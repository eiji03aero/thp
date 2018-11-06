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
  constructor (props) {
    super(props);
    this.textarea = React.createRef();
  }

  focus () {
    this.textarea.current.focus();
  }

  clear () {
    this.textarea.current.value = '';
  }

  render () {
    return (
      <StyledHiddenTextArea
        ref={this.textarea}
        onKeyUp={e => this.props.onKeyUp(e)}
      />
    );
  }
}
