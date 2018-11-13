import * as React from 'react';
import styled from "styled-components";
import { colors } from "../../../utils/colors.js";

const TermDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.deepGreen};
  color: white;
  overflow-y: scroll;
`;

export const Term = React.forwardRef(({
  children,
  onClick,
}, ref) => {
  return (
    <TermDiv
      ref={ref}
      onClick={onClick}
    >
      { children }
    </TermDiv>
  );
});
