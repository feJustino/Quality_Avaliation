import React from 'react'
import './create-styles.scss'
import icon from './logo'

const Create: React.FC = () => {
  return (
    <div className="login">
      <header className="header">
        <img className="icon" src={icon}></img>
        <h1>Entrega Inteligente</h1>
      </header>
      <form className="form">
        <h2>Formulario de cadastro</h2>
        <div className="inputWrap">
          <input type="text" name="nome" placeholder="Digite o nome" />
        </div>
        <div className="inputWrap">
          <input
            type="text"
            name="CPF_CNPJ"
            placeholder="Digite o CPF ou CNPJ"
          />
          <span className="hint"></span>
        </div>
        <div className="inputWrap">
          <input type="text" name="CEP" placeholder="Digite o CEP" />
        </div>
        <div className="inputWrap">
          <input
            type="text"
            name="Logradouro"
            placeholder="Digite o logradouro"
          />
          <span className="hint"></span>
        </div>
        <div className="inputWrap">
          <input
            type="text"
            name="Endereco"
            placeholder="Digite o endereço"
          />
          <span className="hint"></span>
        </div>
        <div className="inputWrap">
          <input
            type="text"
            name="Numero"
            placeholder="Digite o número"
          />
          <span className="hint"></span>
        </div>
        <div className="inputWrap">
          <input
            type="text"
            name="Bairro"
            placeholder="Digite o bairro"
          />
          <span className="hint"></span>
        </div>
        <div className="inputWrap">
          <input
            type="text"
            name="Cidade"
            placeholder="Digite a cidade"
          />
          <span className="hint"></span>
        </div>
        <div className="inputWrap">
          <input
            type="text"
            name="UF"
            placeholder="Digite a UF"
          />
          <span className="hint"></span>
        </div>
        <div className="inputWrap">
          <input
            type="text"
            name="Complemento"
            placeholder="Digite o complemento"
          />
          <span className="hint"></span>
        </div>
        <div className="inputWrap">
          <input
            type="text"
            name="Fone"
            placeholder="Digite o telefone"
          />
          <span className="hint"></span>
        </div>
        <div className="inputWrap">
          <input
            type="text"
            name="LimiteCredito"
            placeholder="Digite o limite de credito"
          />
          <span className="hint"></span>
        </div>
        <div className="inputWrap">
          <input
            type="date"
            name="Validade"
            placeholder="Digite o validade"
          />
          <span className="hint"></span>
        </div>
        <button type="submit">Cadastrar</button>
      </form>
      <footer className="footer"></footer>
    </div>
  )
}

export default Create
