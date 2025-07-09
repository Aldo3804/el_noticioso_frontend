import { useState } from "react";
import { Link } from "react-router-dom";
import { useUsuario } from "../../hooks/useUsuario";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faStar, faUserShield } from "@fortawesome/free-solid-svg-icons";

export function NavBar() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const { usuario } = useUsuario();
  const estaLogueado = !!usuario;
  const esAdministrador = estaLogueado && usuario.rol?.toLowerCase() === "administrador";

  const toggleMenu = () => setMenuAbierto(!menuAbierto);

  return (
    <nav className="bg-gray-700 text-white px-6 py-4 flex items-center justify-between relative">
      <h1 className="text-xl font-bold">El Noticioso</h1>

      {/* Botón hamburguesa */}
      <button className="md:hidden text-2xl" onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuAbierto ? faTimes : faBars} />
      </button>

      {/* Menú horizontal en desktop */}
      <ul className="hidden md:flex space-x-6 items-center">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/local">Local</Link></li>
        <li><Link to="/regional">Regional</Link></li>
        <li><Link to="/nacional">Nacional</Link></li>
        <li><Link to="/internacional">Internacional</Link></li>
        {estaLogueado && (
          <li>
            <Link to="/favoritos">
              <FontAwesomeIcon icon={faStar} className="mr-1 text-yellow-400" />
              Favoritos
            </Link>
          </li>
        )}
        {esAdministrador && (
          <li>
            <Link to="/administrador">
              <FontAwesomeIcon icon={faUserShield} className="mr-1 text-blue-300" />
              Admin
            </Link>
          </li>
        )}
      </ul>

      {/* Menú colapsado en mobile */}
      {menuAbierto && (
        <ul className="absolute top-full left-0 w-full bg-gray-700 flex flex-col items-start px-6 py-4 space-y-2 md:hidden z-50">
          <li><Link to="/" onClick={toggleMenu}>Inicio</Link></li>
          <li><Link to="/local" onClick={toggleMenu}>Local</Link></li>
          <li><Link to="/regional" onClick={toggleMenu}>Regional</Link></li>
          <li><Link to="/nacional" onClick={toggleMenu}>Nacional</Link></li>
          <li><Link to="/internacional" onClick={toggleMenu}>Internacional</Link></li>
          {estaLogueado && (
            <li>
              <Link to="/favoritos" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faStar} className="mr-1 text-yellow-400" />
                Favoritos
              </Link>
            </li>
          )}
          {esAdministrador && (
            <li>
              <Link to="/administrador" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faUserShield} className="mr-1 text-blue-300" />
                Admin
              </Link>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
}
