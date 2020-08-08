import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          <span className="center red-text" onClick={() => {deleteTodo(todo.id)}}>
            {todo.task}
          </span>
        </div>
      );
    })
  ) : (
    <p className="center green-text">No tasks for today!</p>
  );
  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
