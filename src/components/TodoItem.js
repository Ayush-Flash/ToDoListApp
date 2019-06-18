import React, { Component } from 'react';

class TodoItem extends Component {
    getTodoItemStyle = () => {
        return {
            background: '#f4f4f4',
            borderBottom: '1px solid black',
            borderRadius: '15px',
            padding: '10px',
            width: '100%',
            margin: '0 auto',
            textDecoration: this.props.todo.isCompleted ? 'line-through': 'none',
        }
    }
    render() { 
        const {id ,title} = this.props.todo;
        return (
        <div>
            <div style = {this.getTodoItemStyle()}>
                <input type = "checkbox" onChange={this.props.toggleComplete.bind(this, id)}></input>{" "}
                { title }
                <button onClick = { this.props.deleteTask.bind(this, id) } style ={ this.btnStyle }>x</button>
            </div>
        </div>);
    }

    btnStyle = {
        background: '#ff0000',
        borderRadius: '50%',
        outline: 'none',
        padding: '5px 10px',
        float: 'right',
        boxShadow: '2px 2px 2px black'
    }
}
 
export default TodoItem;