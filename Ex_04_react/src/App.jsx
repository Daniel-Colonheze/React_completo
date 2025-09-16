import React from "react";
import Produto from "./Produto";

function App() {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(false); // ✅ Inicialize com false

  async function handleClick(event) {
    setCarregando(true); // ✅ Correto: setCarregando(true)
    
    try {
      const response = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
      );
      const json = await response.json();
      setDados(json);
    } catch (error) {
      console.error("Erro:", error);
    } finally {
      setCarregando(false); // ✅ Correto: setCarregando(false)
    }
  }

  return (
    <>
      <button style={{ margin: "5rem" }} onClick={handleClick}>
        notebook
      </button>
      <button style={{ margin: "5rem" }} onClick={handleClick}>
        smartphone
      </button>
      <button style={{ margin: "5rem" }} onClick={handleClick}>
        tablet
      </button>
      
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto dados={dados} />}
    </>
  );
}

export default App;