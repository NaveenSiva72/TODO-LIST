import React from "react";

const Todo = ({inputText}) => {
  return (
    <div className="todo">
      <ul className="todo-item">hey</ul>
      <button className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
