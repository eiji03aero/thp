import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

import { TerminalPageContainer } from "./containers/TerminalPageContainer.js";
import { BootAppPageContainer } from "./containers/BootAppPageContainer.js";
import { NotFoundPage } from "./pages/NotFoundPage";

import { TodoPage } from "./pages/TodoPage";

import { GlobalStyle } from './GlobalStyle.js';

const AppDiv = styled.div`
  width: 100%;
  height: 100%;
`;

export const App = props => (
  <AppDiv>

    <Switch>
      <Route exact path='/' component={TerminalPageContainer} />
      <Route path='/todos' component={TodoPage} />
      <Route component={NotFoundPage}/>
    </Switch>

    <BootAppPageContainer/>
    <GlobalStyle/>
  </AppDiv>
);
