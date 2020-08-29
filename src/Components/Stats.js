import './Rank.css'
import React from 'react'

function Stats (props) {
	return (
		<div className='stats'>
			{props.selected
			? <p>Your vote</p>
			: <p></p>
			}
			<p>{props.optionText}</p>
			<br/>
			<p>percentage bar</p>
			<br/>
			<p>{props.votes} out of {props.total}</p>
		</div>
	)
}

export default Stats