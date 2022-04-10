import React, { useState } from "react";
import NewTodo from "./newTodo";
import Todos from "./Todos";
import style from "./home.module.css";
import { v4 as uuidv4 } from "uuid";

// const dummyTodos = [
//   { id: 1, title: "title no 1", description: "description is comming" },
//   { id: 2, title: "title no 2", description: "description is comming******" },
//   { id: 3, title: "title no 3", description: "description is comming...." },
// ];

const Home = () => {
  const [todos, setTodos] = useState([]);
  //

  const handleAddTodo = (todo) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), todo }];
    });
    // console.log(todos);
  };
  //
  const handleRemoveTodos = (id) => {
    setTodos((prevTodos) => {
      const filteredTodos = prevTodos.filter((todo) => todo.id !== id);
      return filteredTodos;
    });
    // alert(id);
  };
  return (
    <div className={style.container}>
      <h4 style={{ color: "red" }}>Todo App</h4>
      <NewTodo handleAddTodo={handleAddTodo} />
      {todos && <Todos todos={todos} handleRemoveTodos={handleRemoveTodos} />}
    </div>
  );
};

export default Home;
