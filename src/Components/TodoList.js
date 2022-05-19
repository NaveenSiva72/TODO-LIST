import React from "react";
import Todo from "./Todo";
const TodoList = ({todos}) => {
  return (
    <div className="todo-container">
      <ul className="todo-list"></ul>
      {
          todos.map((todo) => (
              <Todo text={todo.text}/>
          ))
      }
    </div>
  );
};

export default TodoList;
