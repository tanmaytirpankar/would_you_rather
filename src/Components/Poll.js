import './Poll.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUserData } from '../utils/helper.js'

class Poll extends Component {
	handleClickEvent = (e) => {
        e.preventDefault()
        this.props.handleButtonClick(this.props.id)
    }

	render() {
		return (
			<div className='poll'>
				<div className="author">
					{this.props.user.name} asks:
				</div>
				<div className="poll_intro">
					<img src={this.props.user.avatarURL} alt="Avatar not found"/>
					<br/>
					<b>Would You Rather...</b>
					<br/><br/>
					...{this.props.question.optionOne.text}...
					<br/>
					<button onClick={this.handleClickEvent}>View Poll</button>
				</div>
			</div>
		)
	}
}

function mapStateToProps ({authedUser, users, questions}, { id }) {
	return {
		authedUser,
		user: getUserData(users[questions[id].author]),
		question: questions[id],
	}
}

export default connect(mapStateToProps)(Poll)