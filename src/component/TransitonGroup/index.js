import React from 'react'
import TransitionGroup from 'react-transition-group/TransitionGroup';
import FadeTransition from './_Fade'

class TodoList extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {items: ['hello', 'world', 'click', 'me']}
    }
    handleAdd() {
        const newItems = this.state.items.concat([
            prompt('Enter some text')
        ]);
        this.setState({ items: newItems });
    }
    handleRemove(i) {
        let newItems = this.state.items.slice();
        newItems.splice(i, 1);
        this.setState({items: newItems});
    }
    render() {
        return (
            <div>
                <button onClick={() => this.handleAdd()}>Add Item</button>
                <TransitionGroup>
                    {this.state.items.map((item, i) => (
                        <FadeTransition key={item} in={true}>
                            <div>
                                {item}{' '}
                                <button onClick={() => this.handleRemove(i)}>
                                    remove
                                </button>
                            </div>
                        </FadeTransition>
                    ))}
                </TransitionGroup>
            </div>
        );
    }
}

export default TodoList