import React, { useEffect, useState } from 'react'
import Botao from '../Botao'
import Relogio from './Relogio'
import style from './Cronometro.module.scss'
import { tempoParaSegundos } from '../../common/utils/time'
import { ITarefa } from '../../types/tarefa'

interface Props {
  selecionado: ITarefa | undefined
}

export default function Cronometro({ selecionado }: Props) {
  const [tempo, setTempo] = useState<number>()
  
  // useEffect fica esperando alguma mudança, caso houver, ele roda
  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(String(selecionado.tempo)))
    }
  }, [selecionado])

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo}/>
      </div>
      <Botao>
        Começar!
      </Botao>
    </div>
  )
}
