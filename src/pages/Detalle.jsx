import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import PizzasContext from '../context/PizzasProvider';
import '../assets/styles/Detalle.css';

const Detalle = () => {
  const [pizzaUnidad, setpizzaUnidad] = useState({});
  const { pizzas, addToCart} = useContext(PizzasContext);
  const { id } = useParams();


  const obtenerDatos = () => {
    const datosPizza = pizzas.find((pizza) => pizza.id === id);

    setpizzaUnidad(datosPizza || {});
  };

  useEffect(() => {
    obtenerDatos();
  }, [pizzas]);

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="card mb-3 estilos">
          <div className="row g-0">
            <div className="col-md-6">
              <img
                src={pizzaUnidad.img}
                className="img-fluid estilos rounded-start"
                alt={pizzaUnidad.name}
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title text-capitalize">
                  {pizzaUnidad.name}
                </h5>
                <p className="card-text">{pizzaUnidad.desc}</p>
                <ul>
                  {pizzaUnidad.ingredients?.map((ingredient, i) => (
                    <li key={i}>&#127829; {ingredient}</li>
                  ))}
                </ul>
                <div className="d-flex justify-content-around">
                  <h4>Precio: ${pizzaUnidad.price}</h4>
                  <button className="btn btn-danger"onClick={() => addToCart(pizzaUnidad)} >Añadir &#128722;</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detalle;
