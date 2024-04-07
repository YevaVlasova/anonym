import React, { useState, useEffect } from 'react';
import './App.scss'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './views/Home/Home'
import Services from './views/Services/Services'
import Contacts from './views/Contacts/Contacts'
import Header from './components/UI/Header/Header'
import Footer from './components/UI/Footer/Footer'
import Lines from './components/UI/Lines/Lines'
import LeftSide from './components/UI/LeftSide/LeftSide'
import Preloader from './components/UI/Preloader/Preloader'
import ParticlesContainer from './components/UI/Particles/ParticlesContainer';

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <ParticlesContainer />
          <Header />
          <Lines />
          <LeftSide />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contacts' element={<Contacts />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  )
}

export default App;
