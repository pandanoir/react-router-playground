import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  useParams,
  Switch,
  useLocation,
} from 'react-router-dom';

const articles = [
  {
    id: 'first',
    title: 'その1',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 'second',
    title: 'その2',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 'third',
    title: 'その3',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];
const TopPage = () => {
  return (
    <>
      <h1>記事一覧</h1>
      {articles.map(({ title, id }) => (
        <div key={id}>
          <h1>
            <Link to={`/article/${id}`}>{title}</Link>
          </h1>
        </div>
      ))}
    </>
  );
};
const ArticlePage = () => {
  const { id: targetId } = useParams();
  const article = articles.find(({ id }) => id === targetId);
  if (article) {
    return (
      <>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
      </>
    );
  }
  return <h1>Not found</h1>;
};
const usePrev = <T extends unknown>(val: T) => {
  const [prev, setPrev] = useState<T | null>(null);
  const [cur, setCur] = useState(val);
  useEffect(() => {
    if (cur !== val) {
      setPrev(cur);
      setCur(val);
    }
  }, [val]);
  return prev;
};
const MySwitch: React.FC = ({ children }) => {
  const location = useLocation();
  const prevLocation = usePrev(location);
  return (
    <>
      <Switch location={location}>{children}</Switch>
      {prevLocation && <Switch location={prevLocation}>{children}</Switch>}
    </>
  );
};
const App = () => {
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
render(<App />, document.querySelector('#main'));
