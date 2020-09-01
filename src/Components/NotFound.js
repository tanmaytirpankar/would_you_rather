import './NotFound.css'
import React from 'react'
import logo from '../logo.svg';
import { NavLink } from 'react-router-dom'

function NotFound() {
	return (
		<div className="notfound">
			<img src={logo} className="App-logo" alt="logo" />
			<p>Great. You just broke the internet. Go <NavLink to="/">back</NavLink> to where you came from.</p>
		</div>
	)
}

export default NotFound