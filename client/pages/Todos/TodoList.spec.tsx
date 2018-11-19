import * as React from 'react';
import { shallow } from "enzyme";
import * as renderer from 'react-test-renderer';
import { TodoList } from "./TodoList";
import { TodoListItem } from "./TodoListItem";

describe('TodoList', () => {
  const todos = [ { id: '0', title: 'test', completed: false } ];

  it('snapshot', () => {
    const tree = renderer
      .create(<TodoList todos={todos} onToggleCompleted={e => {}}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render proper number of Items', () => {
    const wrapper = shallow(<TodoList todos={todos} onToggleCompleted={e => {}}/>);
    expect(wrapper.find(TodoListItem).length).toBe(1);
  });
});
