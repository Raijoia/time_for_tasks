import React from "react";
import style from './Botao.module.scss'

// colocando prop no modo de class, ja colocando o type da props
class Botao extends React.Component<{ children: string }> {
  render() {
    return (
      <button className={style.botao}>
        {this.props.children}
      </button>
    )
  }
}

export default Botao