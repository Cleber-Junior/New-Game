import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <Link to="Login">Login</Link> | <Link to="/"> Home </Link>
      </nav>
    </div>
  );
};

export default Header;
