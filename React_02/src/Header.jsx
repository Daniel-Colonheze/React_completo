import React from "react";

const Header = () => {
  return (
    <header style={{ background: "#4c8b64", padding: "15px" }}>
      <nav>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          <li>
            <a
              href="/"
              style={{ color: "#fff", margin: "100px", textDecoration: "none" }}
            >
              Início
            </a>
          </li>
          <li>
            <a
              href="/catalogo"
              style={{ color: "#fff", margin: "100px", textDecoration: "none" }}
            >
              Catálogo
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
