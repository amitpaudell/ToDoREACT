import TodoItem from "./TodoItem.jsx";
import styles from "./todolist.module.css";
export default function TodoList({ todos, setTodos }) {
  return (
    <div className={styles.list}>
      {todos.map((item) => {
        return <TodoItem key={item.name} item={item} todos={todos} setTodos={setTodos} />;
      })}
    </div>
  );
}