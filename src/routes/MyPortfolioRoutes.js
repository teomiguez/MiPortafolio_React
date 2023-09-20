import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { Home } from '../components/Home';
import { Curriculum } from '../components/Curriculum';
import { AboutMe } from '../components/AboutMe';
import { Skills } from '../components/Skills';
import { Proyects } from '../components/Proyects';
import { ContactAndNetworks } from '../components/ContactAndNetworks';
import { Error } from '../components/Error';
import { HeaderNav } from '../components/layout/HeaderNav';
import { Footer } from '../components/layout/Footer';

export const MyPortfolioRoutes = () => {
  return (
    <BrowserRouter>
       {/* HEADER - NAV */}
       <HeaderNav />
                
       {/* MAIN */}
       <section className='content'>
              <Routes>
                     <Route path="/"
                            className={({ isActive }) => isActive ? "active" : ""}
                            element={<Navigate to="/home" />} />
                     <Route path="/home"
                            className={({ isActive }) => isActive ? "active" : ""}
                            element={<Home />} />
                     <Route path="/about-me"
                            className={({ isActive }) => isActive ? "active" : ""}
                            element={<AboutMe />} />
                     <Route path="/skills"
                            className={({ isActive }) => isActive ? "active" : ""}
                            element={<Skills />} />
                     <Route path="/proyects"
                            className={({ isActive }) => isActive ? "active" : ""}
                            element={<Proyects />} />
                     <Route path="/curriculum"
                            className={({ isActive }) => isActive ? "active" : ""}
                            element={<Curriculum />} />
                     <Route path="/contact-and-networks"
                            className={({ isActive }) => isActive ? "active" : ""}
                            element={<ContactAndNetworks />} />
                     <Route path="/*"
                            element={<Error />} />
              </Routes>                
       </section>
         
       {/* FOOTER */}
       <Footer />
    </BrowserRouter>
  )
}
