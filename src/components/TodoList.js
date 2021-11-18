import React, { useRef, useState } from "react";
import TodoForm from "./TodoForm";
import Todos from "./Todos";

const TodoList = () => {
  const [todos, setTodos] = useState([]);


  const addTodo = (todo) => {
    if (!todo.text || /^s*$/.test(todo.text)) return;
    setTodos([todo, ...todos]);
  };

  // УДАЛЕНИЕ ЗАМЕТКИ
  const removeTodo = id => {
     const newTodos= todos.filter(c => c.id !== id)
     setTodos(newTodos)
  }
  // Редактирование текста
  // const editTodo = () => {

  //   //  input.current.value = "";
  //   console.log('edit');
    

     
  // }

  return (
    <>
      <h1>Что вы планируете сегодня?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todos todos={todos} removeTodo={removeTodo} />
    </>
  );
};

export default TodoList;
