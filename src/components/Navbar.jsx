import { useContext } from 'react';
import PizzasContext from '../context/PizzasProvider';
import {NavLink  } from 'react-router-dom';
import { formatNumber } from '../helpers/formatNumber';

import '../assets/styles/Navbar.css';

const Navbar = () => {
  const { carrito } = useContext(PizzasContext);
  const total = carrito.reduce((a, { count, price }) => a + price * count, 0);

  return (
    <div className="navbar text-white py-3">
      <div className="container d-block">
        <div className="d-flex justify-content-between">
          <NavLink to="/" className="logo-nombre mx-1 mb-0">
            <h4 className="mb-0">&#127829; Pizzería Mamma Mia!</h4>
          </NavLink>

          <NavLink to="/carrito" className="logo-nombre mx-1 mb-0">
            <h4 className="mb-0">
              &#128722; {''} Total: ${formatNumber(total)}
            </h4>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
