import { Trash } from "phosphor-react";
import styles from "./Task.module.css";
import { TaskProps } from "./TaskArea";

interface TaskComponentProps extends TaskProps {
  onDeleteTask: (task: string) => void;
  onCheck: (taskId: string) => void;
}

export function Task({
  id,
  content,
  isCompleted,
  onDeleteTask,
  onCheck,
}: TaskComponentProps) {
  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function handleCheck() {
    onCheck(id);
  }

  return (
    <div className={styles.taskBox}>
      <form className={styles.newTask}>
        <footer>
          <input type="checkbox" onChange={handleCheck} />
          <label
            style={
              isCompleted
                ? {
                    textDecoration: "line-through",
                    color: "#808080",
                  }
                : {}
            }
          >
            {content}
          </label>
        </footer>

        <button title="delete task" onClick={handleDeleteTask}>
          <Trash size={18} />
        </button>
      </form>
    </div>
  );
}
