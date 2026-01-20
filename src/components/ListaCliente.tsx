import React, { useState, useEffect } from "react";
import BookCard from "./BookCard.jsx";
import "./ListaCliente.css";


export default function ListaCliente() {
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    const handler = (e) => setLibros(e.detail);
    addEventListener("resultado", handler);
    return () => removeEventListener("resultado", handler);
  }, []);

  return (
    <div className="grid">
      {libros.map((l, i) => (
        <BookCard book={l} key={i} />
      ))}
    </div>
  );
}
