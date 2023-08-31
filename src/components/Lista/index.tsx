import style from './Lista.module.scss'
import Item from './Item'
import { ITarefa } from '../../types/tarefa'

export default function Lista({ tarefas }: { tarefas: ITarefa[]}) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
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
