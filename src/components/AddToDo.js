import React, { Component } from 'react';

class AddToDo extends Component {

    state = {
        title: ''
    }

    inputStyle = {
        display: 'flex',
        width: '100%',
        height: '30px',
        padding: '5px',
        borderRadius: '15px',
        outline: 'none',
    }
    addBtnStyle = {
        width: '100%',
        height: '30px',
        marginBottom: '10px',
        outline: 'none',
        borderRadius: '15px',
        fontWeight: 'bold',
    }

    addOnSubmit = (e) => {
        e.preventDefault()
        if(this.state.title !=="") {
        this.props.addToDo(this.state.title);
        this.setState({title:''});
        }
    }

    setTitle = (e) => {
        this.setState({title: e.target.value});
    }
    render() { 
        return ( <form onSubmit = { this.addOnSubmit } style={this.addToDoStyle}>
            <input style = {this.inputStyle} placeholder = "add your task.." value={this.state.title} onChange = {this.setTitle}></input>
            <input type = "submit" style={this.addBtnStyle}></input>
        </form>);
    }
}
 
export default AddToDo;