import './Login.css'
import React, { Component } from 'react'
import logo from '../logo.svg';
import { connect } from 'react-redux'
import { setAuthedUser } from '../Actions/authedUser.js'
import { withRouter } from 'react-router-dom'

class Login extends Component {
    handleClickEvent = (e) => {
        e.preventDefault()
        const authedName=document.getElementById('users').value
        const authedID=Object.keys(this.props.users).filter((user) => this.props.users[user].name === authedName)
        this.props.dispatch(setAuthedUser(this.props.users[authedID]))
        this.props.history.push("/questions")
    }

    render() {
        return (
            <div className='login'>
                <div className='greeting'>
                    <h3>Welcome to the Would You Rather App!</h3>
                    <p>Please sign in to continue</p>
                </div>
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Sign In</h2>
                <form>
                    <select name="users" id="users">
                        {Object.keys(this.props.users).map((key)=>{
                            return <option key={this.props.users[key].id} value={this.props.users[key].name}>{this.props.users[key].name}</option>
                        })}
                    </select>
                    <br/><br/>
                    <input type="submit" onClick={this.handleClickEvent}/>
                </form>
            </div>
        )
    }
}
function mapStateToProps({users}) {
    return {
        users: users
    }
}

export default connect(mapStateToProps)(withRouter(Login))