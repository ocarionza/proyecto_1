export default function Pregunta({pregunta,respuesta}: {pregunta: string, respuesta: string}) {
    return (
        <div>
            <h1>{pregunta}</h1>
            <p>{respuesta}</p>
        </div>
    );
}