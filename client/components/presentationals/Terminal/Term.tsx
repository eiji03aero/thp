import * as React from 'react';
import styled from "styled-components";
import { colors } from "../../../utils/colors";

const TermDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.deepGreen};
  color: white;
  overflow-y: scroll;
`;

type Ref = any;

interface Props {
  ref: React.RefObject<HTMLDivElement>;
  children: React.ReactNode;
  onClick(e: React.SyntheticEvent): void;
}

export const Term = React.forwardRef<Ref, Props>(({
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
