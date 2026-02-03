import { useState } from "react";
import Saludo from "~/components/Saludo/Saludo";

function SegundoMenu() {
  const [nombre, setNombre] = useState("");
  const [saludo, setSaludo] = useState("");
  const [esNombreValido, setEsNombreValido] = useState(false);
  const [enviado, setEnviado] = useState(false);

  function capturarNombre(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (esNombreValido) {
      setSaludo(nombre);
      setEnviado(true);
    } else {
      setSaludo("");
      setEnviado(false);
    }
  }

  function manejardorNombre(e: React.ChangeEvent<HTMLInputElement>) {
    setNombre(e.target.value);
    if (e.target.value.length > 3) {
      setEsNombreValido(true);
      setEnviado(false);
    } else {
      setEsNombreValido(false);
      setEnviado(false);
    }
  }

  return (
    <div>
      <h1>Segundo menu</h1>
      <form onSubmit={capturarNombre}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          placeholder="Nombre"
          name="nombre"
          id="nombre"
          value={nombre}
          onChange={manejardorNombre}
          style={{
            border: !esNombreValido ? "2px solid red" : "2px solid green",
          }}
        />
        {!esNombreValido && nombre.length > 0 && (
          <span style={{ color: "red" }}>
            El nombre debe tener al menos 4 caracteres.
          </span>
        )}
        <button type="submit">Enviar</button>
      </form>
      {enviado && <Saludo mensaje={saludo} />}
    </div>
  );
}

export default SegundoMenu;
