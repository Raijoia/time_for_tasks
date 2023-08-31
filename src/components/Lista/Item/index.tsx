import React from 'react'
import style from '../Lista.module.scss'

// tipando o props em linha
export default function Item({ tarefa, tempo }: { tarefa: string, tempo: string }) {
  return (
    <li className={style.item}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  )
}
