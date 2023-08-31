// criando uma interface para falar que tarefas é uma array de object
export interface ITarefa{
  tarefa: string,
  tempo: string,
  selecionado: boolean,
  completado: boolean,
  id: string
}