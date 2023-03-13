import React from 'react';
import './NavBar.css';

class NavBar extends React.Component {
    render() {
      return (
        <div className="NavBar">
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Sobre nosotros</a></li>
            <li><a href="#">Contacto</a></li>
            <li><button>Iniciar sesión</button></li>
          </ul>
        </div>
      );
    }
  }
  

export default NavBar