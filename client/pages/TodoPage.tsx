import * as React from "react";
import * as _ from "lodash";
import * as R from "ramda";
import * as uuid from "uuid/v4";
import { Switch, Route } from "react-router-dom";

import { WebPageDiv } from "../components/sfcs/Web/WebPageDiv";
import { TodoList } from "./Todos/TodoList";
import { Todo } from "./Todos/Todo";

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
    const todos = _.map(this.state.todos, todo => {
      return todo.id === todoId
        ? R.assoc('completed', R.not(todo.completed), todo)
        : todo;
    });

    this.setState({ todos });
  }

  render () {
    const { todos } = this.state;

    return (
      <WebPageDiv>
        <h1>Todo page here</h1>

        <Switch>
          <Route path='/' render={() => (
            <TodoList todos={todos} onToggleCompleted={this.handleToggleCompleted} />
          )}/>
        </Switch>

      </WebPageDiv>
    );
  }
}
