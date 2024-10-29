import React from 'react';
import { deleteTodo, toggleTodo } from '../todoStore';

const TodoItem = ({ todo }) => {
  return (
    <li>
      <span
        className={todo.completed ? 'completed' : ''}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </span>
      <button className="delete" onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
