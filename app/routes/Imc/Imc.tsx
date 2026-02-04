import { useState } from "react";
import Saludo from "~/components/Saludo/Saludo";

function SegundoMenu() {
  const [nombre, setNombre] = useState("");
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [esNombreValido, setEsNombreValido] = useState(false);
  const [enviado, setEnviado] = useState(false);

  function capturarFormulario(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (esNombreValido) {
      setResultado(nombre);
      setEnviado(true);
    } else {
      setResultado("");
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
      <form onSubmit={capturarFormulario}>
        <label htmlFor="nombre">Nombre:</label>
        <br />
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
        <br />
        <label htmlFor="altura">Altura:</label>
        <br />
        <input
          type="text"
          placeholder="Altura"
          name="altura"
          id="altura"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
        <br />
        <label htmlFor="peso">Peso:</label>
        <br />
        <input
          type="text"
          placeholder="Peso"
          name="peso"
          id="peso"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          style={{
            border: !esNombreValido ? "2px solid red" : "2px solid green",
          }}
        />
        <br />
        
        <button type="submit">Enviar</button>
      </form>
      {enviado && <Saludo mensaje={saludo} />}
    </div>
  );
}

export default SegundoMenu;
