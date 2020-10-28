import React from "react";
import "../src/App.css"

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.reverse().map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          <span className="left">
          <p>{todo.task}</p>
          <i className="fa fa-trash right" onClick={() => { deleteTodo(todo.id) }}></i>
          </span>
        </div>
      );
    })
  ) : (
    <p className="center green-text">No tasks for today!</p>
  );
  return <div className="todos">{todoList}</div>;
};

export default Todos;
