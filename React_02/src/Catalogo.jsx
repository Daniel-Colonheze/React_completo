import React from "react";
import Titulo from "./Titulo";
import Produto from "./Produto";

const Catalogo = () => {
  const listaProdutos = [
    { nome: "Notebook Gamer", detalhes: ["16GB RAM", "SSD 512GB", "RTX 3060"] },
    {
      nome: "Smartphone Pro",
      detalhes: ["6GB RAM", "256GB Armazenamento", "Câmera 108MP"],
    },
  ];

  return (
    <section>
      <Titulo texto="Nosso Catálogo" />
      {listaProdutos.map((item) => (
        <Produto key={item.nome} {...item} />
      ))}
    </section>
  );
};

export default Catalogo;
