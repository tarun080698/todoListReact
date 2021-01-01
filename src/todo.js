import React from "react";
import "../src/App.css";
import del from './assets/img/dustbin.png'

const Todo = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.reverse().map((item) => {
      return (
        <div className="card" key={item.id}>
          <div className="card-header left">
            <div>{item.title} <i className="right">{item.createdAt.slice(0, 10)}</i></div>
            <img src={del} alt="delete" className="right"onClick={() => {
                  deleteTodo(item.id);
                }}/>
          </div>
          <div className="card-body">
            <h5 className="card-title">{item.description}</h5>
            {/* <p className="card-text">It's a broader card with text below as a natural lead-in to extra content. This content is a little longer.</p> */}
          </div>
        </div>
      );
    })
  ) : (
    <p className="center green-text">No tasks for today!</p>
  );
  return <div className="list-group">{todoList}</div>;
};

export default Todo;
