import React from 'react';
import styled from "styled-components";

const TermBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;
`;

export const Term = ({
  children,
  onClick,
}) => {
  return (
    <TermBox
      onClick={onClick}
    >
      { children }
    </TermBox>
  );
}
