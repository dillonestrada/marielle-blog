import axios from 'axios';

export const getAllPosts = async () => {
  const result = await axios.get(`http://marielle.dillonestrada.xyz/articles/`);

  console.log(result);

  if (result) {
    return await result.data;
  } else {
    return false;
  }
};

export const getPostById = async (id) => {
  const result = await axios.get(
    `http://marielle.dillonestrada.xyz/articles/${id}`,
  );

  console.log(result);

  if (result) {
    return await result.data;
  } else {
    return false;
  }
};
