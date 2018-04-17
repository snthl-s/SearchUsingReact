import React, { Component } from 'react';
import StudentTable from './components/student';
import SearchForm from './components/filters';
import data from './data/data.json';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={      
      data: data, 
      values: data,
      direction : {
        gender: 'asc'
      }
    }
    this.sortBy = this.sortBy.bind(this);
    this.filterBy = this.filterBy.bind(this);
   }

  sortBy(key){
    this.setState({
      
      data: this.state.data.sort((a,b) => (
        this.state.direction[key] === 'asc' ? a[key] > b[key] : a[key] < b[key])),
        direction:{
          [key] : this.state.direction[key] === 'asc' ? 'desc' : 'asc'
        }
    })
  }

  filterBy(key) {
    this.setState({
      data: this.state.values.filter((data) => { return (data.name.toLowerCase(0).includes(key.toLowerCase(0))) }),
    })
    console.log(this.state.data);
  }
 
  render() {
    return (
      <div className="App">
          <div className="jumbotron">
          <h1 >Building a DataTable using ReactJS</h1>
          </div>
          <div className="container">
          <SearchForm 
            filterBy={this.filterBy}
          />
          <StudentTable
            data={this.state.data}
            sortBy={this.sortBy}
          />
          </div>
          <hr/>
       </div>
    );
  }
}

export default App;
