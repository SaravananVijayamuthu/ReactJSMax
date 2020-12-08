import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>This is Awesome dude!!!!!!!!</p>
				<Person name = "Sarvi" age = "20" />
				<Person name = "Saro" age = "19" />
				<Person name = "Baymax" age = "20" />
			</header>
		</div>
	);
}

export default App;
