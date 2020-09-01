import './Stats.css'
import React from 'react'

function Stats (props) {
	return (
		<div className='stats'>
			{props.selected
			? <p className="vote">Your vote</p>
			: <p></p>
			}
			Would you rather {props.optionText}?
			<br/>
			<progress value={props.votes} max={props.total}/>
			{props.votes/props.total*100}%
			<br/>
			<p>{props.votes} out of {props.total}</p>
		</div>
	)
}

export default Stats