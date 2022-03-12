import './App.css';
import Navbar from './components/containers/Navbar';
import Footer from './components/containers/Footer';
import { Outlet } from 'react-router-dom';
import Context from './hooks/Context';
import categories from '../src/data/categories';
import { useState } from 'react';


function App() {
  console.log(categories);
  const [data, setData]=useState(categories)
  const [cart, setCart]=useState([]);
  return (
    <Context.Provider value={{ data, setData, cart, setCart }}>
      <div className='bg-white'>
        <Navbar/>
          <Outlet/>
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;
