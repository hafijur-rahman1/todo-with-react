import React from "react";
import NewTodo from "./newTodo";
import Todos from "./Todos";
import style from "./home.module.css";
const dummyTodos = [
  { id: 1, title: "title no 1", description: "description is comming" },
  { id: 2, title: "title no 2", description: "description is comming******" },
  { id: 3, title: "title no 3", description: "description is comming...." },
];

const Home = () => {
  return (
    <div className={style.container}>
      <NewTodo />

      <p>this is the Home page</p>

      <Todos todos={dummyTodos} />
    </div>
  );
};

export default Home;
