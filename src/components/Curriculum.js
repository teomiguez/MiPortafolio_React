import React from 'react';
import udemy from '../assets/icons/udemy.svg';
import cv from '../data/pdfs/cv-miguezdearaujo.pdf';
import certificate from '../assets/icons/certificate.svg';
import certificateCourse1 from '../data/pdfs/certificado-curso-php-y-mysql.pdf';
import certificateCourse2 from '../data/pdfs/certificado-curso-bootsrtap5-html-css-flexbox-sass-git-js.pdf';
import certificateCourse3 from '../data/pdfs/cartificado-curso-nodejs.pdf';

export const Curriculum = () => {
  return (
    <div className='page'>
      <h1 className='title-page'> Curriculum </h1>
      <div className='curriculum-layout'>
        <section className='info'>
          <article className='article-cv'>
            <h2 className='title'> Información </h2>
            <div className='info-text'>
              <p>
                Por razones de
                <span className='color fw-500'> seguridad</span> y <span className='color fw-500'>privacidad</span>,
                he decidido no incluir mis datos personales directamente en esta página web pública.
              </p>
              <a className='download-cv' href={cv} download="cv-miguezdearaujo"> Descarga mi CV</a>
            </div>
          </article>
          <article className='article-cv lang'>
          <h2 className='title'> Idiomas </h2>
          <ul>
            <li className='lang-item'>
              <h3 className='lang-name'> Español </h3>
              <div className='lang-level'>
                <span className='color'> Nivel: </span>
                <p> nativo </p>
              </div>  
            </li>
            <li className='lang-item'>
              <h3 className='lang-name'> Inglés </h3>
              <div className='lang-level'>
                <span className='color'> Nivel: </span>
                <p> intermedio </p>
              </div>  
            </li>
            </ul>
          </article>
          <article className='article-cv exp'>
            <h2 className='title'> Experiencia laboral </h2>
            <ul>
              <li className='exp-item'>
                <p className='exp-dates'> 2019 - 2022 </p>
                <div className='exp-item-info'>
                  <h3 className='exp-place'> Emprendimiento personal </h3>
                  <div className='exp-position'>
                    <span className='color'> Cargo: </span>
                    <p> logística, producción y marketing. </p>
                  </div>
                  <div className='exp-function'>
                    <span className='color'> Función: </span>
                    <p> compra de materia prima, producción y venta. </p>
                  </div>
                </div>
              </li>
            </ul>
          </article>
        </section>
        <section className='education-courses'>
          <article className='article-cv education'>
            <h2 className='title'> Educación </h2>
            <ul>
              <li className='education-item'>
                <p className='education-dates'> 2015 - 2020 </p>
                <div className='education-info'>
                  <h3 className='education-title'> Secundario completo - orientación ciencias naturales </h3>
                  <div className='education-place'>
                    <span> Colegio Nacional Dr. Arturo U. Illia </span>
                  </div>  
                </div>
              </li>
              <div className='line' />
              <li className='education-item'>
                <p className='education-dates'> 2021 - en curso </p>
                <div className='education-info'>
                  <h3 className='education-title'> Tecnicatura Universitaria en Programación </h3>
                  <div className='education-place'>
                    <span> Universidad Tecnológica Nacional - Regional Mar del Plata </span>
                  </div>
                </div>
              </li>
            </ul>
          </article>
          <article className='article-cv courses'>
            <h2 className='title'> Cursos </h2>
            <ul>
              <li className='course-item'>
                <p className='course-dates'> Jun 2022 - Ene 2023 </p>
                <div className='course-info'>
                  <h3 className='course-name'> PHP y MySQL: Convierte cualquier template en una WebAPP </h3>
                  <div className='course-academy-certificate'>
                    <img className='course-academy' src={udemy} alt='udemy' />
                    <a href={certificateCourse1} download='certificado-curso-php-y-mysql'>
                      <img className='certificate' src={certificate} alt='certificate' />
                    </a>
                  </div>
                </div>
              </li>
              <div className='line' />
              <li className='course-item'>
                <p className='course-dates'> Jul 2022 - Feb 2023 </p>
                <div className='course-info'>
                  <h3 className='course-name'> Bootstrap 5 desde cero + HTML, CSS, Flexbox, Sass, GIT, JS! </h3>
                  <div className='course-academy-certificate'>
                    <img className='course-academy' src={udemy} alt='udemy' />
                    <a href={certificateCourse2} download='certificado-curso-bootsrtap5-html-css-flexbox-sass-git-js'>
                      <img className='certificate' src={certificate} alt='certificate' />
                    </a>
                  </div>
                </div>
              </li>
              <div className='line' />
              <li className='course-item'>
                <p className='course-dates'> Abr 2023 - May 2023 </p>
                <div className='course-info'>
                  <h3 className='course-name'> Master en APIs RESTful con NodeJS: Crea 3 backends completos </h3>
                  <div className='course-academy-certificate'>
                    <img className='course-academy' src={udemy} alt='udemy' />
                    <a href={certificateCourse3} download='certificado-curso-nodejs'>
                      <img className='certificate' src={certificate} alt='certificate' />
                    </a>
                  </div>
                </div>
              </li>
              <div className='line' />
              <li className='course-item'>
                <p className='course-dates'> Jul 2023 - en curso </p>
                <div className='course-info'>
                  <h3 className='course-name'> Master en React: Aprende ReactJS, Hooks, MERN, JWT+ </h3>
                  <div className='course-academy-certificate'>
                    <img className='course-academy' src={udemy} alt='udemy'/>
                  </div>
                </div>
              </li>
            </ul>
          </article>
        </section>
      </div>
    </div>
  )
}
