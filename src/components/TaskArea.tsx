import { Task } from "./Task";
import styles from "./TaskArea.module.css";

export function TaskArea() {
  const newTasks = 3;
  const doneTasks = 2;
  return (
    <div className={styles.taskArea}>
      <div className={styles.taskInfo}>
        <div className={styles.createdTasks}>
          <strong>
            Tarefas criadas <span>{newTasks}</span>
          </strong>
        </div>

        <div className={styles.doneTasks}>
          <strong>
            Concluidas{" "}
            <span>
              {doneTasks} de {newTasks}
            </span>
          </strong>
        </div>
      </div>

      <div className={styles.newTaskArea}>
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  );
}
