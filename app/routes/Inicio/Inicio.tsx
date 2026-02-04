import Pregunta from "~/components/Pregunta/Pregunta";
function Inicio() {

  let preguntas = [
    {pregunta:"¿Que es react?",respuesta:"React es una biblioteca de JavaScript que sirve para construir interfaces de usuario."},
    {pregunta:"Que es la arquitectura de componentes?",respuesta:""},
    {pregunta:"¿Que es el proceso de transpilación?",respuesta:""},
    {pregunta:"¿Que es JSX?",respuesta:""},
    {pregunta:"¿Que son los hooks?",respuesta:""},
    {pregunta:"¿Que es VITE?",respuesta:""},
    {pregunta:"¿Que es el state?",respuesta:""},
    {pregunta:"¿Que son los props?",respuesta:""}
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
