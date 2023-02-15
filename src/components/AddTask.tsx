import { PlusCircle } from "phosphor-react";
import styles from "./AddTask.module.css";

export function AddTask() {
  return (
    <div className={styles.addTask}>
      <form className={styles.taskForm}>
        <textarea name="task" placeholder="Add a new task" />

        <footer>
          <button>
            Add
            <PlusCircle size={22} />
          </button>
        </footer>
      </form>
    </div>
  );
}
