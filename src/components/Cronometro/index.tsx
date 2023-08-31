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

  // tipando o contador e falando que se caso for undefined, valor dele será 0
  function regressiva(contador: number = 0) {
    // setando um tempo para a função ser iniciada
    setTimeout(() => {
      // fazendo um loop
      if(contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador - 1);
      }
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo}/>
      </div>
      <Botao onClick={() => regressiva(tempo)}>
        Começar!
      </Botao>
    </div>
  )
}
