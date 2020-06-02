import React from "react";
import "./components/Todo.css"
import Form from "./components/TodoForm";
import TodoList from "./components/TodoList";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todoList: !JSON.parse(localStorage.getItem("list"))
        ? []
        : JSON.parse(localStorage.getItem("list")),
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

  onComplete = itemID => {
    this.setState({
      todoList: this.state.todoList.map(item => {
        if (item.id === itemID) {
          return {
            ...item,
            completed: !item.completed,
          }
        } else {
          return item;
        }
      })
    });
  }

  onClear = () => {
    this.setState({
      todoList: this.state.todoList.filter(item => item.completed !== true)
    });
  }

  render() {
    // eslint-disable-next-line no-lone-blocks
    {localStorage.setItem("list", JSON.stringify(this.state.todoList));}
    return (
      <div className="App">
        <h1>To-Do List</h1>
        <Form
          onChangeHandler={this.onChangeHandler}
          onSubmitHandler={this.onSubmitHandler}
          formValue={this.state.formValue}
        />
        <TodoList
          todoList={this.state.todoList}
          onComplete={this.onComplete}
          onClear={this.onClear}
        />
      </div>
    );
  }
}

export default App;
