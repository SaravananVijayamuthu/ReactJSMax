import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons:[
			{name:"Sarvi", age: 20},
			{name:"Saro", age: 19},
			{name:"Baymax", age: 20},
		]
	}
	render() {
		return (
			<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>This is Awesome dude!!!!!!!!</p>
				<Person name = {this.state.persons[0].name} age = {this.state.persons[0].age}/>
				<Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}/>
				<Person name = {this.state.persons[2].name} age = {this.state.persons[2].age}/>
			</header>
		</div>
		)
	}
}

export default App;


// function App() {
// 	return (
		// <div className="App">
		// 	<header className="App-header">
		// 		<img src={logo} className="App-logo" alt="logo" />
		// 		<p>This is Awesome dude!!!!!!!!</p>
		// 		<Person name = "Sarvi" age = "20" />
		// 		<Person name = "Saro" age = "19">And I'm a Dev</Person>
		// 		<Person name = "Baymax" age = "20" />
		// 	</header>
		// </div>
// 	);
// }

// export default App;