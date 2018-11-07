import React from 'react';
import styled from "styled-components";

const TermBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;
  overflow-y: scroll;
`;

export const Term = React.forwardRef(({
  children,
  onClick,
}, ref) => {
  return (
    <TermBox
      ref={ref}
      onClick={onClick}
    >
      { children }
    </TermBox>
  );
});
