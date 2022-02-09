import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';

const Home = () => {
  return (
    <div>
        <h1>Home</h1>


        <Link to="/login">Login</Link>
        {/* <Login /> */}

    </div>

  )
      
      
};

export default Home;
