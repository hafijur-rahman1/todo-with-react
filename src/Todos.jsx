import React from "react";
import Todo from "./Todo";
import style from "./todos.module.css";

const Todos = ({ todos }) => {
  console.log(todos);
  return (
    <section className={style.todos}>
      {todos.map((todo) => (
        <Todo todo={todo.todo} key={todo.id} id={todo.id} />
      ))}
    </section>
  );
};

export default Todos;
