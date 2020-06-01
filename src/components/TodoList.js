// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

class TodoList extends React.Component {
    render() {
        return (
            <div className="todoContainer">
                {this.props.todoList.map(item => {
                    return (
                        <div className="todoItem" onClick={() => this.props.onComplete(item.id)}>
                            <h2>{item.task}</h2>
                            <h3>{item.completed === false ? "false" : "true"}</h3>
                        </div>)
                })}
                <button onClick={this.props.onClear}>Clear Completed</button>
            </div>
        )
    }
}

export default TodoList;