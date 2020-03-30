import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import './TodoList.css';

class TodoList extends Component {
    constructor(props) {
        super(props);

        localStorage.setItem("items", JSON.stringify(JSON.parse(localStorage.getItem("items")) || []));

        this.state = {
            items: JSON.parse(localStorage.getItem("items"))
        }

        this.add = this.add.bind(this);
        this.edit = this.edit.bind(this);
        this.delete = this.delete.bind(this);
        this.activate = this.activate.bind(this);
    }

    add(item) {
        this.setState(state => (
            {
                items: [...state.items, item]
            }
        ));

        let items = [...JSON.parse(localStorage.getItem("items")), item];
        localStorage.setItem("items", JSON.stringify(items));
    }

    delete(id) {
        this.setState(state => (
            {
                items: state.items.filter(item => item.id !== id)
            }
        ));

        let items = JSON.parse(localStorage.getItem("items")).filter(item => item.id !== id);
        localStorage.setItem("items", JSON.stringify(items));
    }

    activate(bool, id) {
        this.setState(state => (
            {
                items: state.items.map(item => item.id === id ? { ...item, active: bool } : { ...item })
            }
        ));

        let items = JSON.parse(localStorage.getItem("items")).map(item => item.id === id ? { ...item, active: bool } : { ...item });
        localStorage.setItem("items", JSON.stringify(items));
    }

    edit(task, id) {
        this.setState(state => (
            {
                items: state.items.map(item => item.id === id ? { ...item, task: task } : { ...item })
            }
        ));

        let items = JSON.parse(localStorage.getItem("items")).map(item => item.id === id ? { ...item, task: task } : { ...item });
        localStorage.setItem("items", JSON.stringify(items));
    }

    render() {
        return (
            <div className="TodoList">
                <TransitionGroup component={null}>
                    {this.state.items.map(item =>
                        <CSSTransition timeout={500} classNames="slide" key={item.id} >
                            <div>
                                <TodoItem task={item.task} id={item.id} key={item.id} delete={this.delete} activate={this.activate} active={item.active} edit={this.edit} />
                            </div>
                        </CSSTransition>
                    )}
                    <TodoForm add={this.add} />
                </TransitionGroup>
            </div>
        )
    }
}

export default TodoList;