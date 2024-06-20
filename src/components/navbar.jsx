import React from "react";
import './components.css';

import Grid from '../pages/grid';
import Form from './form';

export default function Navbar() {
  return (
    <>
      <section className="Navbar">
        <nav>
          <ul className="lista">
            <li>
              <img className="icono" src="src\assets\conejo-icon.png" alt="Icono conejo"/>
            </li>
            <li>
              <a href="../grid">Grid</a>
            </li>
            <li>
              <a href="./form">Formulario</a>
            </li>
            <li>
              <a href="/">Otro</a>
            </li>
            <li>
              <img className="icono" src="src\assets\conejo-icon.png" alt="Icono conejo"/>
            </li>
          </ul>
        </nav>
       </section>
    </>
  )
}