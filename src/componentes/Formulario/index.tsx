import { useState } from 'react'
import { IColaborador } from '../../compartilhado/interfaces/IColaborador'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

interface FormularioProps {
  aoColaboradorCadastrado: (colaborador: IColaborador) => void
  times: string[]
}

const Formulario = (props: FormularioProps) => {
  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')
  const [data, setData] = useState('')

  const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    // console.log('Form foi submetido => ', nome, cargo, imagem, time)
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
      data,
    })
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
    setData('')
  }
  return (
    <section className="formulario">
      <form onSubmit={(evento) => aoSalvar(evento)}>
        {/* ou <form onSubmit={aoSalvar}> */}
        <h2>Preencha os dados para criar o Card do colaborador</h2>
        <CampoTexto
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
          label="Imagem"
          placeholder="Digite o endereço da imagem"
        />
        <CampoTexto
          valor={data}
          aoAlterado={(valor) => setData(valor)}
          label="Data de entrada no time"
          placeholder=""
          tipo="date"
        />
        <ListaSuspensa
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
          obrigatorio={true}
          label="Time"
          itens={props.times}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  )
}

export default Formulario
