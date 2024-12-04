import './App.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Footer from './components/Footer';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Hero from './Pages/Hero';
import Work from './Pages/Work';
import Slider from './components/Slider';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Work/>
      <Slider/>
      <About/>
      <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
