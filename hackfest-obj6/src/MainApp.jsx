import { InfoGrid } from "./InfoGrid";
import logo from "./imagenes/logo.jpg";
import styles from "./GridDoble.module.css";
import { NavBar } from "./NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export function MainApp() {
  return (
    <div className="Titulo">
      <header className={styles.cabecera}>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" />
          </Routes>
        </Router>
        <div>
          <img src={logo} height="75px" alt="" className={styles.elementos} />
          <h1 className={styles.elementos}>
            {" "}
            Objetivos del desarrollo sostenible Agenda 2023{" "}
          </h1>
          <h2>
            Objetivo 6 - Garantizar la disponibilidad de agua y su gestión
            sostenible y el saneamiento para todos
          </h2>
        </div>
      </header>
      <main>
        <InfoGrid />
        <h2>Hola</h2>
      </main>
    </div>
  );
}
