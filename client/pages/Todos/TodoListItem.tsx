import * as React from "react";
import * as cn from "classnames";
import styled from "styled-components";

import { Todo } from "./Todo";

const TodoListItemDiv = styled.div`
  display: flex;
  span {
    margin-left: 1rem;
  }

  .completed {
    text-decoration: line-through;
  }
`;

interface Props {
  todo: Todo;
  onToggleCompleted: (e: React.SyntheticEvent, id: string) => void;
}

export const TodoListItem: React.StatelessComponent<Props> = ({
  todo,
  onToggleCompleted,
}) => {
  return (
    <TodoListItemDiv className={cn({ 'completed': todo.completed })}>
      <input
        type="checkbox"
        value={todo.completed.toString()}
        onChange={(e: React.SyntheticEvent): void => onToggleCompleted(e, todo.id)}
      />
      <span>{ todo.title }</span>
    </TodoListItemDiv>
  );
};
