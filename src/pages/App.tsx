import React, { useState } from "react"
import Formulario from "../components/Formulario"
import Lista from "../components/Lista"
import style from './App.module.scss'
import Cronometro from "../components/Cronometro"
import { ITarefa } from "../types/tarefa"

function App() {
  // tipando o useState, falando que ele vai ser um array de itarefa ou um array vazio
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([])

  return (
      <div className={style.AppStyle}>
        <Formulario setTarefas={setTarefas}/>
        <Lista tarefas={tarefas}/>
        <Cronometro />
      </div>
  )
}

export default App
