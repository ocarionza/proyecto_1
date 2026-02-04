import { useState } from "react";
import ResultadoImc from "~/components/ResultadoImc/ResultadoImc";

function SegundoMenu() {
  const [nombre, setNombre] = useState("");
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [esNombreValido, setEsNombreValido] = useState(false);
  const [esAlturaValida, setEsAlturaValida] = useState(false);
  const [esPesoValido, setEsPesoValido] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [imc, setImc] = useState(0);

  function calcularImc() {
    const pesoLibras = parseFloat(peso);
    const alturaMetros = parseFloat(altura);
    // Convertir libras a kilogramos (1 libra = 0.453592 kg)
    const pesoKg = pesoLibras * 0.453592;
    // IMC = peso (kg) / altura² (m)
    return pesoKg / (alturaMetros * alturaMetros);
  }

  function capturarFormulario(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (esNombreValido && esAlturaValida && esPesoValido) {
      const imcCalculado = calcularImc();
      setImc(imcCalculado);
      setEnviado(true);
    } else {
      setEnviado(false);
    }
  }

  function manejadorNombre(e: React.ChangeEvent<HTMLInputElement>) {
    const valor = e.target.value;
    setNombre(valor);
    setEsNombreValido(valor.length > 3);
    setEnviado(false);
  }

  function manejadorAltura(e: React.ChangeEvent<HTMLInputElement>) {
    const valor = e.target.value;
    setAltura(valor);
    const numero = parseFloat(valor);
    setEsAlturaValida(!isNaN(numero) && numero > 0);
    setEnviado(false);
  }

  function manejadorPeso(e: React.ChangeEvent<HTMLInputElement>) {
    const valor = e.target.value;
    setPeso(valor);
    const numero = parseFloat(valor);
    setEsPesoValido(!isNaN(numero) && numero > 0);
    setEnviado(false);
  }

  const esFormularioValido = esNombreValido && esAlturaValida && esPesoValido;

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.titulo}>Calculadora de IMC</h1>
        <p style={styles.subtitulo}>Ingresa tus datos para calcular tu Indice de Masa Corporal</p>

        <form onSubmit={capturarFormulario} style={styles.formulario}>
          <div style={styles.campoGrupo}>
            <label htmlFor="nombre" style={styles.label}>Nombre:</label>
            <input
              type="text"
              placeholder="Ingresa tu nombre"
              name="nombre"
              id="nombre"
              value={nombre}
              onChange={manejadorNombre}
              style={{
                ...styles.input,
                borderColor: nombre.length === 0 ? "#dee2e6" : esNombreValido ? "#27ae60" : "#e74c3c",
              }}
            />
            {!esNombreValido && nombre.length > 0 && (
              <span style={styles.error}>El nombre debe tener al menos 4 caracteres.</span>
            )}
          </div>

          <div style={styles.campoGrupo}>
            <label htmlFor="altura" style={styles.label}>Altura (metros):</label>
            <input
              type="text"
              placeholder="Ej: 1.75"
              name="altura"
              id="altura"
              value={altura}
              onChange={manejadorAltura}
              style={{
                ...styles.input,
                borderColor: altura.length === 0 ? "#dee2e6" : esAlturaValida ? "#27ae60" : "#e74c3c",
              }}
            />
            {!esAlturaValida && altura.length > 0 && (
              <span style={styles.error}>Ingresa una altura valida (numero positivo).</span>
            )}
          </div>

          <div style={styles.campoGrupo}>
            <label htmlFor="peso" style={styles.label}>Peso (libras):</label>
            <input
              type="text"
              placeholder="Ej: 150"
              name="peso"
              id="peso"
              value={peso}
              onChange={manejadorPeso}
              style={{
                ...styles.input,
                borderColor: peso.length === 0 ? "#dee2e6" : esPesoValido ? "#27ae60" : "#e74c3c",
              }}
            />
            {!esPesoValido && peso.length > 0 && (
              <span style={styles.error}>Ingresa un peso valido (numero positivo).</span>
            )}
          </div>

          <button
            type="submit"
            style={{
              ...styles.boton,
              opacity: esFormularioValido ? 1 : 0.6,
              cursor: esFormularioValido ? "pointer" : "not-allowed",
            }}
            disabled={!esFormularioValido}
          >
            Calcular IMC
          </button>
        </form>

        {enviado && <ResultadoImc nombre={nombre} imc={imc} />}
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1.5rem",
    backgroundColor: "#f5f5f5",
  },
  card: {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "1.5rem",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "450px",
    width: "100%",
  },
  titulo: {
    fontSize: "1.5rem",
    fontWeight: 700,
    color: "#212529",
    marginBottom: "0.5rem",
    textAlign: "center",
  },
  subtitulo: {
    fontSize: "0.875rem",
    color: "#495057",
    marginBottom: "1.5rem",
    textAlign: "center",
  },
  formulario: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  campoGrupo: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  label: {
    fontSize: "0.875rem",
    fontWeight: 500,
    color: "#495057",
  },
  input: {
    padding: "0.75rem 1rem",
    fontSize: "0.875rem",
    border: "2px solid #dee2e6",
    borderRadius: "8px",
    outline: "none",
    transition: "border-color 0.3s ease",
  },
  error: {
    fontSize: "0.8rem",
    color: "#e74c3c",
  },
  boton: {
    padding: "0.75rem 1rem",
    fontSize: "0.875rem",
    fontWeight: 500,
    color: "white",
    backgroundColor: "#007bff",
    border: "2px solid #007bff",
    borderRadius: "8px",
    marginTop: "0.5rem",
    transition: "all 0.3s ease",
  },
};

export default SegundoMenu;
