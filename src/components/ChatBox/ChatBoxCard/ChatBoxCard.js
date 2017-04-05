import React from 'react';

import './ChatBoxCard.css';

class ChatBoxCard extends React.Component {
    render() {
        return (
            <div className="ChatBoxCard">
                <span className="user">{ this.props.author }</span>: { this.props.message }
            </div>
        );
    };
}

export default ChatBoxCard;
