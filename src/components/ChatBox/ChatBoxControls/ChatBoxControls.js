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
            return <button class="btn btn-default btn-lg" type="submit">Send</button>;
        }
        return <button class="btn btn-default btn-lg" type="submit">Register</button>;
    }

    render() {
        return (
            <div className="ChatBoxControls">
                <form className="form-inline">
                    <textarea id="message" name="message" className="form-control"></textarea>
                    { this._renderButton() }
                </form>
            </div>
        );
    };
}

export default ChatBoxControls;
