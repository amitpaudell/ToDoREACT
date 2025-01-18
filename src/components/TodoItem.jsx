import styles from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleClick(name) {
    const newArray = todos.map((todo) => (todo.name === name ? { ...todo, status: !todo.status } : todo));
    setTodos(newArray);
  }

  const classNamed = item.status ? styles.completed : "";

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={classNamed} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button className={styles.deleteButton} onClick={() => handleDelete(item)}>
            X
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
