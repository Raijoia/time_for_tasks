import React, { useState } from 'react'
import style from './Lista.module.scss'
import Item from './Item'

export default function Lista() {
  const [tarefas, setTarefas] = useState([
    {
      tarefa: 'React',
      tempo: '02:00:00'
    }, {
      tarefa: 'JavaScript',
      tempo: '01:00:00'
    }, {
      tarefa: 'TypeScript',
      tempo: '03:00:00'
    },
  ])

  return (
    <aside className={style.listaTarefas}>
      <h2 onClick={() => {
        console.log(tarefas)
        setTarefas([...tarefas, { tarefa: "Estudy", tempo:"05:00:00" }])
      }} >Estudos do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item 
            key={index}
            // manda o item de forma desestruturada
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}
