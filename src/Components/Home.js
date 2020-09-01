import './Home.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Poll from './Poll.js'
import Game from './Game.js'
import { withRouter } from 'react-router-dom'

class Home extends Component {
	state = {
		playgame: false,
		viewid: ''
	}

	componentDidMount() {
        document.getElementById("Answered").style.display = "none";
		document.getElementById("UnansweredButton").className += " active";
		if (this.props.unansweredQuestionIds===undefined) {
			alert("Login to visit page.")
			this.props.history.replace("")
		}
    }

	handleClickEvent = (id) => {
		this.setState(() => ({
            playgame: true,
            viewid: id,
        }))
		this.props.handleIdPass(id)
        this.props.history.push("/questions/".concat(id))
	}

	tabSwitcher = (e) => {
		// Declare all variables
		var i, tabcontent, tablinks;

		// Get all elements with class="tabcontent" and hide them
		tabcontent = document.getElementsByClassName("tabcontent");
		for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = "none";
		}

		// Get all elements with class="tablinks" and remove the class "active"
		tablinks = document.getElementsByClassName("tablinks");
		for (i = 0; i < tablinks.length; i++) {
			tablinks[i].className = tablinks[i].className.replace(" active", "");
		}

		// Show the current tab, and add an "active" class to the button that opened the tab
		document.getElementById(e.target.value).style.display = "block";
		e.currentTarget.className += " active";
	}

	render() {
		return (
			<div className='home'>
				{
					this.state.playgame === true
					? <Game id={this.state.viewid} />
					: <div className="Polls">
						<div className="tab">
						  	<button id="UnansweredButton" className="tablinks" onClick={this.tabSwitcher} value="Unanswered">Unanswered Questions</button>
						  	<button id="AnsweredButton" className="tablinks" onClick={this.tabSwitcher} value="Answered">Answered Questions</button>
						</div>
						<div id="Unanswered" className="tabcontent"> {
							this.props.unansweredQuestionIds!==undefined
							? this.props.unansweredQuestionIds.map((id) => (
								<div key={id}>
									<Poll id={id} handleButtonClick={this.handleClickEvent}/>
									<br/>
								</div>
							)): <div></div>
						} </div>
						<div id="Answered" className="tabcontent"> {
							this.props.unansweredQuestionIds!==undefined
							? this.props.answeredQuestionIds.map((id) => (
								<div key={id}>
									<Poll id={id} handleButtonClick={this.handleClickEvent}/>
									<br/>
								</div>
							)): <div></div>
						} </div>
					</div>
				}
			</div>
		)
	}
}

function mapStateToProps({authedUser, questions, users}) {
	let unansQuestIds = Object.keys(questions)
						.sort((a,b)=>questions[b].timestamp-questions[a].timestamp)
	return authedUser!==null
		?{
		unansweredQuestionIds: unansQuestIds
			.filter((questionId)=>!Object.keys(authedUser.answers).includes(questionId)),
		answeredQuestionIds: Object.keys(authedUser.answers)
							.sort((a,b)=>questions[b].timestamp-questions[a].timestamp),
	}
	:{}
}

export default connect(mapStateToProps)(withRouter(Home))