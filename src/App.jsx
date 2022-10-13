import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PizzasProvider } from './context/PizzasProvider';
import Detalle from './pages/Detalle';
import Carrito from './pages/Carrito';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <PizzasProvider>
        <Routes>
          <Route path="pizzas/">
            <Route path=":id" element={<Detalle />} />
          </Route>

          <Route path="/" element={<Home />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PizzasProvider>
    </BrowserRouter>
  );
}

export default App;
