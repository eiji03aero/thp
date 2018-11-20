import * as React from 'react';
import styled from "styled-components";
import * as _ from "lodash";

import { Message } from "../../../models/Message";
import { getColor } from "../../../utils/colors";

const TextLineDiv = styled.div`
  display: block;
`;

const TextLineSpan = styled.span`
  white-space: pre-wrap;
`;

interface Props {
  children?: React.ReactNode;
  message: Message;
}

export const TextLine: React.SFC<Props> = ({
  children,
  message,
}) => {
  return (
    <TextLineDiv>
      { _.map(message.texts, (t, idx) => (
        <TextLineSpan key={t.id}
          style={{ color: getColor(t.color) }}
        >
          { t.text }
        </TextLineSpan>
      ))}

      { children }

    </TextLineDiv>
  );
};
