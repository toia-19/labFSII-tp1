import React from "react";
import './components.css';

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
              <a href="./principal">Vista 1</a>
            </li>
            <li>
              <a href="./principal">Vista 2</a>
            </li>
            <li>
              <a href="./principal">Vista 3</a>
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