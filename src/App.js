import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/Header';
import AddToDo from './components/AddToDo';
import './style/App.css';

class App extends Component {
    state = {
        todos: []
    }

    toggleComplete = (id) => {
        this.setState({ todos: this.state.todos.map(todo => {
            if(todo.id === id) {
                todo.isCompleted = !todo.isCompleted;
            }
            return todo;
        })});
    } 

    deleteTask = (id) => {
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
    }

    addToDo = (title) => {
        const newTodo = {
            id: Math.random(),
            title: title,
            isCompleted: false
        }
        this.setState({todos: [...this.state.todos, newTodo]});
    }

    render() { 
        return (  <div>
            <Header />
            <AddToDo addToDo = {this.addToDo} />
            <Todos todos = {this.state.todos} toggleComplete = {this.toggleComplete} deleteTask = { this.deleteTask }/>
        </div>);
    }
}
 
export default App;