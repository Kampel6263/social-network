import React from 'react';
import classes from './post.module.css';

const Post = (props) => {
  console.log(props);
  return(
  <div className = {classes.item}>
    <img src = 'https://cdn.shopify.com/s/files/1/0025/1926/9429/products/HLB1kj7AacfrK1RkSmLyq6xGApXa5_2647bf65-1b1c-4a80-bd6a-9e9141a31561_1200x1200.jpg?v=1592864984' />
    {props.massage} <button onClick={props.deletePost}>Delete</button>
    <div>
  <span>Like </span> {props.likeCount}
    </div>
  </div>
  )
}

export default Post;