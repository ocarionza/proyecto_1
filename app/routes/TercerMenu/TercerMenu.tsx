import { Link, Outlet } from "react-router";

export default function TercerMenu() {
  return (
    <div>
      <h1>Tercer Menú</h1>
      <nav>
        <ul>
          <li>
            <Link to=".">Enlace 1</Link>
          </li>
          <li>
            <Link to="item-interno">Enlace 2</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
