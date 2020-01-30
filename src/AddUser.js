import React, {Component} from 'react'

class AddUser extends Component {
	state = {
		user: {
			firstName: '',
			lastName: '',
			username: ''
		},
		error: ''
	}


	handleInputChange = event => {
    const { name, value } = event.target;
	console.log(name, value);
    this.setState(currState => ({
      ...currState,
      user: {
        ...currState.user,
        [name]: value,
      },
    }));
  };

	updateError = (msg) => {
		this.setState((prevState) => ({
			...this.prevState,
			error: msg
		}))
	}

	addUser = event => {
		event.preventDefault();
		this.props.handleAddUser(this.state.user)
	}

	clearField = event => {
		this.updateFirstName('');
		this.updateLastName('');
		this.updateUsername('');
	}

	emptyFields = () => {
		const {firstName, lastName, username} = this.state.user;
		return (firstName === "" || lastName === "" || username === "")
	}
	render() {

		return (<form onSubmit={this.addUser}>
			<input type="text" placeholder="Enter First Name" name="firstName" value={this.state.user['firstName']} onChange={this.handleInputChange}/>
			<input type="text" placeholder="Enter Last Name" name="lastName" value={this.state.user['lastName']} onChange={this.handleInputChange}/>
			<input type="text" placeholder="Enter Username" name="username" value={this.state.user['username']} onChange={this.handleInputChange}/>
			<button disabled={this.emptyFields()}>Add User</button>
			<p style={{
					color: 'red'
				}}>{this.state.error}</p>
		</form>);
	}
}

export default AddUser;
