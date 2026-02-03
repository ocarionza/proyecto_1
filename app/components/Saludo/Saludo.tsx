export default function Saludo({mensaje}: {mensaje: string}) {
    return (
        <div>
            <h1>Bienvenido</h1>
            <p>Gracias por vistarnos {mensaje}</p>
        </div>
    );
}