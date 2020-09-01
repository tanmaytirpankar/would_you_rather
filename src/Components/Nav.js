import './Nav.css'
import React, { Component} from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUser } from '../Actions/authedUser.js'

class Nav extends Component {
	handleOnClick=() => {
		this.props.dispatch(setAuthedUser(null))
	}

	checkAuthedUser=(e) => {
		if (this.props.authedUser === null) {
			e.preventDefault()
			console.warn("Please login before proceeding.")
			alert("You need to login to visit this page.")
		}

	}
	render () {
		return( 
			<div className='nav'>
				<NavLink className="navlink" to='/questions' exact activeClassName='active' onClick={this.checkAuthedUser}>
					<b>Home</b>
				</NavLink>
				&nbsp;&nbsp;
				<NavLink className="navlink" to='/add' activeClassName='active' onClick={this.checkAuthedUser}>
					<b>Create Question</b>
				</NavLink>
				&nbsp;&nbsp;
				<NavLink className="navlink" to='/leaderboard' activeClassName='active' onClick={this.checkAuthedUser}>
					<b>Leader Board</b>
				</NavLink>
				{this.props.authedUser === null
				? <span></span>
				: <span className="currentUser">
					Hello, {this.props.authedUser.name}
					<img src={this.props.authedUser.avatarURL} alt="Avatar not found"/>
					<NavLink to='/' exact>
						<button type="push" onClick={this.handleOnClick}>Logout</button>
					</NavLink>
				</span> }
			</div>
		)
	}
}

function mapStateToProps ({authedUser}) {
    return {authedUser: authedUser}
}

export default connect(mapStateToProps)(Nav)