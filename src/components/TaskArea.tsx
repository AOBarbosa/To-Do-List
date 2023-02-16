import { Task } from "./Task";
import styles from "./TaskArea.module.css";
import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const taskList = [
  {
    id: uuidv4(),
    content: "Terminar o projeto 01!",
    isCompleted: true,
  },
  {
    id: uuidv4(),
    content: "Tudo pefeito",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    content: "Tudo tipado",
    isCompleted: false,
  },
];

export function TaskArea() {
  const [task, setTask] = useState(["Essa é sua primeira tarefa!"]);
  const [newTask, setNewTask] = useState("");

  const [countTasks, setCountTasks] = useState(1);
  const [countDoneTasks, setCountDoneTasks] = useState(0);

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setTask([...task, newTask]);
    setNewTask("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewTask(event.target.value);
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = task.filter((task) => {
      return task !== taskToDelete;
    });

    setTask(tasksWithoutDeletedOne);
    setCountTasks((state) => {
      return state - 1;
    });
  }

  function handleCountTasks() {
    setCountTasks((state) => {
      return state + 1;
    });
  }

  return (
    <div className={styles.taskArea}>
      <div className={styles.addTask}>
        <form onSubmit={handleCreateNewTask} className={styles.taskForm}>
          <textarea
            name="task"
            placeholder="Add a new task"
            value={newTask}
            onChange={handleNewTaskChange}
          />

          <footer>
            <button title="add a task" onClick={handleCountTasks}>
              Add
              <PlusCircle size={22} />
            </button>
          </footer>
        </form>
      </div>

      <div className={styles.taskInfo}>
        <div className={styles.createdTasks}>
          <strong>
            Tarefas criadas <span>{countTasks}</span>
          </strong>
        </div>

        <div className={styles.doneTasks}>
          <strong>
            Concluidas{" "}
            <span>
              {countDoneTasks} de {countTasks}
            </span>
          </strong>
        </div>
      </div>

      <div className={styles.newTaskArea}>
        {task.map((task) => {
          return <Task key={task} content={task} onDeleteTask={deleteTask} />;
        })}
      </div>
    </div>
  );
}
