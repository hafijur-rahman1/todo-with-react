import React from "react";
import Todo from "./Todo";
import style from "./todos.module.css";

const Todos = ({ todos }) => {
  console.log(todos);
  return (
    <section className={style.todos}>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </section>
  );
};

export default Todos;
