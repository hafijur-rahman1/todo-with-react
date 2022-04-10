import { useState } from "react";
import "../node_modules/font-awesome/css/font-awesome.min.css";

import "./App.css";
import Home from "./Home";
// import NewTodo from "./newTodo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <Home />
    </div>
  );
}

export default App;
