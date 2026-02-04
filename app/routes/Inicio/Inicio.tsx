import Pregunta from "~/components/Pregunta/Pregunta";
function Inicio() {

  let preguntas = [
    {pregunta:"¿Que es React?",respuesta:"React es una biblioteca de JavaScript que sirve para construir interfaces de usuario de forma declarativa y eficiente mediante componentes reutilizables."},
    {pregunta:"¿Que es la arquitectura de componentes?",respuesta:"Es un patron de diseno donde la interfaz se divide en piezas independientes y reutilizables llamadas componentes. Cada componente encapsula su propia logica, estructura y estilos, facilitando el mantenimiento y la escalabilidad."},
    {pregunta:"¿Que es el proceso de transpilacion?",respuesta:"Es el proceso de convertir codigo escrito en una version moderna de JavaScript (o JSX) a una version compatible con todos los navegadores. Herramientas como Babel realizan esta conversion."},
    {pregunta:"¿Que es JSX?",respuesta:"JSX (JavaScript XML) es una extension de sintaxis que permite escribir codigo similar a HTML dentro de JavaScript. React lo usa para describir la estructura de la interfaz de usuario de forma mas legible."},
    {pregunta:"¿Que son los hooks?",respuesta:"Los hooks son funciones especiales de React que permiten usar estado y otras caracteristicas de React en componentes funcionales. Los mas comunes son useState, useEffect y useContext."},
    {pregunta:"¿Que es VITE?",respuesta:"Vite es una herramienta de desarrollo frontend que ofrece un servidor de desarrollo ultrarapido y un sistema de compilacion optimizado. Usa ES modules nativos para una recarga instantanea durante el desarrollo."},
    {pregunta:"¿Que es el state?",respuesta:"El state (estado) es un objeto que almacena datos que pueden cambiar a lo largo del tiempo en un componente. Cuando el estado cambia, React vuelve a renderizar el componente para reflejar los nuevos datos."},
    {pregunta:"¿Que son los props?",respuesta:"Los props (propiedades) son argumentos que se pasan de un componente padre a un componente hijo. Son de solo lectura y permiten que los componentes sean dinamicos y reutilizables."}
  ];

  return (
    <div>
      {preguntas.map((item, index) => (
            <Pregunta key={index} pregunta={item.pregunta} respuesta={item.respuesta}/>
          )
        )
      }
    </div>
  );
}

export default Inicio;
