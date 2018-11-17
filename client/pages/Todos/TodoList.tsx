import * as React from "react";
import * as _ from "lodash";
import styled from "styled-components";

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

      { _.map(todos, todo => (
        <TodoListItem
          todo={todo}
          onToggleCompleted={onToggleCompleted}
        />
      ))}

    </TodoListDiv>
  );
};
