import React, { useState } from "react";
import style from "./newTodo.module.css";
// D:\todo-with-react\src\newTodo.module.css

const NewTodo = ({ handleAddTodo }) => {
  const [todo, setTodo] = useState({ title: "", description: "" });
  const { title, description } = todo;

  //
  const handleChange = (e) => {
    const name = e.target.name;
    setTodo((oldTodo) => {
      return { ...oldTodo, [name]: e.target.value };
    });
  };
  const submitHandle = (e) => {
    e.preventDefault();
    handleAddTodo(todo);
    setTodo({ title: "", description: "" });
  };
  return (
    <form className={style.form} onSubmit={submitHandle}>
      <div className={style["form-field"]}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </div>
      <div className={style["form-field"]}>
        <label htmlFor="description">Description: </label>
        <input
          type="text"
          id="description"
          name="description"
          value={description}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add todo</button>
    </form>
  );
};

export default NewTodo;
