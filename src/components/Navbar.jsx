import { NavLink } from "react-router-dom";
import "./Button.css"

export const Navbar = () => {
  // Clase base y clase cuando está activo
  const activeStyle = "btn btn-warning fw-bold"; // Fondo amarillo, letras negras
  const inactiveStyle = "btn btn-outline-warning fw-bold"; // Solo borde amarillo

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <NavLink 
        to="/" 
  className={({ isActive }) => 
    isActive ? "btn nav-btn-custom nav-btn-active" : "btn nav-btn-custom"
  }
>
  HOME
      </NavLink>

 <div className="d-flex gap-2">
        <NavLink 
          to="/Personajes" 
          className={({ isActive }) => 
    isActive ? "btn nav-btn-custom nav-btn-active" : "btn nav-btn-custom"
  }
        >
          Personajes
        </NavLink>

		<NavLink 
          to="/Planetas" 
          className={({ isActive }) => 
    isActive ? "btn nav-btn-custom nav-btn-active" : "btn nav-btn-custom"
  }
        >
          Planetas
        </NavLink>

		<NavLink 
          to="/Naves" 
          className={({ isActive }) => 
    isActive ? "btn nav-btn-custom nav-btn-active" : "btn nav-btn-custom"
  }
        >
          Naves
        </NavLink>

		<NavLink 
          to="/Favoritos" 
          className={({ isActive }) => isActive ? activeStyle : inactiveStyle}
        >
          Favoritos
        </NavLink>
        {/* Repite lo mismo para Naves, Planetas, etc. */}
      </div>
    </nav>
  );
};