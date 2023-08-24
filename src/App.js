import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import About from './component/About';
import { Route, Routes } from 'react-router-dom';
import Work from './component/Work';
import Testimonial from './component/Testimonial';
import Contact from './component/Contact';
import Footer from './component/Footer';


function App() {
  return (
    <div className="App">
      <Home />
      {/* <Navbar /> */}
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />

      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/work' element={<Work />} />
      </Routes> */}
      

    </div>                  
  );
}

export default App;
