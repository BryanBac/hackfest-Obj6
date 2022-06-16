import { InfoGrid } from "./InfoGrid";

export function MainApp() {
  return (
    <div className="Titulo">
      <header>
        <h1> Objetivos del desarrollo sostenible Agenda 2023 </h1>
        <h2>
          Objetivo 6 - Garantizar la disponibilidad de agua y su gestión
          sostenible y el saneamiento para todos
        </h2>
      </header>
      <main>
        <InfoGrid />
      </main>
    </div>
  );
}
