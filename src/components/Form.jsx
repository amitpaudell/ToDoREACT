import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", status: false });
  function handleEvent(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", status: false });
  }

  return (
    <>
      <form className={styles.todoform} onSubmit={handleEvent}>
        <div className={styles.inputContainer}>
          <input className={styles.modernInput} type="text" value={todo.name} onChange={(e) => setTodo({ name: e.target.value, status: false })} placeholder="Enter todo Item..." />
          <button className={styles.modernButton} type="submit">
            Add
          </button>
        </div>
      </form>
    </>
  );
}
