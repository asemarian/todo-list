import React, { Component } from 'react';
import './TodoItem.css';


class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: this.props.task,
            isEditing: false
        };

        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDone = this.handleDone.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleDelete() {
        this.props.delete(this.props.id);
    }

    handleEdit() {
        this.setState({ isEditing: true });
    }

    handleDone() {
        this.props.activate(!this.props.active, this.props.id);
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.state.task.length === 0) {
            alert("Please add some text.");
        } else if (this.state.task.length > 50) {
            alert("Task is too long!");
        } else {
            this.setState({
                isEditing: false
            });
            this.props.edit(this.state.task, this.props.id);
        }
    }

    handleChange(e) {
        this.setState({
            task: e.target.value
        })
    }

    render() {
        return (
            this.state.isEditing ?
                <form onSubmit={this.handleSubmit} className="TodoItem-form">
                    <input type="text" placeholder="Edit the task..." value={this.state.task} onChange={this.handleChange} ref={input => input && input.focus()} className="TodoItem-input" />
                    <button title="Save" type="submit" className="TodoItem-button save">
                        <i className="fas fa-save"></i>
                    </button>
                </form>
                :
                <div className="TodoItem">
                    <div className={`TodoItem-text ${!this.props.active ? 'TodoItem-inactive' : ''}`}>
                        {this.props.task}
                    </div>
                    <button title="Delete" className="TodoItem-button delete" onClick={this.handleDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    {this.props.active && (

                        <button title="Edit" onClick={this.handleEdit} className="TodoItem-button edit">
                            <i className="fas fa-pen"></i>
                        </button>
                    )}
                    <button title={`Mark ${this.props.active ? "Done" : "Undone"}`} onClick={this.handleDone} className="TodoItem-button done">
                        <i className={`${this.props.active ? 'far' : 'fas'} fa-check-circle`}></i>
                    </button>
                </div>
        )
    }
}

export default TodoItem;