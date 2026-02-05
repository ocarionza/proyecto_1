interface ResultadoImcProps {
  nombre: string;
  imc: number;
}

function obtenerCategoria(imc: number): { texto: string; color: string } {
  if (imc < 18.5) {
    return { texto: "Bajo peso", color: "#3498db" };
  } else if (imc < 25) {
    return { texto: "Peso normal", color: "#27ae60" };
  } else if (imc < 30) {
    return { texto: "Sobrepeso", color: "#f39c12" };
  } else {
    return { texto: "Obesidad", color: "#e74c3c" };
  }
}

export default function ResultadoImc({ nombre, imc }: ResultadoImcProps) {
  const categoria = obtenerCategoria(imc);

  return (
    <div className="resultado-imc">
      <h2>Resultado</h2>
      <p className="saludo-imc">
        Hola <strong>{nombre}</strong>, tu IMC es:{" "}
        <span style={{ color: categoria.color, fontWeight: "bold" }}>
          {imc.toFixed(2)}
        </span>
      </p>
      <p className="categoria-imc">
        Categoria:{" "}
        <span style={{ color: categoria.color }}>{categoria.texto}</span>
      </p>
    </div>
  );
}
