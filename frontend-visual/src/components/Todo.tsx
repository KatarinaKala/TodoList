import React from "react";
import { ToDoListItem } from "../ToDoListItem";
import { Todo } from "../types";
import { render } from "@testing-library/react";

interface ITodoState {
  todos: Todo[]
}


export class TodoApp extends React.Component<{}, ITodoState> {

  constructor(props: any) {
    super(props)
    this.state = {
      todos: [
        { title: "Walk the dog", completed: false, id: 1, userId: 10 },
      ]
    }
  }

  async componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/1/todos")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            todos: result
          });
        },
        (error) => {
          console.error("problem with api")
          this.setState({});
        }
      )
  }

  render() {
    return (
      <React.Fragment>
        {
          this.state.todos.map((todo, i) => (
            <ToDoListItem key={i} todo={todo} />
          ))
        }

      </React.Fragment>
    );
  }

};

export default TodoApp;
