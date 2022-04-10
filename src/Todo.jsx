import React from "react";
import style from "./todo.module.css";
const Todo = ({ todo, id, handleRemoveTodos }) => {
  const { title, description } = todo;

  // const
  const handleClick = (id) => {
    handleRemoveTodos(id);
  };
  return (
    <article className={style.todo}>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div>
        <button
          className={style.btn}
          onClick={() => {
            handleClick(id);
          }}
        >
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </article>
  );
};

export default Todo;
