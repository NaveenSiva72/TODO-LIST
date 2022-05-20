import React,{useState} from "react";
const Todo = ({ text, setTodos,todos,id,todo }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== id))
  };
  const completeHandler = () => {
    setTodos( todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
        
      }
    ));
  };
  const [finish, setFinish] = useState("todo-item");

  const lastchance=()=>
  {
    completeHandler();
    setFinish("todo-item completed")
  }

  return (
    <div className="todo">
      <li className={finish}>{text}</li>
      <button onClick={lastchance} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};
export default Todo;
