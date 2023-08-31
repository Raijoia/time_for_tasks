import React from 'react'
import style from '../Lista.module.scss'
import { ITarefa } from '../../../types/tarefa'

// extended tarefa
interface Props extends ITarefa {
  selecionaTarefa: (selecionaTarefa: ITarefa) => void
}

// tipando o props em linha
export default function Item({ 
    tarefa, 
    tempo, 
    selecionado, 
    completado, 
    id, 
    selecionaTarefa 
  }: Props) {
  return (
    <li 
      className={style.item} 
      onClick={() => selecionaTarefa({
        tarefa,
        tempo,
        selecionado,
        completado,
        id
      })}
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  )
}
