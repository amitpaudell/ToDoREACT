import Form from "./Form.jsx";
import TodoList from "./TodoList.jsx";
import { useState } from "react";
import Footer from "./Footer.jsx";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.status).length;
  const totalTodos = todos.length;

  return (
    <>
      <Form todos={todos} setTodos={setTodos}></Form>
      <TodoList todos={todos} setTodos={setTodos}></TodoList>
      <Footer completedTodos={completedTodos} totalTodos={totalTodos}></Footer>
    </>
  );
}
