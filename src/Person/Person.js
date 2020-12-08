import React from 'react';
// using Es6 not class based 
const person = (props) => {
	return <h2>I'm {props.name} and {props.age} years old</h2>;
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