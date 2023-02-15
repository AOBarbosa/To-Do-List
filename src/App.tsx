import "./global.css";

import styles from "./App.module.css";
import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { TaskArea } from "./components/TaskArea";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <AddTask />

        <TaskArea />
      </div>
    </div>
  );
}
