import React from 'react';
import { useParams } from 'react-router';
import { articles } from '../data';

export const ArticlePage: React.FC = () => {
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
