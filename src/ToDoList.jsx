import React, {Component} from 'react';
import TodoItems from './ToDoItems';
import './TodoList.css'

class TodoList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
        this.addItem = this
            .addItem
            .bind(this);

        this.deleteItem = this
            .deleteItem
            .bind(this)
    }

    deleteItem(key) {

        const filteredItems = this
            .state
            .items
            .filter(item => {
                return (item.key !== key)
            })

        this.setState(prevState => ({items: filteredItems}))
    }

    addItem(e) {
        e.preventDefault()

        if (this._inputElement.value !== "") {
            let newItem = {
                text: this._inputElement.value,
                key: Date.now()
            }
            this.setState(prevState => {
                return {
                    items: prevState
                        .items
                        .concat(newItem)
                }
            })
            this._inputElement.value = '';
            console.log(this.state.items)

        }

    }

    render() {
        return (
            <div className='todoListMain'>
                <div className='header'>
                    <form onSubmit={this.addItem}>
                        <input placeholder='enter task' ref={(a) => this._inputElement = a}></input>
                        <button type='submit'>add</button>
                    </form>
                </div>
                <TodoItems delete={this.deleteItem} entries ={this.state.items}/>
            </div>
        )
    }
}

export default TodoList;
