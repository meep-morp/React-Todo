import React from "react";

class Form extends React.Component {

    render() {
        return (
            <form onSubmit={this.props.onSubmitHandler}>
                <input
                    onChange={this.props.onChangeHandler}
                    name="todoForm"
                    type="text"
                    placeholder="Add Item"
                    value={this.props.formValue}
                />
                <button type="submit">Go!</button>
            </form>
        )
    }
}

export default Form