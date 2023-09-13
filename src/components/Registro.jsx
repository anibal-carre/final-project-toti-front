import { Navbar } from './Navbar';
import { Footer } from './Footer';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { AddProductModal } from './AddProductModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { auth } from '../firebase';

export const Registro = () => {
  const [showModal, setShowModal] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userAuthenticated, setUserAuthenticated] = useState(false);

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      if (user.uid === "u1eBSrG3padEmsMnfrkuV0o9MmX2" || user.uid === "kT1vMgwwiPdJLDXFN8nFvrausKw2") {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
      setUserAuthenticated(true);
    } else {
      setIsAdmin(false);
      setUserAuthenticated(false);
    }
  }, []);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddProduct = (formData) => {
    // Aquí puedes enviar los datos del formulario al servidor o realizar otras acciones necesarias
    console.log('Producto agregado:', formData);
    handleCloseModal();
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h2>Aquí encontrarás el listado completo de tus productos favoritos</h2>

        {/* Botón de "Agregar Producto" con icono de patita de cachorro */}
        {userAuthenticated && isAdmin && (
          <Button id="agregar-producto-btn" variant="primary" onClick={handleShowModal}>
            <FontAwesomeIcon icon={faPaw} /> Agregar Producto
          </Button>
        )}

        {/* Resto de tu componente de lista de productos */}
        <AddProductModal show={showModal} onHide={handleCloseModal} onSubmit={handleAddProduct} />
      </div>
      <Footer />
    </div>
  );
};
