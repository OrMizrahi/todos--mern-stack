import React from 'react';
import Todos from './components/Todos/Todos'
import Loader from './components/Loader/Loader';
import AddTodo from './components/AddTodo/AddTodo'

import './App.css';
import ErrorSnackBar from './components/ErrorSnackBar/ErrorSnackBar';

function App() {
  return (
    <div className="container">
      <Loader />
      <AddTodo />
      <Todos />
      <ErrorSnackBar />
    </div>
  );
}

export default App;
