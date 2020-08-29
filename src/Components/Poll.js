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
				<p>{this.props.user.name}</p>
				<img src="{this.props.user.avatarURL}" alt="Avatar not found"/>
				<p>Would You Rather...</p>
				<p>{this.props.question.optionOne.text}</p>
				<button onClick={this.handleClickEvent}>View Poll</button>
				<br/>
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