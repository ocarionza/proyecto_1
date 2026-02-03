function Inicio() {
  let nombre = "Brayan";
  return (
    <div>
      {nombre ? <h1>Hola {nombre}</h1> : <h1>Hola invitado</h1>}
      <p>Bienvenido al incio</p>
    </div>
  );
}

export default Inicio;
