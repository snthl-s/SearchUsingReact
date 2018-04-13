import React, { Component } from 'react';



class SearchForm extends Component {
    constructor(props) {
        
        super(props);
        this.state = {
            data: props.data,
            filterName: ''
        }
        this.getInput = this.getInput.bind(this);
        this.filterBy = props.filterBy.bind(this);
        this.data = props.data;
    }

        getInput(key) {
           let values = this.data;
            this.setState({
                filterName:key,
                data: values.filter((data) => { return (data.name.toLowerCase().includes(this.state.filterName.toLowerCase())) }),
            })
            console.log(key, this.state.data);
            this.filterBy(this.state.data);
      }

    render() {
        
    return (
        <div className="container">
            <input type="text" onChange={event => this.getInput(event.target.value)} value={this.state.filterName} placeholder="Filter by name" />

        </div>
    )
}
}

export default SearchForm;
