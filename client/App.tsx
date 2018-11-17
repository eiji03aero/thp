import * as React from 'react';
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

import { TerminalPageContainer } from "./containers/TerminalPageContainer";
import { BootAppPageContainer } from "./containers/BootAppPageContainer";
import { TodoPage } from "./pages/TodoPage";
import { NotFoundPage } from "./pages/NotFoundPage";

import { GlobalStyle } from './GlobalStyle';

const AppDiv = styled.div`
  width: 100%;
  height: 100%;
`;

export const App = () => (
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
