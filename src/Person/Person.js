import React from 'react';
// import './Person.css';
import styled from 'styled-components';

const StyledDiv = styled.div`
		width: 60%;
		margin: 16px auto;
		border: 1px solid #000;
		padding: 16px;
		box-shadow: 0 2px 3px #ccc;
		text-align: center;
		@media (min-width: 500px) {
			width: 450px;
		}
`;
// using Es6 not class based
const person = (props) => {
	return (
		<StyledDiv>
			<h2 onClick={props.click}>
				I'm {props.name} and {props.age} years old
			</h2>
			<p>{props.children}</p>
			<input type="text" onChange={props.changed} value={props.name} />
		</StyledDiv>
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
