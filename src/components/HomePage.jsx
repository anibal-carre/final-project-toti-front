import React from 'react';
import { Navbar } from "./Navbar";
import { Footer } from './Footer';
import { DestacadosSection } from './DestacadosSection';
import { Slideshow } from "./Slideshow";
import { Novedades } from './Novedades';
import { Col, Image } from 'react-bootstrap'; // Importa los componentes Col e Image de react-bootstrap

export const HomePage = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="slideshow-container">
        <Slideshow />
      </div>
      <div>
        <h1 className="main-title">Bem-vindo ao DOGWOAH</h1>
        <p className="title">Mais do que uma loja onde você encontra seus produtos preferidos, você tem uma casa que mima seus cachorrinhos.</p>
      </div>
      <div className='container'>
        {/* Aquí puedes agregar tus imágenes circulares */}
        <div className="row">
          <Col xs={6} md={4}>
            <Image src="https://static.wixstatic.com/media/125d4b_b64ca3ff9e6046e9aba62b61a1c45470~mv2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/125d4b_b64ca3ff9e6046e9aba62b61a1c45470~mv2.jpg" roundedCircle />
          </Col>
          <Col xs={6} md={4}>
            <Image src="https://static.wixstatic.com/media/125d4b_c9b01c199ec542a9af2f9309eabe677e~mv2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/125d4b_c9b01c199ec542a9af2f9309eabe677e~mv2.jpg" roundedCircle />
          </Col>
          <Col xs={6} md={4}>
            <Image src="https://static.wixstatic.com/media/125d4b_d2712fac9fae4b14bb5d0874e5717736~mv2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/125d4b_d2712fac9fae4b14bb5d0874e5717736~mv2.jpg" roundedCircle />
          </Col>
        </div>
      </div>
      <div className="content">
        <DestacadosSection />
      </div>
      <div>
        <Novedades />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
