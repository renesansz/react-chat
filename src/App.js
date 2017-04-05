import React, { Component } from 'react';

import AppHeader from './components/AppHeader/AppHeader';
import ChatBox from './components/ChatBox/ChatBox';
import People from './components/People/People';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
            <AppHeader />
                <div className="App-container">
                    <ChatBox />
                    <People />
                </div>
            </div>
        );
    }
}

export default App;
