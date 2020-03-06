import React from 'react';
import "./ToDoListItem.css";

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
