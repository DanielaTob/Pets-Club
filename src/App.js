import './App.css';
import Navbar from './components/containers/Navbar';
import Footer from './components/containers/Footer';
import { Outlet } from 'react-router-dom';
import Carousel from './components/containers/Carousel';

function App() {
  return (
    <div>
      <Navbar/>
        <Outlet/>
      <Footer />
    </div>
  );
}

export default App;
