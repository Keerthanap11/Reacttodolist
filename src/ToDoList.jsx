import { useEffect, useState } from "react";
import style from "styled-components";

const fetchTodos = async (setState) => {
  const dos = await fetch(
    "https://jsonplaceholder.typicode.com/todos/"
  ).then((res) => res.json());
  setState(dos);
};

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetchTodos(setTodos);
  }, []);
  return (
    <ul>
      {todos.map((t) => (
        <li key={t.id}>
          {t.title} <input type="checkbox" readOnly checked={t.completed} />
        </li>
      ))}
    </ul>
  );
};
export default ToDoList;
