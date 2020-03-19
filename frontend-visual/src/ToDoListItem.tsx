import React, { useState } from 'react';
import "./ToDoListItem.css";
import { Todo } from './types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import ListItem from '@material-ui/core/ListItem';


interface ToDoListItemProps {
    todo: Todo;
}
export const ToDoListItem: React.FC<ToDoListItemProps> = ({ todo }) => {
    
    const [completed, setCompleted] = useState(todo.completed);

    return (
        <ListItem button>

            <label className={todo.completed ? "complete" : undefined}>
                <FormControlLabel
                    onClick={() => setCompleted(!completed)}
                    control={<Checkbox
                        checked={completed}
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite />} name="checkedH" />}
                    label=""
                />
                {/* <input type="checkbox" checked={todo.completed} /> */}
                {todo.title}

            </label>

        </ListItem>
    );
};
