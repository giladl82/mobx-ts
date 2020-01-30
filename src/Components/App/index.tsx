import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AppHeader from './Header';
import Tasks from '../Tasks';
import Contacts from '../Contacts';

import './App.css';
const App = () => {
  const { Header, Content, Footer } = Layout;

  return (
    <Router>
      <Layout className="main-layout">
        <Header className="main-header--fixed">
          <AppHeader />
        </Header>
        <Content className="main-content">
          <Switch>
            <Route exact path="/">
              {/*
                I know this code is here and not in its own file.
                I'm OK with it (in this project only 😜)
              */}
              {
                <div className="home-page">
                  <h1 className="home-page__title">Welcome to "My Simple Mbox + TS project!"</h1>
                  <img src="https://media.makeameme.org/created/look-at-all-d99c36831a.jpg" alt="" />
                </div>
              }
            </Route>
            <Route exact path="/tasks">
              <Tasks />
            </Route>
            <Route exact path="/contacts">
              <Contacts />
            </Route>
          </Switch>
        </Content>
        <Footer className="main-footer--fixed">
          &copy; Gilad Lev-Ari{' '}
          <i className="main-footer__my-contacts">
            [
            <a
              className="main-footer__my-contacts"
              href="mailto:giladl82@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              giladl82@gmail.com
            </a>
            ]
          </i>
        </Footer>
      </Layout>
    </Router>
  );
};

export default App;
