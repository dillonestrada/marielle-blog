import Link from 'next/link';
import { stringify } from 'postcss';
import { useEffect, useState } from 'react';
import { getAllPostsFromServer } from '../lib/utils';

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    let mounted = true;
    if (mounted) {
      const postsFromServer = await getAllPostsFromServer();
      setPosts(postsFromServer);
    }
    return () => (mounted = false);
  }, []);

  return (
    <div>
      <p>List of posts:</p>
      <ul>
        {posts
          ? posts.map(function (post, id) {
              return (
                <li key={id}>
                  <Link href={'/posts/' + post.slug}>
                    <a>{post.title.rendered}</a>
                  </Link>
                </li>
              );
            })
          : ''}
      </ul>
    </div>
  );
}
