import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";
import "./AdminNav.css";

// Importa el componente de autenticación
import { SearchModal } from "../../SearchModal";
import { Auth } from "../../Auth";

export const AdminNavbar = () => {
  const navigate = useNavigate();
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showCategoriesMenu, setShowCategoriesMenu] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false); // Controla la visibilidad del modal de inicio de sesión

  const toggleSearchModal = () => {
    setShowSearchModal(!showSearchModal);
  };

  const toggleCartModal = () => {
    navigate("/cart");
  };

  const toggleCategoriesMenu = () => {
    setShowCategoriesMenu(!showCategoriesMenu);
  };

  const toggleAuthModal = () => {
    setShowAuthModal(!showAuthModal); // Abre o cierra el modal de inicio de sesión
  };

  const yourSearchFunction = () => {
    console.log("Realizando búsqueda...");
    toggleSearchModal();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <span className="logo">DogWoah</span>
        </Link>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/productlist">
              Admin
            </Link>
          </li>
          <li className="nav-item">
            <span className="nav-link" onClick={toggleCategoriesMenu}>
              Produtos
              <ul
                className={`categories-menu ${
                  showCategoriesMenu ? "show" : ""
                }`}
              >
                <li className="baño-li">
                  <Link to="ProductList">Lista de Produtos</Link>
                </li>
                <li className="baño-li">
                  <Link to="/produtos/banho">Banho</Link>
                </li>
                <li className="comida-li">
                  <Link to="/produtos/alimento">Alimentos</Link>
                </li>
                <li className="juegos-li">
                  <Link to="/produtos/brinquedo">Brinquedos</Link>
                </li>
              </ul>
            </span>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contato
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/envios">
              Envíos
            </Link>
          </li>
          <li className="nav-item">
            <div className="search-icon" onClick={toggleSearchModal}>
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </li>
          <li className="nav-item">
            <div className="cart-icon" onClick={toggleCartModal}>
              <FontAwesomeIcon icon={faShoppingCart} />
            </div>
          </li>
          <li className="nav-item">
            <div className="auth-icon" onClick={toggleAuthModal}>
              <FontAwesomeIcon icon={faUser} />
            </div>
          </li>
        </ul>
      </div>
      <Modal show={showSearchModal} onHide={toggleSearchModal}>
        <SearchModal
          toggleModal={toggleSearchModal}
          searchFunction={yourSearchFunction}
        />
      </Modal>
      <Modal show={showAuthModal} onHide={toggleAuthModal}>
        <Auth /> {/* Agrega tu componente de inicio de sesión aquí */}
      </Modal>
        
    </nav>
  );
};
