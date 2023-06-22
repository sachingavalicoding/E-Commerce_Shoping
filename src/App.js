import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import DidNotFound from './pages/didnotfound/DidNotFound';
import Gallery from './pages/gallery/Gallery';
import Home from './pages/home/Home.jsx'
import Plans from './pages/plans/Plans';
import Trainers from './pages/trainers/Trainers';
import Navbar from './Components/Navbar';
function App() {
  return (
    <BrowserRouter className="App">
    <Navbar /> 
    <Routes>
      <Route path='/' element={<Home /> } />
      <Route path='about' element={<About /> } />
      <Route path='contact' element={<Contact /> } />
      <Route path='gallery' element={<Gallery /> } />
      <Route path='plans' element={<Plans /> } />
      <Route path='trainers' element={<Trainers /> } />
      <Route path='*' element={<DidNotFound /> } />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
