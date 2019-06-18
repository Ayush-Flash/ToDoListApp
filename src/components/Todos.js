import React, { Component } from 'react';
import TodoItem from './TodoItem'; 
class Todos extends Component {
    render() { 
        return ( 
        <div>
            {
                this.props.todos.map((todo) => {
                    return(
                         <TodoItem key = { todo.id } todo = { todo } toggleComplete = {this.props.toggleComplete} deleteTask = { this.props.deleteTask }/> 
                    );
            })
            }
        </div>
        );
    }
}
 
export default Todos;