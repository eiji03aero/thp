import * as React from 'react';
import styled from "styled-components";
import * as lodash from "lodash";
import { getColor } from "../../../utils/colors.js";

const TextLineDiv = styled.div`
  display: block;
`;

const TextLineSpan = styled.span`
  white-space: pre-wrap;
`;

export const TextLine = ({
  children,
  message,
}) => {
  return (
    <TextLineDiv>
      { lodash.map(message.texts, (t, idx) => (
        <TextLineSpan key={idx}
          style={{ color: getColor(t.color) }}
        >
          { t.text }
        </TextLineSpan>
      ))}

      { children }
    </TextLineDiv>
  );
}

TextLine.defaultProps = {
  message: [],
};
