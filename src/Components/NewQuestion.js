import './NewQuestion.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleCreateQuestion } from '../Actions/shared.js'
import { withRouter } from 'react-router-dom'

class NewQuestion extends Component {
	state={
		optionOneText: "",
		optionTwoText: ""
	}

	componentDidMount() {
		if (this.props.authedUser===null) {
			alert("Login to visit page.")
			this.props.history.replace("")
			return
		}
		const submitButton = document.getElementById("submitButton")
		submitButton.disabled = true
	}

	componentDidUpdate() {
		const submitButton = document.getElementById("submitButton")
		if (this.state.optionOneText==="" || this.state.optionTwoText==="") {
			submitButton.disabled = true
		} else {
			submitButton.disabled = false
		}
	}

	handleClickEvent = (e) => {
		e.preventDefault()
		var optionOne=document.getElementById("optionOne");
		var optionTwo=document.getElementById("optionTwo");
		this.props.dispatch(handleCreateQuestion({
			optionOneText: optionOne.value, 
			optionTwoText: optionTwo.value, 
			author: this.props.authedUser.id,
		}))
		this.props.history.push("/questions")
	}

	handleChange = (e) => {
		var optionOne=document.getElementById("optionOne");
		var optionTwo=document.getElementById("optionTwo");
		this.setState(() => ({
			optionOneText: optionOne.value,
			optionTwoText: optionTwo.value
		}))
	}

	render() {
		return(
			<div className="new_question">
				<h3>Create New Question</h3>
				Complete the Question
				<br/><br/>
				<b>Would you rather...</b>
				<br/><br/>
				<form>
					<input type="text" id="optionOne" onChange={this.handleChange} placeholder="Enter Option One Text Here"/>
					<h2>OR</h2>
					<input type="text" id="optionTwo" onChange={this.handleChange} placeholder="Enter Option Two Text Here"/>
					<br/>
					<button type="submit" id="submitButton" onClick={this.handleClickEvent}>Submit</button>
				</form>
			</div>
		)
	}
}

function mapStateToProps ({authedUser}) {
	return {
		authedUser: authedUser
	}
}

export default connect(mapStateToProps)(withRouter(NewQuestion))