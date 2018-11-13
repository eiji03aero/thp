import * as React from "react";
import * as cn from "classnames";
import * as lodash from "lodash";
import styled from "styled-components";
import * as uuid from "uuid/v4";

import { TodoListItem } from "./TodoListItem";
import { Todo } from "./Todo";

const TodoListDiv = styled.div`
  display: block;
`;

interface Props {
  todos: Todo[];
  onToggleCompleted: (e: React.SyntheticEvent, id: string) => void;
}

export const TodoList: React.StatelessComponent<Props> = ({
  todos,
  onToggleCompleted,
}) => {
  return (
    <TodoListDiv>

      { lodash.map(todos, todo => (
        <TodoListItem
          todo={todo}
          onToggleCompleted={onToggleCompleted}
        />
      ))}

    </TodoListDiv>
  );
};
