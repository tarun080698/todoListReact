import React, { Component } from "react";
import "./App.css";
import Todo from "./todo";
import AddItem from "./AddItem"

class App extends Component {
  state = {
    todos: [
    ],
  };

  deleteItem=(id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos
    });
  }


  addItem = (item) => {
    console.log(item)
    item.id = Math.random()
    let todos = [...this.state.todos, item]
    this.setState({
      todos
    });

  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center grey-text"> To-Do List</h1>
        <AddItem item={this.addItem}/>
        <Todo todos={this.state.todos} deleteTodo={this.deleteItem}/>
      </div>
    );
  }
}
export default App;



