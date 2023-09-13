
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import React, { useState } from 'react';
import './Contact.css'; 

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario, por ahora, simplemente marcamos que se ha enviado.
    setFormSubmitted(true);
  };

  return (
    <div className="contact-page">
      <Navbar />
      <div className="contact-container">
        <h2>Contato</h2>
        <p>Estamos aqui para ajudá-lo! Você pode entrar em contato conosco das seguintes maneiras:</p>

        <h3>Informação de contato:</h3>
        <ul>
          <li>Teléfono: +1 123-456-7890</li>
          <li>Email: info@example.com</li>
          <li>Endereço: Rua Principal, 123, Cidade-sp</li>
        </ul>

        <h3>Horário de atenção:</h3>
        <p>Nossa equipe está disponível de segunda a sexta, das 9h00 às 17h00. às 17h00</p>

        <div className="contact-form">
          <h3>Seria ótimo saber sua opinião.
                Envie-nos uma mensagem</h3>
          {formSubmitted && (
            <div className="success-message">
              Obrigado pela sua mensagem. Entraremos em contato em breve.
            </div>
          )}
          {!formSubmitted && (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensagem:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
              Enviar mensagem
              </button>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};



