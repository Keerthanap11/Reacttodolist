//

import { useEffect, useState } from "react";
const url = "https://jsonplaceholder.typicode.com/todos/";
const ToDo = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(setTodos);
  }, []);
  return (
    <ul>
      {" "}
      {todos.map((t) => (
        <li key={t.id}>
          {t.id} - {t.title}{" "}
          <input type="checkbox" readOnly checked={t.completed} />
        </li>
      ))}
    </ul>
  );
};
export default ToDo;
