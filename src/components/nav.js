import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

  return (
    <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
        <Link to={"/"}><a className="navbar-brand text-decoration-none text-black">Photoblog</a></Link>

        </div>
    </nav>
  );
};

export default Nav;



