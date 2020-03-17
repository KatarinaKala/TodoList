import React from 'react';
import { ToDoListItem } from '../ToDoListItem';
import {Todo} from '../types';

const todos:Array<Todo>=[
  {text: "Walk the dog", complete:true}, 
  {text: "Write app", complete:false}
];

const TodoApp: React.FC=() => {
  return (
    <React.Fragment>
      <ToDoListItem todo={todos[0]}/>
      <ToDoListItem todo={todos[1]}/>
    </React.Fragment>
  );
};

export default TodoApp;