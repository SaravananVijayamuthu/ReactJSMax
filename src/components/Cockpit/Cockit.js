import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {
	const assignedClasses = [];
	let btnclasses = '';
	if (props.showState) {
		btnclasses=classes.Red;
	}
	if (props.persons.length <= 2) {
		assignedClasses.push(classes.red);
	}
	if (props.persons.length <= 1) {
		assignedClasses.push(classes.bold);
	}
	return (
		<div className={classes.Cockpit}>
			<h1>Hi, I'm a React App</h1>
			<p className={assignedClasses.join(' ')}>This is Working!!</p>
			<button className={btnclasses} onClick={props.clicked}>
				Show Persons
			</button>
		</div>
	);
};

export default cockpit;
