import './LeaderBoard.css'
import React from 'react'
import { connect } from 'react-redux'
import Rank from './Rank.js'
import { withRouter } from 'react-router-dom'

function LeaderBoard (props){
		let userKeys = Object.keys(props.users).sort((a, b) => {
			return (props.users[b].questions.length+Object.keys(props.users[b].answers).length) 
				- (props.users[a].questions.length+Object.keys(props.users[a].answers).length)
		})
		if (props.authedUser===null) {
			alert("Login to visit page.")
			props.history.replace("")
		}
		return (
			<div className="leaderboard"> {
				userKeys.map((user) => (
					<div key={props.users[user].id}>
						<Rank
						avatar={props.users[user].avatarURL} 
						name={props.users[user].name} 
						answers={Object.keys(props.users[user].answers).length} 
						questions={props.users[user].questions.length}/>
					</div>
				))
			} </div>
		)
	
}

function mapStateToProps ({authedUser, users}) {
	return {
		authedUser,
		users,
	}
}

export default connect(mapStateToProps)(withRouter(LeaderBoard))