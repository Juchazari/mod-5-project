import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

const Header = () => {
  return (
    <nav>
      <h1>
        <Link to="/">LOGO</Link>
      </h1>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
