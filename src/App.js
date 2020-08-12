import React from 'react';
import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { handleInitialData } from './Actions/shared';
import { connect } from 'react-redux'

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }
    render() {
        return (
        <div className="App">
            Starter Code
        </div>
        );
    }
}

export default connect()(App);
