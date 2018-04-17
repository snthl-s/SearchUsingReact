import React, { Component } from 'react';

class SearchForm extends Component {
    render() { 
    return (
        <div className="container">
            <input type="text" onKeyUp={event => this.props.filterBy(event.target.value)} placeholder="Filter by name" />
        </div>
        )
    }
}
export default SearchForm;
