import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


function App() {
	const [personState, changePersonState] = useState({
		persons:[
			{name:"Sarvi", age: 20},
			{name:"Saro", age: 19},
			{name:"Baymax", age: 20},
		]
	})
	const switchNameHandler = () => {
		changePersonState({
			persons:[
				{name:"Saravanan V", age: 21},
				{name:"Saravanan M", age: 20},
				{name:"Baymax Alpha", age: 21},
			]
		}) 
	}
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>This is Awesome dude!!!!!!!!</p>
				<button onClick={switchNameHandler}>Switch Name</button>
				<Person name = {personState.persons[0].name} age = {personState.persons[0].age}/>
				<Person name = {personState.persons[1].name} age = {personState.persons[1].age}/>
				<Person name = {personState.persons[2].name} age = {personState.persons[2].age}/>
			</header>
		</div>
	);
}

export default App;





// class App extends Component {
// 	state = {
		// persons:[
		// 	{name:"Sarvi", age: 20},
		// 	{name:"Saro", age: 19},
		// 	{name:"Baymax", age: 20},
		// ]
// 	}
// 	/*property tat can be executed as func. 
// 	we r changing the state of person names here through btn click event listener*/ 
// 	switchNameHandler = () =>{
		// console.log("Btn check!!")
		//setState method is provided by react to change the state of component
// 		this.setState({
// 			persons:[
// 				{name:"Saravanan V", age: 21},
// 				{name:"Saravanan M", age: 20},
// 				{name:"Baymax Alpha", age: 21},
// 			]
// 		}) 
// 	}

// 	render() {
// 		return (
// 			<div className="App">
// 			<header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 				<p>This is Awesome dude!!!!!!!!</p>
				// <button onClick={this.switchNameHandler}>Switch Name</button>
				// <Person name = {personState.persons[0].name} age = {personState.persons[0].age}/>
				// <Person name = {personState.persons[1].name} age = {personState.persons[1].age}/>
				// <Person name = {personState.persons[2].name} age = {personState.persons[2].age}/>
// 			</header>
// 		</div>
// 		)
// 	}
// }

// export default App;


