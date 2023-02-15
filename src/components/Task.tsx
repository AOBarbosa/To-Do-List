import { Trash } from "phosphor-react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import styles from "./Task.module.css";

export function Task() {
  return (
    <div className={styles.taskBox}>
      <div className={styles.newTask}>
        <footer>
          <input type="checkbox" id="c1" />
          <span>
            Integer urna interdum massa libero auctor neque turpis turpis
            semper. Duis vel sed fames integer.
          </span>
        </footer>

        <button>
          <Trash size={18} />
        </button>
      </div>
    </div>
  );
}
