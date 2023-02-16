import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

interface TaskProps {
  content: string;
}

export function Task({ content }: TaskProps) {
  return (
    <div className={styles.taskBox}>
      <form className={styles.newTask}>
        <footer>
          <input type="checkbox" />
          <span>{content}</span>
        </footer>

        <button title="delete task">
          <Trash size={18} />
        </button>
      </form>
    </div>
  );
}
