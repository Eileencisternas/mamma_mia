import Card from '../components/Card';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Pizzas from '../components/Pizzas';

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Pizzas>
        <Card />
      </Pizzas>
    </>
  );
};

export default Home;
