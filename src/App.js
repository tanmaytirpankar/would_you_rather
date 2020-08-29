import React, { Component } from 'react'
import './App.css';
import { handleInitialData } from './Actions/shared';
import { connect } from 'react-redux'
import Login from './Components/Login.js'
import Home from './Components/Home.js'
import Game from './Components/Game.js'
import NewQuestion from './Components/NewQuestion.js'
import LeaderBoard from './Components/LeaderBoard.js'
import Nav from './Components/Nav.js'
import NotFound from './Components/NotFound.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
    state={
        currentQuestionId: ""
    }
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    getId=(id)=>{
        this.setState(() => ({
            currentQuestionId: id,
        }))
    }
    render() {
        return (
            <Router>
                <div className="App">
                    <Nav authedUser={this.props.authedUser}/>
                    <div>
                        <Switch>
                            <Route exact path='/' component={Login} />
                            <Route path='/404' component={NotFound} />
                            <Route exact path='/questions' render={(props)=>(<Home {...props} handleIdPass={this.getId}/>)} />
                            <Route path='/add' component={NewQuestion} />
                            <Route path='/leaderboard' component={LeaderBoard} />
                            <Route path={'/questions/'.concat(this.state.currentQuestionId)} render={(props)=>(<Game {...props} id={this.state.currentQuestionId} />)} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default connect()(App)
