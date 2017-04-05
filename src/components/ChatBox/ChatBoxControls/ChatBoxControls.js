import React from 'react';

import './ChatBoxControls.css';

class ChatBoxControls extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null
        };
    }

    _renderButton() {
        if (this.state.user) {
            return <button className="btn btn-default btn-lg" type="submit">Send</button>;
        }
        return <button className="btn btn-default btn-lg" type="submit">Join Chat</button>;
    }

    render() {
        const textPlaceholder = (this.state.user) ? 'Enter Message' : 'Enter Name';

        return (
            <div className="ChatBoxControls">
                <form className="form-inline">
                    <textarea id="message" name="message" className="form-control" placeholder={ textPlaceholder }></textarea>
                    { this._renderButton() }
                </form>
            </div>
        );
    };
}

export default ChatBoxControls;
