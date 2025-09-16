import React from "react";
import Produto from "./Produto"; // Importe o componente correto

const App = () => {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    if (produto !== null) window.localStorage.setItem("produto", produto);
  }, [produto]);

  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem("produto");
    if(produtoLocal !== null) setProduto(produtoLocal);
  }, []);

  const handleClick = ({ target }) => {
    setProduto(target.innerText);
  };

  return (
    <div>
      <h1>Preferência: {produto}</h1>
      <button onClick={handleClick} style={{ marginRight: "1rem" }}>
        notebook
      </button>
      <button onClick={handleClick}>smartphone</button>
      
     
      <Produto produto={produto} />
    </div>
  );
};

export default App;