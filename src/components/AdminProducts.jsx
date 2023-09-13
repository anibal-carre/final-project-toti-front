// AddProductModal.js
// AddProductModal.js
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { ProductForm } from './ProductForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons'; // Importa el icono de la patita de cachorro

export const AddProductModal = ({ show, onHide, onSubmit }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ProductForm onSubmit={onSubmit} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cerrar
        </Button>
        {/* Botón con el icono de la patita de cachorro */}
        <Button variant="primary" onClick={onSubmit}>
          <FontAwesomeIcon icon={faPaw} /> Agregar Producto
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

