import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductPage from './pages/ProductPage';
// import other pages if needed
// import Home from './pages/Home';
// import About from './pages/About';

function App() {
  return (
    <Router>
      <Header />
      <div className='bg-[url(/bg.png)] relative z-[-1]'>
        <img className='absolute top-0 right-0 h-[500px] w-60 z-[-1]' src="rt-fl.png" alt="" />
        <img className='absolute top-0 left-0 h-[500px] w-60 z-[-1]' src="lt-fl.png" alt="" />

        <img className='absolute top-1/2 right-0 h-[500px] w-60 z-[-1]' src="rm-fl.png" alt="" />
        <img className='absolute top-1/2 left-0 h-[500px] w-60 z-[-1]' src="lm-fl.png" alt="" />

        <Routes>
          <Route path="/" element={<ProductPage />} />
          {/* Add other routes as needed */}
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
