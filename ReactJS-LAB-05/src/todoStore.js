import { createStore, createEvent } from 'effector';

export const addTodo = createEvent();
export const deleteTodo = createEvent();
export const toggleTodo = createEvent();

const initialState = [];

export const $todos = createStore(initialState)
  .on(addTodo, (state, todo) => [...state, todo])
  .on(deleteTodo, (state, id) => state.filter(todo => todo.id !== id))
  .on(toggleTodo, (state, id) =>
    state.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  );
