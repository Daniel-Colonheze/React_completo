import React from "react";

const Produto = ({ dados }) => {
  // Verifica se dados existe
  if (!dados) return <div>Carregando...</div>;
  
  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
      {dados.fotos && dados.fotos[0] && (
        <img 
          src={dados.fotos[0].src} 
          alt={dados.fotos[0].titulo || dados.nome} 
        />
      )}
    </div>
  );
};

export default Produto;