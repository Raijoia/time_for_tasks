import React, { useState } from "react"
import Formulario from "../components/Formulario"
import Lista from "../components/Lista"
import style from './App.module.scss'
import Cronometro from "../components/Cronometro"
import { ITarefa } from "../types/tarefa"

function App() {
  // tipando o useState, falando que ele vai ser um array de itarefa ou um array vazio
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([])
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
  }

  return (
      <div className={style.AppStyle}>
        <Formulario setTarefas={setTarefas}/>
        <Lista 
          tarefas={tarefas} 
          selecionaTarefa={selecionaTarefa} 
        />
        <Cronometro />
      </div>
  )
}

export default App
