import React from 'react';
import "../assets/styles/Header.css";

const Header = () => {
  return (
    <div className="header d-flex flex-column justify-content-center text-white text-center">
      <h1>¡Pizzería Mamma Mia!</h1>
      <h4>¡Tenemos las mejores pizzas que podrás encontrar!</h4>
      <hr className="w-75 mx-auto" />
    </div>
  );
};

export default Header;
