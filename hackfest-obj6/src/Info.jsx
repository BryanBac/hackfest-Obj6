import styles from "./Info.module.css";
export function Info({ texto }) {
  console.log(styles);
  return <li className={styles.text}>Contenido</li>;
}
