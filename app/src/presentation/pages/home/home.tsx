import { Button, CircularProgress, List, ListItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { User } from "../../../domain/models/user";
import { DeleteUser } from "../../../domain/usecases/delete-user";
import { FindManyUser } from "../../../domain/usecases/find-many-user";
import "./home-styles.scss";
import icon from "./logo";
import { Link } from "react-router-dom";

type Props = {
  findUser: FindManyUser;
  deleteUser: DeleteUser;
};

const Home: React.FC<Props> = ({ deleteUser, findUser }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [state, setState] = useState<User[]>();
  const [sortBy, setSortBy] = useState<keyof Omit<User, 'ID'> | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const fetchUser = async () => {
    setLoading(true);
    try {
      const users = await findUser.findMany();
      setState(users);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [findUser]);

  const toggleSortOrder = (key: keyof Omit<User, 'ID'>) => {
    if (key === sortBy) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(key);
      setSortOrder('asc');
    }
  };

  const handleDeleteUser = async (id: string) => {
    setLoading(true);
    try {
      await deleteUser.delete({ id });
      setState((prevUsers) => prevUsers?.filter((user) => user.ID.toString() !== id) || []);
    } catch (error) {
      console.error("Erro ao excluir usuário:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading || state == null) {
    return <CircularProgress />;
  }

  if (!state.length) {
    return <div>Nenhum dado disponível.</div>;
  }

  const keys: Array<keyof Omit<User, 'ID'>> = Object.keys(state[0]) as Array<keyof Omit<User, 'ID'>>;

  // Função para ordenar os dados com base na coluna selecionada e direção de ordenação
  const sortedData = [...state].sort((a, b) => {
    if (sortBy) {
      if (sortOrder === 'asc') {
        return a[sortBy] > b[sortBy] ? 1 : -1;
      } else {
        return a[sortBy] < b[sortBy] ? 1 : -1;
      }
    }
    return 0;
  });

  return (
    <div className="login">
      <header className="header">
        <img className="icon" src={icon} alt="Ícone" />
        <h1>Entrega Inteligente</h1>
        <Link to="/create">
          <Button variant="contained" color="secondary">
            Criar
          </Button>
        </Link>
      </header>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {keys.map((key) => (
                <TableCell key={key} onClick={() => toggleSortOrder(key)}>
                  {key}
                </TableCell>
              ))}
              <TableCell>Ação</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData.map((item, index) => (
              <TableRow key={index}>
                {keys.map((key) => (
                  <TableCell key={key}>{item[key].toString()}</TableCell>
                ))}
                <TableCell classes={{ root: 'table-action' }}>
                  <Button classes={{ root: 'action' }} variant="contained" color="secondary" onClick={() => handleDeleteUser(item.ID.toString())}>
                    Excluir
                  </Button>
                  <Link to={`/update/${item.ID}`}>
                    <Button variant="contained" color="primary">
                      Editar
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <footer className="footer"></footer>
    </div>
  );
};

export default Home;
