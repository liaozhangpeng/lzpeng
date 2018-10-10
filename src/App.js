import React, { Component } from 'react';
import Todos from './Todos';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some cookies'},
      {id: 2, content: 'play soccer'}
    ]
  }

  deleteTodo = (id)=>{
    this.setState({
      todos: [...this.state.todos].filter(todo=>{return todo.id !== id}),
    })
  }
  render() {
    return (
      <div className="container">
        <h1 className="center blue-text">To dos</h1>
        <Todos todos={this.state.todos} deleteTodo={ this.deleteTodo }/>
      </div>
    );
  }
}

export default App;
