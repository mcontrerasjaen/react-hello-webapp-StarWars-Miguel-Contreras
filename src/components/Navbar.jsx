import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Button.css"
import useGlobalReducer from "../hooks/useGlobalReducer"; 

export const Navbar = () => {
  const { store } = useGlobalReducer(); 
  const [busqueda, setBusqueda] = useState("");
  const navigate = useNavigate();

  // --- LÓGICA DE BÚSQUEDA (+3) ---
  const todoLoQueTenemos = [
    ...(store.personajes || []),
    ...(store.planetas || []),
    ...(store.naves || [])
  ];

  const sugerencias = busqueda.length > 1
    ? todoLoQueTenemos.filter(item => 
        item.name.toLowerCase().includes(busqueda.toLowerCase())
      ).slice(0, 5) 
    : [];

  return (
    <nav className="navbar navbar-dark bg-dark px-3 d-flex justify-content-between align-items-center">
      
      <NavLink 
        to="/" 
        className={({ isActive }) => 
          isActive ? "btn nav-btn-custom nav-btn-active" : "btn nav-btn-custom"
        }
      >
        HOME
      </NavLink>

      {/* --- BARRA DE BÚSQUEDA --- */}
      <div className="d-flex align-items-center gap-2" style={{ position: "relative" }}>
    
    {/* Label con estilo Star Wars */}
    <label 
        htmlFor="buscador-galactico" 
        className="text-warning fw-bold mb-0 text-nowrap" 
        style={{ fontSize: "0.75rem", letterSpacing: "1px" }}
    >
        ¿QUÉ BUSCAMOS?
    </label>

    <div style={{ position: "relative", width: "220px" }}>
        <input
            id="buscador-galactico"
            type="text"
            className="form-control bg-black text-warning border-warning shadow-none"
            placeholder="Escribe un nombre..."
            style={{ fontSize: "0.8rem" }}
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
        />
        {sugerencias.length > 0 && (
          <ul className="list-group position-absolute w-100 shadow-lg" style={{ zIndex: 3000, top: "40px" }}>
            {sugerencias.map((item) => (
              <li 
                key={item._id} 
                className="list-group-item list-group-item-dark list-group-item-action border-warning"
                style={{ cursor: "pointer", fontSize: "0.8rem" }}
                onClick={() => {
    setBusqueda(""); 
    
    let path = "";
    // Comprobamos en qué lista está para saber a qué página ir
    if (store.personajes?.some(p => p._id === item._id)) path = "Personajes";
    else if (store.planetas?.some(p => p._id === item._id)) path = "Planetas";
    else if (store.naves?.some(p => p._id === item._id)) path = "Naves";

    if (path) {
        
        navigate(`/${path}`, { state: { selectedId: item._id } }); 
    }
}}
              >
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>
      </div>

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
          className={({ isActive }) => 
            isActive ? "btn nav-btn-custom nav-btn-active" : "btn nav-btn-custom"}
        >
          FAVORITOS
          <span className="badge rounded-pill bg-warning text-dark ms-2 fw-bold">
            {store?.favoritos?.length || 0}
          </span>
        </NavLink>
      </div>
    </nav>
  );
};