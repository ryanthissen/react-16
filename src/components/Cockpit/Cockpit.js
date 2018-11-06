import React from 'react';
import styles from './Cockpit.module.css';

const cockpit = (props) => {

  let classes = [];
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
    <div className={styles.Cockpit}>
      <h1>{props.title}</h1>
      <p className={classes.join(' ')}>Testing dynamic classes</p>
      <button
        className={props.showPersons? styles.Red:''}
        onClick={props.toggle}>
          {props.showPersons? 'Hide Persons': 'Show Persons'}
      </button>
    </div>
  )
}

export default cockpit;