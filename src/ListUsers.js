import React, {Component} from 'react'
import UserCard from './UserCard.js'
class ListUsers extends Component{
  state = {
		btnState: 'show',
		numGames: 0
	}
  toggleBtn = () => {
    this.setState((prevState)=>({
      ...prevState,
      btnState: (prevState.btnState === 'show') ? 'hide' : 'show'
    }))
	}

  render(){


    const {users} = this.props;
    const {btnState} = this.state;
    return(
      <div style={{color: 'black'}}>
		<button onClick={(event) => this.toggleBtn()}>{btnState === 'show' ? 'Show the Number of Games Played' : 'Hide the Number of Games Played'}</button>
		<br/>
        <ol>
          {users.map((user, index) =>
            <UserCard user={user} index={index} btnState={this.state.btnState} numGames={this.state.numGames} />
          )}
        </ol>
      </div>
    );
}
}

export default ListUsers;
