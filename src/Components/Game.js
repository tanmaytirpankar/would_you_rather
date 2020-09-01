import './Game.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUserData } from '../utils/helper.js'
import { handleSelectAnswer } from '../Actions/shared.js'
import Stats from './Stats.js'


class Game extends Component {
	state = {
		answered: false
	}

	componentDidMount() {
		if (this.props.id==="") {
			alert("Login to visit page.")
			this.props.history.replace("/404")
			return null
		}
		this.props.id in this.props.authedUser['answers']
		?this.setState(() => ({answered: true}))
		:this.setState(() => ({answered: false}))
		if (this.props.authedUser===null) {
			alert("Login to visit page.")
			this.props.history.replace("")
		}
	}

	handleClickEvent = (e) => {
		e.preventDefault()
		var ele1 = document.getElementById("option_one")
		var ele2 = document.getElementById("option_two")
		if (ele1.checked) {
			this.props.dispatch(handleSelectAnswer(this.props.authedUser.id, this.props.id, ele1.value))
			this.setState(() => ({answered: true}))
		}
		else if(ele2.checked) {
			this.props.dispatch(handleSelectAnswer(this.props.authedUser.id, this.props.id, ele2.value))
			this.setState(() => ({answered: true}))	
		}
		else {
			alert("Some internal error has occurred. Please try later.")
		}
	}

	render() {
		if (this.props.id==="") {
			return null
		}
		let optionOneText=this.props.question.optionOne.text
		let optionTwoText=this.props.question.optionTwo.text
		let optionOneVotes=this.props.question.optionOne.votes.length
		let optionTwoVotes=this.props.question.optionTwo.votes.length
		return(
			<div>
				{
					this.state.answered === false
					? <div className='game'>
						<div className='author'>
							{this.props.user.name} asks:
						</div>
						<div className="game_interface">
							<img src={this.props.user.avatarURL} alt="Avatar not found"/>
							<h2>Would You Rather...</h2><br/><br/>
							<form>
								<input name="option" type='radio' id="option_one" value="optionOne"/>
								<label htmlFor="option_one">{optionOneText}</label>
								<br/><br/>
								<input name="option" type='radio' id="option_two" value="optionTwo"/>
								<label htmlFor="option_two">{optionTwoText}</label>
								<br/><br/>
								<input type='submit' onClick={this.handleClickEvent}/>
							</form>
							<br/>
						</div>
					</div>
					: <div className='result'>
						<div className='author'>
							Added by {this.props.user.name}
						</div>
						<div className='result_interface'>
							<img src={this.props.user.avatarURL} alt="Avatar not found"/>
							<h2>Results:</h2>
							<Stats optionText={optionOneText} votes={optionOneVotes} total={optionOneVotes+optionTwoVotes} selected={this.props.authedUser.answers[this.props.id]==="optionOne"} />
							<Stats optionText={optionTwoText} votes={optionTwoVotes} total={optionOneVotes+optionTwoVotes} selected={this.props.authedUser.answers[this.props.id]==="optionTwo"}/>
							<br/>
						</div>
					</div>
				}
			</div>
		)
	}
}

function mapStateToProps ({authedUser, users, questions}, { id }) {
	if(id==="") {
		return {authedUser}
	}
	return {
		authedUser,
		user: getUserData(users[questions[id].author]),
		question: questions[id],
	}
}

export default connect(mapStateToProps)(Game)