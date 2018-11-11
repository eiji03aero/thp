import React from 'react';
import styled from "styled-components";
import _ from "lodash";

const TextLineDiv = styled.div`
  display: block;
`;

export const TextLine = ({
  children,
  message,
}) => {
  return (
    <TextLineDiv>
      { _.map(message.texts, (t, idx) => (
        <span key={idx}
          style={{ color: t.color}}
        >
          { t.text }
        </span>
      ))}

      { children }
    </TextLineDiv>
  );
}

TextLine.defaultProps = {
  message: [],
};
