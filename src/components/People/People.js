import React from 'react';

import './People.css';

class People extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            people: [
                { id: 1, username: 'Jolli Bebeng' },
                { id: 2, username: 'Mc Dodongs' },
                { id: 3, username: 'George Tilap' }
            ]
        }
    }

    render() {
        const onlineList = this.state.people.map((person) =>
            <li key={ person.id }>{ person.username }</li>
        );

        return (
            <div className="People">
                <div className="content">
                    <h4>People ({ this.state.people.length })</h4>
                    <ul className="online">
                        { onlineList }
                    </ul>
                </div>
            </div>
        );
    };
}

export default People;
