import React from 'react';
import './App.css';
import About from './components/about/About';
import Contact from './components/Contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import Portfolio from './components/portfolio/portfolio';
import ScrollUp from './components/ScrollUp/ScrollUp';
import Skills from './components/Skills/Skills';

const App = () => {
  return (
    <div className='App'>
    <Header/>

    <main className='mail'>
      <Home/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>
    </main>
      <Footer/>
      <ScrollUp/>
    </div>
  );
}

export default App;
