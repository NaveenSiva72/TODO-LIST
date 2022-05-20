import React from "react";
const Todo = ({ text, setTodos,todos,id }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== id))
  };
  /*const completeHandler = () => {
    setTodos( todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      }
    ));
  };*/

  return (
    <div className="todo">
      <li className="todo-item">{text}</li>
      <button className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};
export default Todo;
