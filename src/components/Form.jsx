import { useState } from "react";
import TodoItem from "./TodoItem";
export default function Form() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  function handleEvent(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <>
      <form onSubmit={handleEvent}>
        <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button>Add</button>
      </form>
      {todos.map((item) => {
        return <TodoItem key={item} item={item} />;
      })}
    </>
  );
}
