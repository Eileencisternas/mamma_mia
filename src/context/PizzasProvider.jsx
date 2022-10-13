import { createContext, useState, useEffect } from 'react';

// Creación del context
const PizzasContext = createContext();

// Provider con la fuente de datos
const PizzasProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    getPizzas();
  }, []);

  const getPizzas = async () => {
    const res = await fetch('/pizzas.json');
    const pizzas = await res.json();
    setPizzas(pizzas);
  };

 
  const addToCart = ({ id, price, name, img }) => {
    const productoElegido = carrito.findIndex((p) => p.id === id);
    const producto = { id, price, name, img, count: 1 };

    if (productoElegido >= 0) {
      carrito[productoElegido].count++;
      setCarrito([...carrito]);
    } else {
      setCarrito([...carrito, producto]);
    }
  };

  const increase = (i) => {
    carrito[i].count++;
    setCarrito([...carrito]);
  };
  const decrement = (i) => {
    const { count } = carrito[i];
    if (count === 1) {
      carrito.splice(i, 1);
    } else {
      carrito[i].count--;
    }
    setCarrito([...carrito]);
  };

  return (
    <PizzasContext.Provider
      value={{ pizzas, carrito, setCarrito, addToCart, increase, decrement }}
    >
      {children}
    </PizzasContext.Provider>
  );
};


export { PizzasProvider };

export default PizzasContext;
