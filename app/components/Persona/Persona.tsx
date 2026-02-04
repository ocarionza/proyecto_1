import { useState } from "react";

interface PersonaProps {
  name: string;
  git: string;
  telefono: string;
  correo: string;
  descripcion: string;
  imageUrl: string;
}

export default function Persona({ personas }: { personas: PersonaProps[] }) {
  const [activePersona, setActivePersona] = useState(0);

  return (
    <div>
      <aside>
        <nav>
          <ul>
            {personas.map((persona, index) => (
              <li key={index}>
                <button
                  onClick={() => setActivePersona(index)}
                  className={activePersona === index ? "active" : ""}
                >
                  {persona.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="person-card">
          <div className="person-image">
            <img
              src={personas[activePersona].imageUrl}
              alt={personas[activePersona].name}
            />
          </div>

          <div className="person-description">
            <h2>{personas[activePersona].name}</h2>
            <p>
              Git: {personas[activePersona].git}
              <br />
              Telefono: {personas[activePersona].telefono}
              <br />
              Correo: {personas[activePersona].correo}
              <br />
              Descripcion: {personas[activePersona].descripcion}
              <br />
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}
