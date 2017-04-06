import React from 'react';

import './ChatBoxCard.css';

class ChatBoxCard extends React.Component {
    render() {
        const className = (this.props.isUserAuthor) ? 'ChatBoxCard me' : 'ChatBoxCard';

        return (
            <div className={ className }>
                <div className="message">
                    <strong className="user">{ (this.props.isUserAuthor) ? 'You' : this.props.author }</strong>: { this.props.message }
                </div>
            </div>
        );
    };
}

export default ChatBoxCard;
