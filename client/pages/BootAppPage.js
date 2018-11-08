import React from 'react';
import styled, { keyframes } from "styled-components";
import { colors } from "../utils/colors.js";

import { HorizontalLoadingIndicator } from "../components/presentationals/common/HorizontalLoadingIndicator.js";

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${colors.pureBlack};

  transition: opacity .5s ease-in-out, transform .5s ease-in-out;
  opacity: 1;
  transform: translateY(0px);

  &.fade-down {
    opacity: 0;
    transform: translateY(20px);
  }

  &.is-removed {
    display: none;
  }
`;

const LoadingBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  color: ${colors.white};
`;

export class BootAppPage extends React.Component {
  constructor (props) {
    super(props);
    this.container = React.createRef();
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    if (this.props.isBooting === false) {
      this.container.current.classList.add('fade-down');
      setTimeout(() => this.container.current.classList.add('is-removed'), 500);
    }
  }

  render () {
    return (
      <LoadingContainer ref={this.container}>
        <LoadingBox>
          <HorizontalLoadingIndicator/>
          <p>It's me, booting app ...</p>
        </LoadingBox>
      </LoadingContainer>
    );
  }
}
