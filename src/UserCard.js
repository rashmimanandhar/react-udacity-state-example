import React, {Component} from 'react'

class UserCard extends Component {


	render() {
		const {user, index, btnState, numGames} = this.props;


		return(

			<li key={index}>{user.username} played {btnState === 'show' ? numGames : '\*'} games</li>


		);
	}
}

export default UserCard;
