// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

class TodoList extends React.Component {

    render() {
        return (
            <div className="todoContainer" onClick={this.props.onComplete}>
                {this.props.todoList.map(item => {
                    return (
                        <div className="todoItem">
                            <h2>{item.task}</h2>
                        </div>)
                })}
            </div>
        )
    }
}

export default TodoList;