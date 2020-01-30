import React, {Component} from 'react';
import logo from './logo.svg';
import AddUser from './AddUser.js'
import ListUsers from './ListUsers.js'
import './App.css';

/* This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file. */

class App extends Component {
	state = {
		users: []
	}

	checkIfDuplicate = input => {
		const dublicateUser = this.state.users.filter((u) => {
			return u.username.toLowerCase() === input.toLowerCase()
		});
		return dublicateUser.length > 0;
	}

	addUser = user => {
		if (this.checkIfDuplicate(user.username)) {
			alert('dublicateUser');
			console.log(this.state);
		} else {
			this.setState(prevState => ({
				users: [
					...prevState.users,
					user
				]
			}));
		}
	}
	render() {
		return (<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo"/>
				<h1 className="App-title">ReactND - Coding Practice</h1>
				<AddUser handleAddUser={this.addUser}/>
				<ListUsers users={this.state.users}/>
			</header>
		</div>);
	}
}

export default App;
