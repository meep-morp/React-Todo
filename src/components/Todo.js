import React from "react";
import Form from "./TodoForm";
import TodoList from "./TodoList";

class Todo extends React.Component {

    render() {
        return (
            <div>
                <Form
                    onChangeHandler={this.props.onChangeHandler}
                    onSubmitHandler={this.props.onSubmitHandler}
                    formValue={this.props.formValue}
                />
                <TodoList todoList={this.props.todoList} />
            </div>
        )
    }
}

export default Todo