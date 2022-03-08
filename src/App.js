
import './App.css';
import Carousel from './components/containers/Carousel';
import Navbar from './components/containers/Navbar';
import Text from './components/containers/Text';
import Buttonhome from './components/buttons/Buttonhome';
import Contact from './components/containers/Contact';

function App() {
  return (
    <div>
      <Navbar/>
      <Carousel/>  
      <Text />
      <Buttonhome />
      <Contact />
    </div>
  );
}

export default App;
