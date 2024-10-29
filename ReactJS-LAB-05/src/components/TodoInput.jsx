import React, { useState } from 'react';
import { addTodo } from "../todoStore"
;

const TodoInput = () => {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim()) {
      addTodo({
        id: Date.now(),
        text,
        completed: false,
      });
      setText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TodoInput;
