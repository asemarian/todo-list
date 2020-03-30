import React, { Component } from 'react';
import uuid from 'uuid/v4';
import './TodoForm.css';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: "",
            id: uuid(),
            active: true
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ task: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.state.task.length === 0) {
            alert("Please add some text.");
        } else if (this.state.task.length > 50) {
            alert("Task is too long!");
        } else {
            this.props.add(this.state);
            this.setState({ task: "", id: uuid(), active: true });
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="TodoForm-container">
                <input type="text" placeholder="What do you want to do today?" value={this.state.task} onChange={this.handleChange} autoFocus className="TodoForm-input" />
                <button type="submit" className="TodoForm-button" title="Add"><i className="fas fa-plus"></i>
                </button>
            </form>
        )
    }
}

export default TodoForm;