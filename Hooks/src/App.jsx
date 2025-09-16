import React from "react";
import ButtonModal from "./ButtonModal";
import Modal from "./MOdal";

const App = () => {
  const [ativo, setAtivo] = React.useState(() => {
    const ativo = window.localStorage.getItem("ativo");
    return ativo;
  });
  const [dados, setDados] = React.useState({ nome: "Daniel", idade: "18" });
  const [modal, setModal] = React.useState(false);
  let [items, setItens] = React.useState("Teste");

  function mudarClica() {
    setItens("outro");
  }

  function handleClick() {
    setAtivo(!ativo);
    setDados({ ...dados, faculdade: "Possui faculdade" });
  }

  return (
    <div>
      <p>{items}</p>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={mudarClica}>Aperta</button>
      <button onClick={handleClick}>{ativo ? "ativo" : "Inativo"}</button>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </div>
  );
};

export default App;
