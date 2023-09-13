import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import './ShippingForm.css';

export const ShippingForm = () => {
  return (
    <section className="shipping-section">
      <Navbar />
      <div className="shipping-header">
        <h1 className="shipping-title">
          Descubra como nossos produtos podem chegar até você
        </h1>
      </div>

      <div className="shipping-cards">
        <div className="shipping-card">
          <h2>Woah Express</h2>
          <p>
            O jeito mais rápido de receber seus produtos. Entrega expressa
            dentro da cidade e em tudo lugar do pais.
          </p>
          
          <div className="shipping-icon">
           

            <p><FontAwesomeIcon icon={faTruck} /> Frete Grátis</p> 
          </div>
        </div>

        <div className="shipping-card">
          <h2>Woah Fácil</h2>
          <p>
            Entregas simples e econômicas em todo o Brasil. Coleta agendada e
            fácil de usar. Não espere mais!
          </p>
          <div className="shipping-icon">
          <p><FontAwesomeIcon icon={faTruck} /> Frete Grátis</p> 
          </div>
        </div>

        <div className="shipping-card">
          <h2>Woah Envios</h2>
          <p>
            Solução profissional para e-commerces. Envios recorrentes para todo
            o Brasil com integração.
          </p>
          <div className="shipping-icon">
          <p><FontAwesomeIcon icon={faTruck} /> Frete Grátis</p>
          </div>
        </div>

      </div>

      <div className="shipping-message">
        <h3>O jeito mais prático do seu pacote chegar em todo o Brasil!</h3>
        <p>
          Somos a maior empresa privada de logística do Brasil que, por meio da
          tecnologia, entrega soluções de ponta a ponta para que pessoas e
          negócios possam receber pacotes por todo o país, com
          segurança e conveniência.
        </p>
        <p>
          Estamos presentes em todas as capitais brasileiras, com o apoio de
          dezenas de agências e 10 centros de distribuição próprios, além de
          mais de 400 parceiros.
        </p>
      </div>

      <Footer />
    </section>
  );
};
