import React from "react";
import Header from "./Header";
import Home from "./Home";
import Catalogo from "./Catalogo";

const App = () => {
  const { pathname } = window.location;
  let PaginaAtual;

  if (pathname === "/catalogo") {
    PaginaAtual = Catalogo;
  } else {
    PaginaAtual = Home;
  }

  return (
    <div>
      <Header />
      <main style={{ padding: "20px" }}>
        <PaginaAtual />
      </main>
      <footer style={{ textAlign: "center", marginTop: "2rem", color: "#777" }}>
        <p>Feito em React</p>
      </footer>
    </div>
  );
};

export default App;
