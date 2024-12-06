import './App.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';
import { Route,Routes} from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <>
    <Routes>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
    </Routes>
    </>
  );
}

export default App;
