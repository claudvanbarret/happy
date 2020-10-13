import React from 'react';
import { FiArrowRight } from 'react-icons/fi'

import './styles/global.css';
import './styles/pages/landing-page.css';

import logo from './images/logo.svg';

function App() {
  return (
    <div id="landing-page">
      <div className="content-wrapper">
        <img src={logo} alt="logo"/>
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>
        <div className="location">
          <strong>Campinas</strong>
          <span>São Paulo</span>
        </div>
        <a href="" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)"/>
        </a>
      </div>
    </div>
  );
}

export default App;
