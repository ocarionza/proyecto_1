import { NavLink } from "react-router";

function Header() {
  let menu = [
    { nombre: "Inicio", ruta: "/inicio" },
    { nombre: "Segundo Menu", ruta: "/segundo-menu" },
    { nombre: "Tercer Menu", ruta: "/tercer-menu" },
  ];
  return (
    <header>
      <nav>
        <ul>
          {menu.map((item, index) => (
            <li key={index}>
              <NavLink to={item.ruta}>{item.nombre}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
