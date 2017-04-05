import React from 'react';

import './ChatBoxCard.css';

class ChatBoxCard extends React.Component {
    render() {
        return (
            <div className="ChatBoxCard">
                <div className="message">
                    <strong className="user">{ this.props.author }</strong>: { this.props.message }
                </div>
            </div>
        );
    };
}

export default ChatBoxCard;
