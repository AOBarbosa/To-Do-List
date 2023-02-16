import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

interface TaskProps {
  content: string;
  onDeleteTask: (task: string) => void;
}

export function Task({ content, onDeleteTask }: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(content);
  }

  return (
    <div className={styles.taskBox}>
      <form className={styles.newTask}>
        <footer>
          <input type="checkbox" />
          <span>{content}</span>
        </footer>

        <button title="delete task" onClick={handleDeleteTask}>
          <Trash size={18} />
        </button>
      </form>
    </div>
  );
}
