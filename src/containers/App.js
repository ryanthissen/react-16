import React, { Component } from 'react';
import styles from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

export const AuthContext = React.createContext(false);

class App extends Component {


  state = {
    persons: [
      { id: 'adfekj2', name: 'Jean', age: 22 },
      { id: 'adfhdfgdr', name: 'Freddie', age: 23 },
      { id: 'hgrr4', name: 'Stephanie', age: 11 }
    ],
    showPersons: false,
    authenticated: false,
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

  logUserInHandler = () => {
    this.setState({
      authenticated: true,
    })
  }

  render() {
    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} 
          />
        </div>
      );
    }

    return (
      <WithClass classes={styles.App}>
        <Cockpit
          title={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          login={this.logUserInHandler}
          toggle={this.togglePersonsHandler} />
        <AuthContext.Provider value={this.state.authenticated}>{persons}</AuthContext.Provider>
      </WithClass>
    );
  }
}

export default App;
