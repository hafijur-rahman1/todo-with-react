import React from "react";
import style from "./todo.module.css";
const Todo = ({ todo }) => {
  const { title, id, description } = todo;
  return (
    <article className={style.todo}>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div>
        <button className={style.btn}>
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </article>
  );
};

export default Todo;
