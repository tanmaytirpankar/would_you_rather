import './Rank.css'
import React from 'react'

function Rank (props) {
	return (
		<div className="rank">
			(//logo)
			<img src="{props.avatar}" alt="Avatar not found"/>
			{props.name}
			Answered Questions 
			{props.answers}
			Created Questions 
			{props.questions}
			Score
			{props.answers+props.questions}
		</div>
	)
}

export default Rank