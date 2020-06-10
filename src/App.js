import React from "react";
import "./components/Todo.css"
import Form from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Search from "./components/search";

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
      searchList: [],
      isSearching: false,
      formValue: "",
      searchTerm: "",
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

  onSearch = event => {
    console.log(this.state.isSearching)
    this.setState({
      searchTerm: event.target.value,
      isSearching: true,
      searchList: this.state.todoList.filter(item =>
        item.task.toLowerCase().includes(this.state.searchTerm)
      )
    })
  };

  render() {
    // eslint-disable-next-line no-lone-blocks
    { localStorage.setItem("list", JSON.stringify(this.state.todoList)); }
    return (
      <div className="App">
        <div className="header">
          <Search onSearch={this.onSearch} />
          <h1>To-Do List</h1>
        </div>
        <Form
          onChangeHandler={this.onChangeHandler}
          onSubmitHandler={this.onSubmitHandler}
          formValue={this.state.formValue}
        />
        <TodoList
          todoList={this.state.isSearching === false 
            || this.state.searchTerm === ""
            ? this.state.todoList
            : this.state.searchList}
          onComplete={this.onComplete}
          onClear={this.onClear}
        />
      </div>
    );
  }
}

export default App;
