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
      direction : {
        gender: 'asc'
      }
    }
    this.sortBy = this.sortBy.bind(this);
   }

  
  // filterBy(values) {
  //   this.setState({
  //     data: values,
  //   })
  //   console.log('filtered data',this.state.data)
  // }

  sortBy(key){
    this.setState({
      data: data.sort((a,b) => (
        this.state.direction[key] === 'asc' ? a[key] > b[key] : a[key] < b[key])),
        direction:{
          [key] : this.state.direction[key] === 'asc' ? 'desc' : 'asc'
        }
    })
  }

 
  render() {
    return (
      <div className="App">
          <div className="jumbotron">
          <h1 >Building a DataTable using ReactJS</h1>
          </div>
          <div className="container">
          <SearchForm data={this.state.data} filterBy={values => this.setState({data:values})}/>
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
