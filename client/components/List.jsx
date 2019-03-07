import React from 'react';
import ListEntry from './ListEntry.jsx';

class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            items: ['one', 'two', 'three']
        };
        this.changeText = this.changeText.bind(this);
        this.addItem = this.addItem.bind(this);
        this.clickItem = this.clickItem.bind(this);
    }
    changeText(event) {
        this.setState({
            text: event.target.value
        });
    }
    addItem(event) {
        event.preventDefault();
        this.setState({
            items: this.state.items.concat(this.state.text)
        });
        document.getElementById('myForm').reset();
    }
    clickItem(event) {
        alert('yo')
    }
    render() {
        return (
            <span>
                <form id='myForm' onSubmit={this.addItem}>
                Add to array: <input name="text" onChange={this.changeText}/>
                <input name="submit" type="submit"/>
                </form>
                <div>
                {this.state.items.map((text, index) => {
                    return (
                        <ListEntry
                            key={index}
                            item={text}
                            clickItem={this.clickItem}
                        />
                    );
                })}
                </div>
            </span>
        );
    }
};
export default List;