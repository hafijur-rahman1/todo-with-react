// import React, { useState } from "react";

// import style from "./newTodo.module.css";
// const NewTodo = (props) => {
//   const [todo, setTodo] = useState({ title: "", desc: "" });
//   const { title, desc } = todo;

//   const handleChange = (event) => {
//     const name = event.target.name;
//     setTodo((oldTodo) => {
//       return { ...oldTodo, [name]: event.target.value };
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     //do(todo);

//     setTodo({ title: "", desc: "" });
//   };

//   return (
//     <form className={style.form} onSubmit={handleSubmit}>
//       <div className={style["form-field"]}>
//         <label htmlFor="title">Title: </label>
//         <input
//           type="text"
//           id="title"
//           name="title"
//           value={title}
//           onChange={handleChange}
//         />
//       </div>
//       <div className={style["form-field"]}>
//         <label htmlFor="desc">Description: </label>
//         <textarea
//           type="text"
//           id="desc"
//           name="desc"
//           value={desc}
//           onChange={handleChange}
//         />
//       </div>
//       <button type="submit">Add todo</button>
//     </form>
//   );
// };

// export default NewTodo;

import React, { useState } from "react";
import style from "./newTodo.module.css";
// D:\todo-with-react\src\newTodo.module.css

const NewTodo = () => {
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
    console.log(todo);
    setTodo({ title: "", desc: "" });
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
        <label htmlFor="desc">Description: </label>
        <textarea
          type="text"
          id="desc"
          name="desc"
          value={description}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add todo</button>
    </form>
  );
};

export default NewTodo;
