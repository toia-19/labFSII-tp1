import React from 'react';
import './components.css';

export default function Footer() {
  return (
    <>
      <footer className="Footer">
        <ul className="lista">
          <li>Redes Sociales</li>
          <li>Contacto</li>
          <li>
            <img className="icono" src="src\assets\conejo-icon.png" alt="Icono conejo"/>
          </li>
          <li>Donaciones</li>
          <li>Sitio oficial</li>
        </ul>
      </footer>
    </>
  )
}