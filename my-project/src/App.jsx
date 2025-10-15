import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Anant from './pages/Anant';
import Torna from './pages/Torna';
import ProductsPage from './pages/Product';
import Kisanpage from './pages/KisanDrone'
import DroneCare from './pages/DroneCare';
import ContactUs from './pages/Contact';
import Trening from './pages/training';
import Location from "./components/Location.jsx";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/About' element={<AboutUs/>}/>
        <Route path='/Anant' element={<Anant/>}/>
        <Route path='/Torna' element={<Torna/>}/>
        <Route path='/Kisan' element={<Kisanpage/>}/>
        <Route path='/Product' element={<ProductsPage/>}/>
        <Route path='/DroneCare' element={<DroneCare/>}/>
        <Route path='/Contact' element={<ContactUs/>}/>
        <Route path='/training' element={<Trening/>}/>
        <Route path='/Location' element={<Location/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App