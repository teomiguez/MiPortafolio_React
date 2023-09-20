import React from 'react';
import photo from '../assets/photo.jpg';
import location from '../assets/icons/location.svg';

export const Home = () => {
  return (
    <div className='page home'>
      <img id="photo" src={photo} alt="mi-foto" />
      <div className='my-data'>
        <h1> Teo Miguez De Araujo </h1>
        <div className='location'>
          <img src={location} alt="mi-ubicacion" width="100px" height="100px" />
          <h3> Mar del Palata, Argentina </h3>
        </div>
      </div>
    </div>
  )
}
