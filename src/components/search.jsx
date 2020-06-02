import React from "react";

class Search extends React.Component {
    render() {
        return (
            <form className="searchBar">
               <input 
               type="text" 
               name="search"
               placeholder="🔎"
               onChange={this.props.onSearch}
               />
            </form>
        )
    }
}

export default Search;