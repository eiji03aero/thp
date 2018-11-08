import React from 'react';
import styled, { keyframes } from 'styled-components';

import { colors } from "../utils/colors.js";

const doubleBullet = keyframes`
  0% {
    right: 100%;
    width: 0;
  }
  35% {
    right: 0;
    width: 60%;
  }
  59% {
    right: 0;
    width: 0;
  }
  60% {
    right: 100%;
    width: 0;
  }
  75% {
    right: 0;
    width: 60%;
  }
  90% {
    right: 0;
    width: 0;
  }
  100% {
    right: 0;
    width: 0;
  }
`;

const Indicator = styled.div`
  position: relative;
  width: 200px;
  height: .4rem;
  background-color: ${colors.black};

  .ping-pong {
    position: absolute;
    height: 100%;
    background-color: ${colors.primaryBlue};
    animation: ${doubleBullet} 3s linear infinite;
  }
`;

export const HorizontalLoadingIndicator = ({
  size
}) => {
  return (
    <Indicator>
      <div className="ping-pong"></div>
    </Indicator>
  );
};
