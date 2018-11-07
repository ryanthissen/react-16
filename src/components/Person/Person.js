import React, { Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Person.module.css';
import WithClass from '../../hoc/WithClass';  

class Person extends Component {
  render() {
    return(
      <WithClass classes={styles.Person}>
        <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old.</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.change} value={this.props.name} />
      </WithClass>
    )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  change: PropTypes.func,
}

export default Person;