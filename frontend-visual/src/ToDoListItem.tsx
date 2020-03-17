import React from 'react';
import "./ToDoListItem.css";
import {Todo} from './types';

interface ToDoListItemProps {
    todo: Todo;
}
export const ToDoListItem: React.FC<ToDoListItemProps> = ({todo}) => {
    return(
        <li>
            <label className={todo.complete ? "complete" : undefined}>
                <input type="checkbox" checked={todo.complete}/>
                {todo.text}
            </label>
        </li>
    );
};
