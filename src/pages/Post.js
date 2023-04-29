import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import RelatedPosts from '../components/relatedposts';

const Post = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8887/wpapp/wp-json/wp/v2/posts/${id}?_embed`)
      .then((res) => setPost(res.data));
  }, [id]);

  return (
    <div>
<div style={{background: `url('${post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0].source_url}') no-repeat center center fixed`, WebkitBackgroundSize: 'cover', MozBackgroundSize: 'cover', OBackgroundSize: 'cover', backgroundSize: 'cover'}} className="jumbotron bg-cover py-4 text-white">
<div class="container text-center">
        <h1 class="display-4 font-weight-bold py-4">MyBlog</h1>
        <p class="display-6 py-4">This is my blog</p>
    </div>
</div>
    <div className='container my-4'>
      <h1>{post.title && post.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content && post.content.rendered }}></div>
    </div>
    <RelatedPosts />
    </div>
  );
};

export default Post;
