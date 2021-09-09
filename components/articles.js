import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Articles() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios.get('http://marielle.dillonestrada.xyz/articles').then((res) => {
      setArticles(res.data);
    });
  }, []);
  return (
    <div className="container flex flex-wrap w-72">
      {articles.map((article) => {
        return <p>{JSON.stringify(article)}</p>;
      })}
    </div>
  );
}
