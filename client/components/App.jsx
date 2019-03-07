import React from 'react';
import List from './List.jsx';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            first: '',
            last: ''
        };
        this.changeFirstName = this.changeFirstName.bind(this);
        this.changeLastName = this.changeLastName.bind(this);
    }
    changeFirstName(event) {
        this.setState({
            first: event.target.value
        })
    }
    changeLastName(event) {
        this.setState({
            last: event.target.value
        })
    }
    render() {
        return (
            <span>
                {this.state.first === 'Jeff' && this.state.last === 'Jardine' ? (
                    <List />
                ) : (
                    <div>
                        <div>Hello from Component</div>
                        <div>{this.state.first}</div>
                        First: <input name="first" onChange={this.changeFirstName}></input>
                        <div>{this.state.last}</div>
                        Last: <input name="last" onChange={this.changeLastName}></input>
                    </div>
                )}
            </span>
        );
    }
};

export default App;