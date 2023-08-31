import React from "react";
import style from './Botao.module.scss'

// colocando prop no modo de class, ja colocando o type da props
class Botao extends React.Component<{ children: string, type?: "button" | "submit" | "reset" | undefined, onClick?: () => void }> {
  render() {
    const { type = 'button', onClick } = this.props
    return (
      <button className={style.botao} type={type} onClick={onClick}>
        {this.props.children}
      </button>
    )
  }
}

export default Botao