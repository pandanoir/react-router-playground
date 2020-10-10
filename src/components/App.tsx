import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { MySwitch } from './MySwitch';
import { TopPage } from '../pages/TopPage';
import { ArticlePage } from '../pages/ArticlePage';

export const App: React.FC = () => {
  return (
    <>
      <Router>
        <header>
          <Link to="/">Top</Link>
        </header>
        <MySwitch>
          <Route path="/" exact>
            <TopPage />
          </Route>
          <Route path="/article/:id">
            <ArticlePage />
          </Route>
        </MySwitch>
      </Router>
    </>
  );
};
