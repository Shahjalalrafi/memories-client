import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post/Post';

import useStyles from './Styles'
const Posts = () => {
    const posts = useSelector(state => state.posts)
  const classes = useStyles()

  console.log(posts)
    return (
        <div>
            <h2>posts</h2>
            <Post />
            <Post />
        </div>
    );
};

export default Posts;