import React, { useEffect, useState } from 'react';
import Head from 'next/head';

import { useRouter } from 'next/router';
import Post from '../../components/Post';
import { getAllPostsFromServer } from '../../lib/utils';
import styles from '../../styles/PostsPage.module.scss';

export default function PostPage() {
  const router = useRouter();

  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await getAllPosts();
  //     if (result) {
  //       setPosts(result);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const masonryOptions = {
    columnWidth: 1,
  };

  useEffect(async () => {
    let mounted = true;
    if (mounted) {
      const postsFromServer = await getAllPostsFromServer();
      setPosts(postsFromServer);
    }
    return () => (mounted = false);
  }, []);

  return (
    <div className={styles.grid}>
      {/* <div className="flex flex-col items-center justify-center min-h-screen">
        <Head>
          <title>Aeeiee WordPress React Demo</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex flex-col items-center flex-1 px-20 py-10">
          <h1 className="text-6xl font-bold mt-5 mb-5">Blog</h1>
          <p className="text-xl mb-5">WordPress as a Headless CMS with React</p> */}
      {posts &&
        posts.map((post, id) => {
          return (
            <div key={id}>
              <Post post={post} />
            </div>
          );
        })}
    </div>
  );
}
