import { Info } from "./Info";
import styles from "./InfoGrid.module.css";

export function InfoGrid() {
  return (
    <ul className={styles.Grid}>
      <Info key="1" />
    </ul>
  );
}
