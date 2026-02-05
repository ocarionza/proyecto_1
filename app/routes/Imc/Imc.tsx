import { useState } from "react";
import ResultadoImc from "~/components/ResultadoImc/ResultadoImc";

function Imc() {
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
    <div className="imc-container">
      <div className="imc-card">
        <h1 className="imc-titulo">Calculadora de IMC</h1>
        <p className="imc-subtitulo">
          Ingresa tus datos para calcular tu Indice de Masa Corporal
        </p>

        <form onSubmit={capturarFormulario} className="imc-formulario">
          <div className="imc-campo-grupo">
            <label htmlFor="nombre" className="imc-label">
              Nombre:
            </label>
            <input
              type="text"
              placeholder="Ingresa tu nombre"
              name="nombre"
              id="nombre"
              value={nombre}
              onChange={manejadorNombre}
              className={`imc-input ${nombre.length === 0 ? "" : esNombreValido ? "valido" : "invalido"}`}
            />
            {!esNombreValido && nombre.length > 0 && (
              <span className="imc-error">
                El nombre debe tener al menos 4 caracteres.
              </span>
            )}
          </div>

          <div className="imc-campo-grupo">
            <label htmlFor="altura" className="imc-label">
              Altura (metros):
            </label>
            <input
              type="text"
              placeholder="Ej: 1.75"
              name="altura"
              id="altura"
              value={altura}
              onChange={manejadorAltura}
              className={`imc-input ${altura.length === 0 ? "" : esAlturaValida ? "valido" : "invalido"}`}
            />
            {!esAlturaValida && altura.length > 0 && (
              <span className="imc-error">
                Ingresa una altura valida (numero positivo).
              </span>
            )}
          </div>

          <div className="imc-campo-grupo">
            <label htmlFor="peso" className="imc-label">
              Peso (libras):
            </label>
            <input
              type="text"
              placeholder="Ej: 150"
              name="peso"
              id="peso"
              value={peso}
              onChange={manejadorPeso}
              className={`imc-input ${peso.length === 0 ? "" : esPesoValido ? "valido" : "invalido"}`}
            />
            {!esPesoValido && peso.length > 0 && (
              <span className="imc-error">
                Ingresa un peso valido (numero positivo).
              </span>
            )}
          </div>

          <button
            type="submit"
            className="imc-boton"
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

export default Imc;
