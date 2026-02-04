import { useState } from "react";

export default function Pregunta({
  pregunta,
  respuesta,
}: {
  pregunta: string;
  respuesta: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pregunta-container">
      <button
        className={`pregunta-header ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="pregunta-texto">{pregunta}</span>
        <span className="pregunta-icono">{isOpen ? "−" : "+"}</span>
      </button>
      <div className={`pregunta-respuesta ${isOpen ? "open" : ""}`}>
        <p>{respuesta}</p>
      </div>
    </div>
  );
}
