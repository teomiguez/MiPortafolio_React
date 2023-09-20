import React from 'react';
import { Link } from 'react-router-dom';
import visitPage from '../assets/icons/visit-page.svg';
import visitCode from '../assets/icons/code.svg';
import { proyects } from '../data/proyects.js';

export const Proyects = () => {
  return (
    <div className='page proyects'>
      <h1 className='title-page title-proyects'> Proyectos </h1>
      <section className='proyects-list'>
        {
          proyects.map(proyect => {
            return (
              <article key={proyect.id} className='proyect-item'>
                <div className='mask'>
                  <img src={"/images/proyects/" + proyect.id + ".png"} alt='proyect-img' />
                </div>
                <div className='proyect-info'>
                  <div className='proyect-categories'>
                    {proyect.categories.map(categorie => {
                      return (
                        <span> '{categorie}' </span>
                      );
                    })}
                  </div>
                  <div className='proyect-title'>
                    <h3> {proyect.name} </h3>
                  </div>
                  <div className='proyect-technologies'>
                    {proyect.technologies.map(technologie => {
                      return (
                        <p> {technologie} </p>
                      );
                    })}
                  </div>
                  <div className='proyect-links'>
                    <Link to={'https://' + proyect.url_code}>
                      <img src={visitCode} alt='code' />
                      <div className='float-text'> Código </div>
                    </Link>
                    <Link to={'https://' + proyect.url_to[1]}>
                      <img src={visitPage} alt='page' />
                      <div className='float-text'> {proyect.url_to[0]} </div>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })
        }
      </section>
    </div>
  )
}
