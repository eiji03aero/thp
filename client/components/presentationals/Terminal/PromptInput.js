import * as React from 'react';
import styled, { keyframes } from "styled-components";
import * as cn from 'classnames';
import * as lodash from "lodash";

import { colors } from "../../../utils/colors.js";

const blink = keyframes`
  0% {
    background-color: ${colors.cursorBlue};
    color: ${colors.white};
  }
  49% {
    background-color: ${colors.cursorBlue};
    color: ${colors.white};
  }
  50% {
    color: ${colors.white};
    background-color: transparent;
  }
  100% {
    background-color: transparent;
  }
`;

const PromptSpan = styled.span`
  display: inline-block;
  background-color: transparent;
  color: ${colors.white};
  vertical-align: baseline;
  line-height: 1;

  &.on-cursor {
    animation: ${blink} .5s ease-in-out infinite alternate;
  }

  &.blank {
    width: .5rem;
    height: 1rem;
    vertical-align: text-bottom;
  }
`;

const BlankCursor = () => <PromptSpan className='on-cursor blank'/>;

export const PromptInput = ({
  text,
  cursorPosition,
}) => {
  if (lodash.isNil(text)) return <BlankCursor/>;

  return (
    <React.Fragment>
      { lodash.map(text.split(''), (t,idx) => (
        <PromptSpan
          key={idx}
          className={cn({
            'on-cursor': cursorPosition === idx,
            'blank': t === ' ',
          })}
        >
          { t }
        </PromptSpan>
      ))}

      { cursorPosition === text.length && (
        <BlankCursor/>
      )}
    </React.Fragment>
  );
};
