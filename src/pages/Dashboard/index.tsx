import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import githubExplorer from '../../assets/githubExplorer.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, serRepositories] = useState([]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    // Add de um novo repo
    // consumir api do github
    event.preventDefault();
    const response = await api.get(`repos/${newRepo}`);
  }

  return (
    <>
      <img src={githubExplorer} alt="Github Explorer" />
      <Title>Explore seus repositórios no Github</Title>

      <Form onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit"> Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/40959653?v=4"
            alt="Paulo Vitor"
          />
          <div>
            <strong>Rocketseat/Unform</strong>
            <p>Easy etc etc etc</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
