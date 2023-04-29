import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Masonry from 'masonry-layout';
import { Link } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:8887/wpapp/wp-json/wp/v2/posts?_embed')
      .then((res) => {
        setPosts(res.data);
        const grid = document.querySelector('.row');
        const masonry = new Masonry(grid, {
          itemSelector: '.grid-item',
          percentPosition: true
        });
      });
  }, []);

  return (
    <div>
<div style={{background: `url('https://images.unsplash.com/photo-1675849077042-313c55a5a09f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80') no-repeat center center fixed`, WebkitBackgroundSize: 'cover', MozBackgroundSize: 'cover', OBackgroundSize: 'cover', backgroundSize: 'cover'}} className="jumbotron bg-cover py-4 text-white">
<div class="container text-center">
        <h1 class="display-4 font-weight-bold py-4">MyBlog</h1>
        <p class="display-6 py-4">This is my blog</p>
    </div>
</div>
    <div className="container">

      <h1 className="my-4">My latest posts</h1>
      <div className="row" data-masonry='{"percentPosition": true }'>
        {posts.map((post) => (
          <div key={post.id} className="col-sm-6 col-md-4 col-lg-4 mt-3 grid-item relative text">
           <Link to={`/Post/${post.id}`}><a className="text-decoration-none text-black">
              {post._embedded && post._embedded['wp:featuredmedia'] && (
                <img src={post._embedded['wp:featuredmedia'][0].source_url} alt={post.title.rendered} className="img-fluid" />
              )}
            </a>
            </Link> 
            <h3 className="text-decoration-none absolute">{post.title.rendered}</h3>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Home;