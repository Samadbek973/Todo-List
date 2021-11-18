import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const Todos = ({ todos, removeTodo, editTodo }) => {
  console.log(todos);
  return todos.map((todo) => {
    return (
      <div className="todo-row" key={todo.id}>
        <div className="todo-text">{todo.text}</div>
        <div className="icons">
          <RiCloseCircleLine className="delete-icon" onClick={() => {
              removeTodo(todo.id)
          }}/>
          <TiEdit className="edit-icon" />
        </div>
      </div>
    );
  });
};

export default Todos;
