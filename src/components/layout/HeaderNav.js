import React from 'react'
import { NavLink } from 'react-router-dom';

export const HeaderNav = () => {
  return (
    <header className='header'>      
        <div className='logo'>
            <span> TM </span>   
            <h3> Teo Miguez </h3>      
        </div>
        <nav>
            <ul>
                <li>
                    <NavLink to="/home"> Inicio </NavLink>
                </li>
                <li>
                    <NavLink to="/about-me"> Sobre mi </NavLink>
                </li>
                <li>
                    <NavLink to="/proyects"> Proyectos </NavLink>
                </li>
                <li>
                    <NavLink to="/skills"> Conocimientos </NavLink>
                </li>  
                <li>
                    <NavLink to="/curriculum"> Curriculum </NavLink>
                </li>
                <li>
                    <NavLink to="/contact-and-networks"> Contacto y redes </NavLink>
                </li>
            </ul>
        </nav>  
    </header>
  )
}
