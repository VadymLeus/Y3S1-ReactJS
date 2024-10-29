import React from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div className="app">
      <h1>Todo List</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default App;
