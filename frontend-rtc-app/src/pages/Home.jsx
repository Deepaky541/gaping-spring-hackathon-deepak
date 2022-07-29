import React from 'react'
import { Link } from 'react-router-dom';
import "./home.css"

const Home = () => {
  return (
    <div className="home">
      <div className="house">
        <div className="box">
          <h1>For extroverts</h1>
          <Link to="/video">
            <button>vd chat</button>
          </Link>
        </div>
        <div className="box">
          <h1>For introverts</h1>
          <Link to="/msg">
            <button>messages</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home