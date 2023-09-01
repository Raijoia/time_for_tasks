import React from "react";
import style from './Botao.module.scss'

interface Props {
   children: React.ReactNode,
   type?: "button" | "submit" | "reset" | undefined,
   onClick?: () => void
}

// colocando prop no modo de class, ja colocando o type da props
function Botao({ children, type = 'button', onClick }: Props) {
  return (
    <button className={style.botao} type={type} onClick={onClick}>
      {children}
    </button>
  )
}

export default Botao