import React from "react";

class Form extends React.Component {

    render() {
        return (
            <form onSubmit={this.props.onSubmitHandler}>
                <input
                    onChange={this.props.onChangeHandler}
                    name="todoForm"
                    type="text"
                    placeholder="✏️"
                    value={this.props.formValue}
                />
                <button className="button" type="submit">+</button>
            </form>
        )
    }
}

export default Form