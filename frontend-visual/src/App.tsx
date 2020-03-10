import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ToDoListItem } from './ToDoListItem';

const todos:Array<Todo>=[
  {text: "Walk the dog", complete:true}, 
  {text: "Write app", complete:false}
];

const App: React.FC=() => {
  return (
    <React.Fragment>
      <ToDoListItem todo={todos[0]}/>
      <ToDoListItem todo={todos[1]}/>
    </React.Fragment>
  );
};

export default App;

