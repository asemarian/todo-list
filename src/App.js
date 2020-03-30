import React from 'react';
import TodoList from './TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-logo">
        <h1 className="App-logo-text">
          <span className="todo">
            T
            <i className="fas fa-check-circle done"></i>
            D
            <i className="fas fa-check-circle done"></i>
          </span>
          <span className="list">list</span>
        </h1>
      </div>
      <TodoList />
    </div>
  );
}

export default App;
