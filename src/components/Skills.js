import React, { useState, useEffect } from 'react';
import bootstrap from '../assets/icons/skills/bootstrap.svg';
import leng_C from '../assets/icons/skills/c.svg';
import leng_Cplusplus from '../assets/icons/skills/c++.svg';
import css from '../assets/icons/skills/css3.svg';
import git from '../assets/icons/skills/git.svg';
import github from '../assets/icons/skills/github.svg';
import html from '../assets/icons/skills/html5.svg';
import java from '../assets/icons/skills/java.svg';
import javascript from '../assets/icons/skills/javascript.svg';
import json from '../assets/icons/skills/json.svg';
import mongodb from '../assets/icons/skills/mongodb.svg';
import mysql from '../assets/icons/skills/mysql.svg';
import nodejs from '../assets/icons/skills/nodejs.svg';
import php from '../assets/icons/skills/php.svg';
import react from '../assets/icons/skills/react.svg';

export const Skills = () => {
  useEffect(() => { 
    const skillsList = document.querySelectorAll('article.skill');
    window.onmousemove = function (e) { 
      let x = e.clientX,
          y = e.clientY;
      let className = new String();
      className = e.target.className;
      
      if (className === 'skill-icon')
      {
        let nameSkill = e.target.alt;
        skillsList.forEach(oneSkill => {
          if (oneSkill.className.includes(nameSkill)) {
            let skillDescription = oneSkill.querySelector('.skill-desc');
            
            skillDescription.style.top = (y + 10) + 'px';
            skillDescription.style.left = (x + 10) + 'px';
          }
        });
      }
      else if ((!className.includes('page')) || (!className.includes('svg')))
      {
        let [skill, nameSkill] = className.split(' ');
        
        skillsList.forEach(oneSkill => {
          if (oneSkill.className.includes(nameSkill))
          {
            let skillDescription = oneSkill.querySelector('.skill-desc');  
            skillDescription.style.top = (y + 10) + 'px';
            skillDescription.style.left = (x + 10) + 'px';
          }
        });
      }
    }
  }, [Skills]);
  
return (
  <div className='page skills'>
    <h1 className='title-page'> Conocimientos </h1>
    <div className='list-skills'>
      <article className='skill bootstrap'>
        <img className='skill-icon' src={bootstrap} alt='bootstrap' />
        <div className='skill-desc'>
          <h3> Bootstrap </h3>
          <p>
            Bootstrap es un
            <span className='color'> framework de diseño front-end </span>
            de código abierto que facilita y agiliza la creación de sitios web y aplicaciones responsivas.
          </p>
        </div>
      </article>
      <article className='skill lang-c'>
        <img className='skill-icon' src={leng_C} alt='lang-c' />
        <div className='skill-desc'>
          <h3> C </h3>
          <p>
            C es un
            <span className='color'> lenguaje de programación </span>
            de propósito general. Ampliamente utilizado en desarrollo de sistemas y aplicaciones, influyó en muchos lenguajes posteriores.
          </p>
        </div>
      </article>
      <article className='skill lang-c++'>
        <img className='skill-icon' src={leng_Cplusplus} alt='lang-c++' />
        <div className='skill-desc'>
          <h3> C++ </h3>
          <p>
            C++ es un
            <span className='color'>lenguaje de programación derivado de C</span>.
            Introduce <span className='color'>programación orientada a objetos</span>,
            permitiendo estructurar código en <span className='color'> clases y objetos reutilizables</span>.
            Su flexibilidad y eficiencia lo hacen popular para desarrollo de software de diversa índole.
          </p>
        </div>
      </article>
      <article className='skill lang-css'>
        <img className='skill-icon' src={css} alt='lang-css' />
        <div className='skill-desc'>
          <h3> CSS </h3>
          <p>
            CSS (Cascading Style Sheets) es un <span className='color'>lenguaje de diseño </span>
            utilizado en desarrollo web. Define la presentación y apariencia visual de un sitio,
            separando el contenido HTML de los estilos.
          </p>
        </div>
      </article>
      <article className='skill git'>
        <img className='skill-icon' src={git} alt='git' />
        <div className='skill-desc'>
          <h3> Git </h3>
          <p>
            Git es un <span className='color'>sistema de control de versiones </span>
            distribuido ampliamente usado en desarrollo de software. Permite rastrear cambios en el código a lo largo del tiempo,
            facilita la colaboración y brinda un historial completo de modificaciones.
          </p>
        </div>
      </article>
      <article className='skill github'>
        <img className='skill-icon' src={github} alt='github' />
        <div className='skill-desc'>
          <h3> GitHub </h3>
          <p>
            GitHub es una <span className='color'> plataforma en línea </span> que utiliza el
            <span className='color'> sistema de control de versiones Git </span>
            para la gestión y colaboración en proyectos de desarrollo de software.
          </p>
        </div>
      </article>
      <article className='skill lang-html'>
        <img className='skill-icon' src={html} alt='lang-html' />
        <div className='skill-desc'>
          <h3> HTML </h3>
          <p>
            HTML (HyperText Markup Language) es el lenguaje estándar utilizado para
            <span className='color'> crear y estructurar </span> contenido en la web. 
          </p>
        </div>
      </article>
      <article className='skill lang-java'>
        <img className='skill-icon' src={java} alt='lang-java' />
        <div className='skill-desc'>
          <h3> Java </h3>
          <p>
            Java es un <span className='color'> lenguaje de programación versátil y orientado a objetos</span>.
            Su popularidad se debe a su seguridad, rendimiento y amplia adopción en aplicaciones empresariales y móviles.
          </p>
        </div>
      </article>
      <article className='skill lang-javascript'>
        <img className='skill-icon' src={javascript} alt='lang-javascript' />
        <div className='skill-desc'>
          <h3> JavaScript </h3>
          <p>
            JavaScript es un <span className='color'> lenguaje de programación interpretado</span>,
            utilizado principalmente en el desarrollo web.
          </p>
        </div>
      </article>
      <article className='skill json'>
        <img className='skill-icon' src={json} alt='json' />
        <div className='skill-desc'>
          <h3> Json </h3>
          <p>
            JSON (JavaScript Object Notation) es un <span className='color'> formato ligero de intercambio de datos</span>.
            Basado en texto, se utiliza para representar estructuras de datos simples y complejas.
          </p>
        </div>
      </article>
      <article className='skill mongodb'>
        <img className='skill-icon' src={mongodb} alt='mongodb' />
        <div className='skill-desc'>
          <h3> MongoDB </h3>
          <p>
            MongoDB es una <span className='color'> base de datos NoSQL orientada a documentos</span>. Almacena datos en formato flexible 
            similar a JSON, permitiendo escalabilidad horizontal y rápido acceso. 
          </p>
        </div>
      </article>
      <article className='skill mysql'>
        <img className='skill-icon' src={mysql} alt='mysql' />
        <div className='skill-desc'>
          <h3> MySQL </h3>
          <p>
            MySQL es un <span className='color'>sistema de gestión de bases de datos relacional</span> de código abierto.
          </p>
        </div>
      </article>
      <article className='skill nodejs'>
        <img className='skill-icon' src={nodejs} alt='nodejs' />
        <div className='skill-desc'>
          <h3> NodeJS </h3>
          <p>
            Node.js es un <span className='color'> entorno de ejecución </span> de código JavaScript en el lado del servidor.
            Permite construir aplicaciones escalables y en tiempo real.
          </p>
        </div>
      </article>
      <article className='skill lang-php'>
        <img className='skill-icon' src={php} alt='lang-php' />
        <div className='skill-desc'>
          <h3> PHP </h3>
          <p>
            PHP es un <span className='color'> lenguaje de programación </span> del lado del servidor diseñado para el desarrollo web. 
            Se incrusta en el código HTML y se utiliza para generar contenido dinámico, interactuar con bases de datos y construir aplicaciones web. 
          </p>
        </div>
      </article>
      <article className='skill react'>
        <img className='skill-icon' src={react} alt='react' />
        <div className='skill-desc'>
          <h3> React </h3>
          <p>
            React es una <span className='color'> biblioteca de JavaScript</span>. Se utiliza para construir interfaces de usuario interactivas y reutilizables 
            en aplicaciones web. 
          </p>
        </div>
      </article>
    </div>
  </div>
  )
}