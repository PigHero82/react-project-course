import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person.js";

class App extends Component {
  state = {
    persons: [
      {id:1, name: 'Gus Dek', age: 21},
      {id:2, name: 'Gus Mang', age: 19},
      {id:3, name: 'Andy', age: 25}
    ],
    otherState: 'Other other',
    showPersons: true
  }

  deletePersonsHandler = (personIndex) => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  switchShowPersons = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  render () {    
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) =>{
            return <Person 
            name={person.name} 
            age={person.age} 
            key={person.id}
            change={(event) =>this.changeNameHandler(event, person.id)}
            click={() => this.deletePersonsHandler(index)}/>
          })}
        </div>
      )
    }

    const classes = [];
    if (this.state.persons.length <= 1) {
      classes.push('red');
    } 
    if (this.state.persons.length <= 2) {
      classes.push('bold');
    }
    
    return (
      <div className="App">
        <h1>Hi</h1>
        <p className={classes.join('  ')}>This is</p>
        <button alt={this.state.showPersons} onClick={this.switchShowPersons}>Show Name</button>
        { persons }
      </div>
    );
  
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi'));
  }
};

export default App;