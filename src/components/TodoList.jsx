import TodoItem from "./TodoItem.jsx";
import styles from "./todolist.module.css";
export default function TodoList({ todos, setTodos }) {
  const sortedTodos = todos.slice().sort((a, b) => Number(a.status) - Number(b.status));
  return (
    <div className={styles.list}>
      {sortedTodos.map((item) => {
        return <TodoItem key={item.name} item={item} todos={todos} setTodos={setTodos} />;
      })}
    </div>
  );
}
