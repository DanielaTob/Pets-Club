import './App.css';
import Navbar from './components/containers/Navbar';
import Footer from './components/containers/Footer';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className='bg-white'>
      <Navbar/>
        <Outlet/>
      <Footer />
    </div>
  );
}

export default App;
