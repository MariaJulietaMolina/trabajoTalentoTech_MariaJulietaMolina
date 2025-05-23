import React, { useEffect, useState } from "react";

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://6830f5966205ab0d6c3ae2b9.mockapi.io/api/v1/articles")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setProductos(datos);
        setCargando(false);
      })
      .catch((error) => {
        setError("Hubo un problema al cargar los productos.");
        setCargando(false);
      });
  }, []);

  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section>
      <h2>Lista de Productos</h2>
      {productos.map((producto) => (
        <article
          key={producto.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px",
            marginBottom: "10px",
            maxWidth: "400px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h3>{producto.nombreArt}</h3>
          <p>
            <strong>Descripción:</strong> {producto.descripcion}
          </p>
          <p>
            <strong>Artículo:</strong> {producto.articulo}
          </p>
        </article>
      ))}
    </section>
  );
}
