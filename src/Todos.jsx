import React from "react";
import Todo from "./Todo";
import style from "./todos.module.css";

const Todos = ({ todos, handleRemoveTodos }) => {
  return (
    <section className={style.todos}>
      {todos.map((todo) => (
        <Todo
          todo={todo.todo}
          key={todo.id}
          id={todo.id}
          handleRemoveTodos={handleRemoveTodos}
        />
      ))}
    </section>
  );
};

export default Todos;
