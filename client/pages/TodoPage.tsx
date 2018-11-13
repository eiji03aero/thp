import * as React from "react";
import * as lodash from "lodash";
import * as R from "ramda";
import * as cn from "classnames";
import styled from "styled-components";
import * as uuid from "uuid/v4";
import { Switch, Route, Link } from "react-router-dom";

import { TodoList } from "./Todos/TodoList";
import { Todo } from "./Todos/Todo";

const TodoPageDiv = styled.div`
  display: block;
  width: 100%;
  height: 100%;
`;

interface Props {
  title: string;
}

interface State {
  todos: Todo[];
}

export class TodoPage extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props);
    this.state = {
      todos: [
        {
          id: uuid(),
          title: 'domo',
          completed: false,
        }
      ]
    }
  }

  handleToggleCompleted = (e: React.SyntheticEvent, todoId: string): void => {
    const todos = lodash.map(this.state.todos, todo => {
      return todo.id === todoId
        ? R.assoc('completed', R.not(todo.completed), todo)
        : todo;
    });

    this.setState({ todos });
  }

  render () {
    const { todos } = this.state;

    return (
      <TodoPageDiv>
        <h1>Todo page here</h1>

        <Switch>
          <Route path='/' render={() => (
            <TodoList todos={todos} onToggleCompleted={this.handleToggleCompleted} />
          )}/>
        </Switch>

      </TodoPageDiv>
    );
  }
}
