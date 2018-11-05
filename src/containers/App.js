import React, { Component } from 'react';
import styles from './App.module.css';
import Person from './Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class App extends Component {

  state = {
    persons: [
      { id: 'adfekj2', name: 'Jean', age: 22 },
      { id: 'adfhdfgdr', name: 'Freddie', age: 23 },
      { id: 'hgrr4', name: 'Stephanie', age: 11 }
    ],
    showPersons: false,
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({ persons: persons })
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({
      showPersons: !doesShow,
    })
  }

  render() {
    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (<ErrorBoundary  key={person.id}>
              <Person 
              name={person.name}
              age={person.age} 
              click={() => this.deletePersonHandler(index)}
              change={(event) => this.nameChangedHandler(event, person.id)} />
            </ErrorBoundary>)
          })}
        </div>
      );
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push(styles.red);
    }
    if (this.state.persons.length <=1) {
      classes.push(styles.italic);
    }
    if (this.state.persons.length <1) {
      classes.push(styles.bold);
    }
    return (
      <div className={styles.App}>
        <h1>Hi, I'm a React app.</h1>
        <p className={classes.join(' ')}>Testing dynamic classes</p>
        <button
          className={this.state.showPersons? styles.Red:''}
          onClick={this.togglePersonsHandler}>
            {this.state.showPersons? 'Hide Persons': 'Show Persons'}
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
