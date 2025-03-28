import { useState } from "react";

function App() {

  const [nome, setNome] = useState("Memphis")

  const Formulario = () => {
    return (
      <div>
        <input 
      className="nome"
      name="nome"
      onChange={(e)=>{setNome(e.target.value)}}
      placeholder="Digite um nome"
      type="text" />
      <button
      className="botao"
      onClick={()=>{alert(nome)}}>
      Clique Aqui
      </button>
      </div>
    )
  }

    //var nome= "odeio a sierpes";

  return (
    <div>
      <h3>Pizzaria 2f</h3>
      <Formulario />
    </div>
  )
}

export default App