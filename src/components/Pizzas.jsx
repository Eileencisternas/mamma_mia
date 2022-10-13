import React from 'react';
import '../assets/styles/Pizzas.css'

const Pizzas = ({ children }) => {
  return (
    <div className="container my-4">
       <h1>Recomendadas...</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">{children}</div>
    </div>
  );
};

export default Pizzas;
