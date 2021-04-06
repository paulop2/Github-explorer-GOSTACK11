import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import githubExplorer from '../../assets/githubExplorer.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={githubExplorer} alt="Github Explorer" />
      <Title>Explore seus repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
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
