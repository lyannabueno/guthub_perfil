import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";

function App() {
  // const [getFormularioVisivel, setFormularioVisivel] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState(" ")
/*
  const nome = 'Ana'
  
  function retornaNome() {
    return nome
  }

  const pessoa = {
    nome: 'Bueno'
  }

  let estaDia = true;
*/
  return (
    <>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)}/>

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario}/>
          <ReposList nomeUsuario={nomeUsuario}/>
        </>
      )}

      {/* {getFormularioVisivel && (
        <Formulario/>
      )}

      <button onClick={() => setFormularioVisivel(!getFormularioVisivel)} type="button">toggle form</button>

      <h1>Olá, {retornaNome()}</h1>
      <h1>Olá, {pessoa.nome}</h1>
      <h2>Subtítulo</h2>
      {estaDia ? 'Bom dia!' : 'Boa tarde'} */}
    </> // encapsula vários elementos dentro de um só
    // podemos comntar com ctrl + ;
  )
}

export default App
