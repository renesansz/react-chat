import React from 'react';

import ChatBoxControls from './ChatBoxControls/ChatBoxControls';
import ChatBoxCard from './ChatBoxCard/ChatBoxCard';

import './ChatBox.css';

class ChatBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [
                { id: 1, author: 'Jolli Bebeng', content: 'Hi!' },
                { id: 2, author: 'Mc Dodongs', content: 'Hello!' },
                { id: 3, author: 'George Tilap', content: 'Hola!' }
            ]
        };
    }

    render() {
        const messages = this.state.messages.map((message) =>
            <ChatBoxCard key={ message.id }
                         author={ message.author }
                         message={ message.content } />
        );
        
        return (
            <div className="ChatBox">
                <div className="content">
                    <h4>Chat Box</h4>
                    <div className="messages">
                        { messages }
                    </div>
                    <ChatBoxControls />
                </div>
            </div>
        );
    };
}

export default ChatBox;
