import React from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

import { TerminalPageContainer } from "./containers/TerminalPageContainer.js";
import { BootAppPageContainer } from "./containers/BootAppPageContainer.js";

import { GlobalStyle } from './GlobalStyle.js';

const AppDiv = styled.div`
  width: 100%;
  height: 100%;
`;

export const App = props => (
  <AppDiv>

    <Switch>
      <Route exact path='/' component={TerminalPageContainer} />
      <Route component={() => <p>not found</p>}/>
    </Switch>

    <BootAppPageContainer/>
    <GlobalStyle/>
  </AppDiv>
);
