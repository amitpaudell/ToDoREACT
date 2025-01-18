import Form from "./Form.jsx";
import TodoList from "./TodoList.jsx";
import { useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <Form todos={todos} setTodos={setTodos}></Form>
      <TodoList todos={todos} setTodos={setTodos}></TodoList>
    </>
  );
}
