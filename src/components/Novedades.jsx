import React from 'react';
import './Novedades.css';



export const Novedades = () => {
    return (
      <div className="novedades">
        <h2>Não perca nossas novidades!</h2>
        <p>Inscreva-se para receber as últimas atualizações e novidades.</p>
        <div className="subscribe-container">
          <input type="email" placeholder="Ingresa tu correo electrónico" className="subscribe-input" />
          <button className="subscribe-button">Suscríbete</button>
        </div>
      </div>
    );
  };






