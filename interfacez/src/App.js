import React, { Fragment } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Portafolio from './components/Portafolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NewComponent from './components/NewComponent';

import './App.css';

function App() {
  return (
    <Fragment>
      <Header />
      <Banner />
      <Portafolio />
      <About />
      <Contact />
      <NewComponent />
      <Footer />
    </Fragment>
  );
}

export default App;
