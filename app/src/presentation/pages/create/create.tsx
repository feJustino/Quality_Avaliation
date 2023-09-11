import { Button, CircularProgress, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useParams } from "react-router-dom";
import { AddUser } from "../../../domain/usecases/add-user";
import { FindUser } from "../../../domain/usecases/find-user";
import { UpdateUser } from "../../../domain/usecases/update-user";
import { Validation } from "../../protocols/validation";
import "./create-styles.scss";
import icon from "./logo";

type Props = {
  addUser?: AddUser;
  validation: Validation;
  updateUser?: UpdateUser;
  findUser?: FindUser;
};

const Create: React.FC<Props> = ({ addUser, updateUser, findUser, validation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState({
    Codigo: "",
    Nome: "",
    CPF_CNPJ: "",
    CEP: 0,
    Logradouro: "",
    Endereco: "",
    Numero: "",
    Bairro: "",
    Cidade: "",
    UF: "",
    Complemento: "",
    Fone: "",
    LimiteCredito: 0,
    Validade: new Date(),
  });
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const params = useParams<{ id: string }>();

  const fetchUser = () => {
    if (findUser && params.id) {
      findUser.find({ id: params.id }).then((response) => {
        if (response) {
          const {
            Bairro,
            CEP,
            CPF_CNPJ,
            Cidade, 
            Codigo, 
            Complemento, 
            Endereco, 
            Fone, 
            ID, 
            LimiteCredito, 
            Logradouro, 
            Nome, 
            Numero, 
            UF, 
            Validade, 
            idUsuario } = response
          setSelectedDate(new Date(Validade))
          setState({
            Codigo: Codigo ?? "",
            Nome: Nome ?? "",
            CPF_CNPJ: CPF_CNPJ ?? "",
            CEP: CEP ?? 0,
            Logradouro: Logradouro ?? "",
            Endereco: Endereco ?? "",
            Numero: Numero ?? "",
            Bairro: Bairro ?? "",
            Cidade: Cidade ?? "",
            UF: UF ?? "",
            Complemento: Complemento ?? "",
            Fone: Fone ?? "",
            LimiteCredito: LimiteCredito ?? 0,
            Validade: new Date(Validade) ?? new Date()
          })
        }
      })
    }
  }

  const fetchAddUser = async () => {
    if (params.id == null && addUser) {
      setIsLoading(true); // Ativar o loading
      try {
        await addUser.add(state);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false); // Desativar o loading após a conclusão
      }
    }
  }

  const fetchUpdateUser = async () => {
    if (updateUser && params.id) {
      setIsLoading(true); // Ativar o loading
      try {
        await updateUser.update({ id: params.id, user: state });
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false); // Desativar o loading após a conclusão
      }
    }
  }

  useEffect(() => {
    console.log(params)
    fetchUser()
  }, [])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    handleChangeUser(value, name);
  };

  const handleChangeUser = (value: string | Date | null, name: string) => {
    setState({ ...state, [name]: value });
  };

  const handleDateChange = (date: Date | null, name: string) => {
    setSelectedDate(date);
    handleChangeUser(date, name)
  };

  const handleSaveButton = async () => {
    if (addUser) {
      fetchAddUser()
    } else if (updateUser) {
      fetchUpdateUser()
    }
  };

  return (
    <div className="login">
      <header className="header">
        <img className="icon" src={icon} alt="Ícone" />
        <h1>Entrega Inteligente</h1>
      </header>
      <form className="form">
        <h2>Formulário de cadastro</h2>
        <TextField
          value={state.Nome}
          onChange={handleChange}
          type="text"
          name="Nome"
          placeholder="Digite o nome"
        />
        <TextField
          value={state.CPF_CNPJ}
          onChange={handleChange}
          type="text"
          name="CPF_CNPJ"
          placeholder="Digite o CPF ou CNPJ"
        />
        <TextField
          value={state.CEP}
          onChange={handleChange}
          type="number"
          name="CEP"
          placeholder="Digite o CEP"
        />
        <TextField
          value={state.Logradouro}
          onChange={handleChange}
          type="text"
          name="Logradouro"
          placeholder="Digite o logradouro"
        />
        <TextField
          value={state.Endereco}
          onChange={handleChange}
          type="text"
          name="Endereco"
          placeholder="Digite o endereço"
        />
        <TextField
          value={state.Numero}
          onChange={handleChange}
          type="text"
          name="Numero"
          placeholder="Digite o número"
        />
        <TextField
          value={state.Bairro}
          onChange={handleChange}
          type="text"
          name="Bairro"
          placeholder="Digite o bairro"
        />
        <TextField
          value={state.Cidade}
          onChange={handleChange}
          type="text"
          name="Cidade"
          placeholder="Digite a cidade"
        />
        <TextField
          value={state.UF}
          onChange={handleChange}
          type="text"
          name="UF"
          placeholder="Digite a UF"
        />
        <TextField
          value={state.Complemento}
          onChange={handleChange}
          type="text"
          name="Complemento"
          placeholder="Digite o complemento"
        />
        <TextField
          value={state.Fone}
          onChange={handleChange}
          name="Fone"
          placeholder="Digite o telefone"
        />
        <TextField
          inputProps={{
            inputMode: "numeric",
            pattern: "[0-9]*.[0-9]{2}",
            value: state.LimiteCredito,
            onChange: handleChange,
          }}
          type="number"
          name="LimiteCredito"
          placeholder="Digite o limite de credito"
        />
      <DatePicker
        selected={selectedDate}
        name="Validade"
        onChange={(date, e) => handleDateChange(date, 'validade')}
        dateFormat="dd/MM/yyyy"
        placeholderText="Selecione uma validade"
      />
        <Button variant="contained" color="primary" onClick={handleSaveButton} disabled={isLoading}>
          {isLoading ? <CircularProgress size={24} /> : "Cadastrar"}
        </Button>
      </form>
      <footer className="footer"></footer>
    </div>
  );
};

export default Create;
