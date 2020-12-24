import React from 'react';
import classes from './Person.module.css';

// using Es6 not class based
const person = (props) => {
	return (
		<div className={classes.Person}>
			<h2 onClick={props.click}>
				I'm {props.name} and {props.age} years old
			</h2>
			<p>{props.children}</p>
			<input type="text" onChange={props.changed} value={props.name} />
		</div>
	);
};
export default person;

//class based
// import React, { Component } from 'react';

// class Person extends Component {
// 	render() {
// 		return (
// 			<div>
// 				<h2>'Hi This is valid Person'</h2>
// 			</div>
// 		);
// 	}
// }

// export default Person;
