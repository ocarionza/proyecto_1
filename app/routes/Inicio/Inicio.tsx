import Pregunta from "~/components/Pregunta/Pregunta";
function Inicio() {
  let preguntas = [
    {
      pregunta: "¿Que es react?",
      respuesta:
        "React es una biblioteca de JavaScript que sirve para construir interfaces de usuario de forma declarativa mediante componentes reutilizables.",
    },
    {
      pregunta: "Que es la arquitectura de componentes?",
      respuesta:
        "Es un patrón de diseño donde la interfaz de usuario se divide en piezas pequeñas, independientes y reutilizables llamadas componentes, cada uno con su propia lógica y presentación.",
    },
    {
      pregunta: "¿Que es el proceso de transpilación?",
      respuesta:
        "Es la conversión de código moderno (como JSX, TypeScript o ES6+) a código JavaScript compatible con navegadores antiguos mediante herramientas como Babel.",
    },
    {
      pregunta: "¿Que es JSX?",
      respuesta:
        "JSX (JavaScript XML) es una extensión de sintaxis para JavaScript que permite escribir estructuras similares a HTML dentro del código JavaScript, facilitando la creación de componentes React.",
    },
    {
      pregunta: "¿Que son los hooks?",
      respuesta:
        "Los hooks son funciones especiales de React que permiten usar estado y otras características de React en componentes funcionales. Los más comunes son useState, useEffect y useContext.",
    },
    {
      pregunta: "¿Que es VITE?",
      respuesta:
        "Vite es una herramienta de construcción moderna para aplicaciones web que ofrece un servidor de desarrollo extremadamente rápido gracias a ESM nativo y hot module replacement (HMR) instantáneo.",
    },
    {
      pregunta: "¿Que es el state?",
      respuesta:
        "El state (estado) es un objeto que contiene datos que pueden cambiar durante el ciclo de vida del componente. Cuando el estado cambia, React re-renderiza el componente automáticamente.",
    },
    {
      pregunta: "¿Que son los props?",
      respuesta:
        "Los props (propiedades) son argumentos que se pasan de un componente padre a un componente hijo, permitiendo la comunicación y el flujo de datos unidireccional en React.",
    },
  ];

  return (
    <div className="preguntas-container">
      {preguntas.map((item, index) => (
        <Pregunta
          key={index}
          pregunta={item.pregunta}
          respuesta={item.respuesta}
        />
      ))}
    </div>
  );
}

export default Inicio;
