import React from 'react';
import Tasks from '../Tasks';
import { Layout } from 'antd';

import './App.css';

const App: React.FC = () => {
  const { Header, Content, Footer } = Layout;

  return (
    <Layout className="main-layout">
      <Header className="main-header--fixed">Header</Header>
      <Content className="main-content">
        <Tasks />
      </Content>
      <Footer className="main-footer--fixed">
        &copy; Gilad Lev-Ari{' '}
        <i className="main-footer__my-contacts">
          [
          <a className="main-footer__my-contacts" href="mailto:giladl82@gmail.com" rel="noopener noreferrer" target="_blank">
            giladl82@gmail.com
          </a>
          ]
        </i>
      </Footer>
    </Layout>
  );
};

export default App;
