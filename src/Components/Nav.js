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
			<nav className='nav'>
				<ul>
					<li>
						<NavLink to='/questions' activeClassName='active' onClick={this.checkAuthedUser}>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to='/add' activeClassName='active' onClick={this.checkAuthedUser}>
							Create Question
						</NavLink>
					</li>
					<li>
						<NavLink to='/leaderboard' exact activeClassName='active' onClick={this.checkAuthedUser}>
							Leader Board
						</NavLink>
					</li>
				</ul>
				{this.props.authedUser === null
				? <div></div>
				: <div className="currentUser">
					<p>Hello, {this.props.authedUser.name}</p>
					<img src="{this.props.authedUser.avatarURL}"/>
					<NavLink to='/' exact>
						<button type="push" onClick={this.handleOnClick}>Logout</button>
					</NavLink>
				</div> }
			</nav>
		)
	}
}

function mapStateToProps ({authedUser}) {
    return {authedUser: authedUser}
}

export default connect(mapStateToProps)(Nav)