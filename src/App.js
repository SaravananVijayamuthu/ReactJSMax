import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';

const StyledButton = styled.button`
	background-color: ${props => props.alt ? 'red' : 'green'};
	font: inherit;
	border: 3px solid white;
	padding: 8px;
	color: white;
	&:hover {
		background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
		color: black;
	}
`;
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
		if (this.state.showState) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return (
							<Person
								click={() => this.deletePersonHandler(index)}
								name={person.name}
								age={person.age}
								key={person.id}
								changed={(event) => this.onNameChanged(event, person.id)}
							/>
						);
					})}
				</div>
			);
		}

		const classes = [];
		if (this.state.persons.length <= 2) {
			classes.push('red');
		}
		if (this.state.persons.length <= 1) {
			classes.push('bold');
		}

		return (
			<div className="App">
				{/* <header className="App-header"> */}
				{/* <img src={logo} className="App-logo" alt="logo" /> */}
				<h1>Hi, I'm a React App</h1>
				<p className={classes.join(' ')}>This is Working!!</p>
				<StyledButton alt={this.state.showState} onClick={this.toggleState}>Show Persons</StyledButton>
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
