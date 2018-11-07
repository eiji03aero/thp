import React from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";

import { TerminalContainer } from "./containers/TerminalContainer.js";

import { GlobalStyle } from './GlobalStyle.js';

const AppDiv = styled.div`
  width: 100%;
  height: 100%;
`;

export const App = props => (
  <AppDiv>
    <TerminalContainer/>
    <GlobalStyle/>
  </AppDiv>
);
