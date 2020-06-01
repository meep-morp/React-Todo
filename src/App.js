import React from "react";
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

  onComplete = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Todo
          onChangeHandler={this.onChangeHandler}
          onSubmitHandler={this.onSubmitHandler}
          onComplete={this.onComplete}
          formValue={this.state.formValue}
          todoList={this.state.todoList}
        />
      </div>
    );
  }
}

export default App;
