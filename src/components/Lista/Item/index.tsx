import React from 'react'
import style from '../Lista.module.scss'
import { ITarefa } from '../../../types/tarefa'

// tipando o props em linha
export default function Item({ tarefa, tempo, selecionado, completado, id }: ITarefa) {
  return (
    <li className={style.item}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  )
}
