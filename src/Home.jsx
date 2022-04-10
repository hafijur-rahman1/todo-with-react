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

  return (
    <div className={style.container}>
      <p>this is the Home page</p>
      <NewTodo handleAddTodo={handleAddTodo} />

      <Todos todos={todos} />
    </div>
  );
};

export default Home;
