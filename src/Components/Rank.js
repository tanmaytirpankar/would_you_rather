import './Rank.css'
import React from 'react'

function Rank (props) {
	return (
		<div className="rank">
			<img src={props.avatar} alt="Avatar not found"/>
			<div className="score">
				<b>Score</b>	
				<br/><br/>
				<h1>{props.answers+props.questions}</h1>
			</div>
			<h1>{props.name}</h1>
			<pre>Answered questions              {props.answers}</pre>
			<pre>Created Questions               {props.questions}</pre>
		</div>
	)
}

export default Rank