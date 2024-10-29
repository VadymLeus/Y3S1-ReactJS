import React from 'react';
import { useStore } from 'effector-react';
import { $todos } from "../todoStore";
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useStore($todos);

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
