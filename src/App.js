import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

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
    const styles = {
      buttonStyle: {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid black',
        padding: '8px',
        cursor: 'pointer',
      }
    }

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (<Person 
              key={person.id}
              name={person.name}
              age={person.age} 
              click={() => this.deletePersonHandler(index)}
              change={(event) => this.nameChangedHandler(event, person.id)} />)
          })}
        </div>
      );

      styles.buttonStyle.backgroundColor = 'red';
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <=1) {
      classes.push('italic');
    }
    if (this.state.persons.length <1) {
      classes.push('bold');
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React app.</h1>
        <p className={classes.join(' ')}>Testing dynamic classes</p>
        <button 
          style={styles.buttonStyle}
          onClick={this.togglePersonsHandler}>
            {this.state.showPersons? 'Hide Persons': 'Show Persons'}
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
