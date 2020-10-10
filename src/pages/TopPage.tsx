import React from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data';

export const TopPage: React.FC = () => {
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
