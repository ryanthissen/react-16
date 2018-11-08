import React from 'react';
import styles from './Cockpit.module.css';
import Aux from '../../hoc/Aux';

const cockpit = (props) => {

  let classes = [];
  let btnClass = styles.Button;
  if (props.showPersons) {
    btnClass = [styles.Button, styles.Red].join(' ')
  };

  if (props.persons.length <= 2) {
    classes.push(styles.red);
  }
  if (props.persons.length <=1) {
    classes.push(styles.italic);
  }
  if (props.persons.length <1) {
    classes.push(styles.bold);
  }
  
  return (
    <Aux>
      <h1>{props.title}</h1>
      <p className={classes.join(' ')}>Testing dynamic classes</p>
      <button
        className={btnClass}
        onClick={props.toggle}>
          {props.showPersons? 'Hide Persons': 'Show Persons'}
      </button>
      <button onClick={props.login}>Log In</button>
    </Aux>
  )
}

export default cockpit;