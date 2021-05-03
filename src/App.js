import React from 'react';
import Todo from "./component/Todolist"
import TodolistContextProvider from './context/Todolistcontext';

function App() {
  
  return (
    
    <TodolistContextProvider>
     <Todo />
    </TodolistContextProvider>

  );
}

export default App;
