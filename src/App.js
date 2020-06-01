import React from "react";
import Form from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Todo from "./components/Todo";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todoList: [],
      formValue: "",
    };
  }

  onChangeHandler = event => {
    this.setState({
      formValue: event.target.value,
    })
  }

  onSubmitHandler = event => {
    event.preventDefault();
    this.setState({
      formValue: "",
      todoList: [...this.state.todoList,
      {
        task: this.state.formValue,
        id: new Date(),
        completed: false,
      }],
    })
  }

  render() {
    return (
      <div>
        <Form
          onChangeHandler={this.onChangeHandler}
          onSubmitHandler={this.onSubmitHandler}
          formValue={this.state.formValue}
        />
        <Todo />
        <TodoList todoList={this.state.todoList} />
      </div>
    );
  }
}

export default App;
