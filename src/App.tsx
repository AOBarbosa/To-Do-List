import "./global.css";

import styles from "./App.module.css";
import { Header } from "./components/Header";
import { TaskArea } from "./components/TaskArea";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <TaskArea />
      </div>
    </div>
  );
}
