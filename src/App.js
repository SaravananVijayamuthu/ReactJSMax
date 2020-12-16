import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [ { name: 'Sarvi', age: 20 }, { name: 'Saro', age: 19 }, { name: 'Baymax', age: 20 } ],
		showState: false
	};

	deletePersonHandler = (personIndex) => {
		const persons = this.state.persons;
		persons.splice(personIndex, 1);
		this.setState({persons: persons})
	}

	onNameChanged = (event) => {
		this.setState({
			persons: [
				{ name: 'Saravanan V', age: 21 },
				{ name: event.target.value, age: 20 },
				{ name: 'Baymax Alpha', age: 21 }
			]
		});
	};

	toggleState = () => {
		const isShow = this.state.showState;
		this.setState({ showState: !isShow });
	};

	render() {
		const btnStyle = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '3px solid blue',
			padding: '8px'
		};

		let persons = null;
		if (this.state.showState) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return <Person click={() => this.deletePersonHandler(index)} name={person.name} age={person.age} />;
					})}
				</div>
			);
		}
		
		return (
			<div className="App">
				{/* <header className="App-header"> */}
				{/* <img src={logo} className="App-logo" alt="logo" /> */}
				<p>This is Awesome dude!!!!!!!!</p>
				<button style={btnStyle} onClick={this.toggleState}>
					Show Persons
				</button>
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
