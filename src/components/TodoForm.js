import React from "react";

class Form extends React.Component {

    render() {
        return (
            <form classname="form" onSubmit={this.props.onSubmitHandler}>
                <input
                    onChange={this.props.onChangeHandler}
                    name="todoForm"
                    type="text"
                    placeholder="✏️"
                    value={this.props.formValue}
                />
                <button className="button add" type="submit">+</button>
            </form>
        )
    }
}

export default Form