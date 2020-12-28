import React, { Component } from 'react';
// import logo from './logo.svg';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';

class App extends Component {
	state = {
		persons: [
			{ id: 'fdasda', name: 'Sarvi', age: 20 },
			{ id: 'Kies', name: 'Saro', age: 19 },
			{ id: 'flies', name: 'Baymax', age: 20 }
		],
		showState: false
	};

	onNameChanged = (event, id) => {
		const personIndex = this.state.persons.findIndex((p) => {
			return p.id === id;
		});
		const person = {
			...this.state.persons[personIndex]
		};
		person.name = event.target.value;
		const persons = [ ...this.state.persons ];
		persons[personIndex] = person;
		this.setState({ persons: persons });
	};

	deletePersonHandler = (personIndex) => {
		// const persons = this.state.persons;
		const persons = [ ...this.state.persons ];
		persons.splice(personIndex, 1);
		this.setState({ persons: persons });
	};

	toggleState = () => {
		const isShow = this.state.showState;
		this.setState({ showState: !isShow });
	};

	render() {
		let persons = null;
		let btnclasses = [classes.button];
		if (this.state.showState) {
			persons = (
				<div>
					<Persons 
						persons = {this.state.persons}
						delete = {this.deletePersonHandler}
						change = {this.onNameChanged}
					/>
				</div>
			);
			btnclasses.push(classes.Red);
		}

		const assignedClasses = [];
		if (this.state.persons.length <= 2) {
			assignedClasses.push(classes.red);
		}
		if (this.state.persons.length <= 1) {
			assignedClasses.push(classes.bold);
		}

		return (
			<div className={classes.App}>
				{/* <header className="App-header"> */}
				{/* <img src={logo} className="App-logo" alt="logo" /> */}
				<h1>Hi, I'm a React App</h1>
				<p className={assignedClasses.join(' ')}>This is Working!!</p>
				<button className={btnclasses.join(' ')} onClick={this.toggleState}>Show Persons</button>
				{persons}
				{/* </header> */}
			</div>
		);
	}
}

export default App;

// function App() {
// 	const [personState, changePersonState] = useState({
// 		persons:[
// 			{name:"Sarvi", age: 20},
// 			{name:"Saro", age: 19},
// 			{name:"Baymax", age: 20},
// 		]
// 	})
// 	const switchNameHandler = () => {
// 		changePersonState({
// 			persons:[
// 				{name:"Saravanan V", age: 21},
// 				{name:"Saravanan M", age: 20},
// 				{name:"Baymax Alpha", age: 21},
// 			]
// 		})
// 	}
// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 				<p>This is Awesome dude!!!!!!!!</p>
// 				<button onClick={switchNameHandler}>Switch Name</button>
// 				<Person name = {personState.persons[0].name} age = {personState.persons[0].age}/>
// 				<Person name = {personState.persons[1].name} age = {personState.persons[1].age}/>
// 				<Person name = {personState.persons[2].name} age = {personState.persons[2].age}/>
// 			</header>
// 		</div>
// 	);
// }

// export default App;
