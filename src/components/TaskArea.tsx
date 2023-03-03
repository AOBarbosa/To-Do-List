import { Task } from "./Task";
import styles from "./TaskArea.module.css";
import { ListChecks, PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, KeyboardEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export interface TaskProps {
  id: string;
  content: string;
  isCompleted: boolean;
}

export function TaskArea() {
  const [task, setTask] = useState<TaskProps[]>([]);
  const [newTaskContent, setNewTaskContent] = useState("");

  const [countTasks, setCountTasks] = useState(0);
  const [countDoneTasks, setCountDoneTasks] = useState(0);

  const isNewTaskEmpty = newTaskContent.length === 0;

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    setTask([
      ...task,
      {
        id: uuidv4(),
        content: newTaskContent,
        isCompleted: false,
      },
    ]);
    setNewTaskContent("");
  }

  function handleNewTaskContent(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewTaskContent(event.target.value);
  }

  function handleCountTasks() {
    setCountTasks((state) => {
      return state + 1;
    });
  }

  function handleToggleTaskCompletion(id: string) {
    setTask((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isCompleted: true,
          };
        }

        return task;
      })
    );

    setCountDoneTasks((state) => {
      return state + 1;
    });
  }

  function deleteTask(taskToDeleteId: string) {
    const tasksWithoutDeletedOne = task.filter((task) => {
      return task.id !== taskToDeleteId;
    });

    setTask(tasksWithoutDeletedOne);

    setCountTasks((state) => {
      return state - 1;
    });

    if (countDoneTasks > 0) {
      setCountDoneTasks((state) => {
        return state - 1;
      });
    }
  }

  return (
    <div className={styles.taskArea}>
      <div className={styles.addTask}>
        <form onSubmit={handleCreateNewTask} className={styles.taskForm}>
          <textarea
            name="task"
            placeholder="Add a new task"
            value={newTaskContent}
            onChange={handleNewTaskContent}
          />

          <footer>
            <button
              type="submit"
              title="add a task"
              onClick={handleCountTasks}
              disabled={isNewTaskEmpty}
            >
              Add
              <PlusCircle size={22} />
            </button>
          </footer>
        </form>
      </div>

      <div className={styles.taskInfo}>
        <div className={styles.createdTasks}>
          <strong>
            Created tasks <span>{countTasks}</span>
          </strong>
        </div>

        <div className={styles.doneTasks}>
          <strong>
            Completed{" "}
            <span>
              {countDoneTasks} de {countTasks}
            </span>
          </strong>
        </div>
      </div>

      <div className={styles.newTaskArea}>
        {countTasks !== 0 ? (
          task.map((task) => {
            return (
              <Task
                key={task.id}
                id={task.id}
                content={task.content}
                isCompleted={task.isCompleted}
                onDeleteTask={deleteTask}
                onCheck={handleToggleTaskCompletion}
              />
            );
          })
        ) : (
          <div className={styles.emptyTasks}>
            <ListChecks size={64} />
            <strong>You have no tasks registered</strong>
            <p>Create tasks and organize your to-do list</p>
          </div>
        )}
      </div>
    </div>
  );
}
