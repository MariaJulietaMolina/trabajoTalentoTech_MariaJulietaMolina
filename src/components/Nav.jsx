import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav style={{ backgroundColor: "#333", color: "white", padding: "10px" }}>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "space-around",
          margin: 0,
        }}
      >
        <li>
          <Link to="/Carrito" style={{ color: "white", textDecoration: "none" }}>
            Carrito (Inicio)
          </Link>
        </li>
        <li>
          <Link
            to="/usuario"
            style={{ color: "white", textDecoration: "none" }}
          >
            Usuario (Acerca de)
          </Link>
        </li>
        <li>
          <Link to="/menu" style={{ color: "white", textDecoration: "none" }}>
            Menú (Contacto)
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
