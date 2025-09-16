import React from "react";

const Produto = ({ nome, detalhes }) => {
  return (
    <div
      style={{
        border: "2px solid #4c8b64",
        borderRadius: "10px",
        margin: "1rem 0",
        padding: "1rem",
        background: "#f9f9f9",
      }}
    >
      <h2 style={{ marginBottom: "8px", color: "#2c3e50" }}>{nome}</h2>
      <ul>
        {detalhes.map((caract, index) => (
          <li key={index}>{caract}</li>
        ))}
      </ul>
    </div>
  );
};

export default Produto;
