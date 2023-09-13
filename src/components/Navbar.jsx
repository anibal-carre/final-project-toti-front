import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";
import "./nav.css";
import { SearchModal } from "./SearchModal";
import { Auth } from "./Auth"; // Importa el componente de autenticación
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useCart } from "react-use-cart";

export const Navbar = () => {
  const navigate = useNavigate();
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showCategoriesMenu, setShowCategoriesMenu] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false); // Controla la visibilidad del modal de inicio de sesión
  const { totalUniqueItems } = useCart();

  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);

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

  const handleLogout = async () => {
    try {
      const confirmLogout = window.confirm(
        "¿Estás seguro de que deseas cerrar sesión?"
      );

      if (confirmLogout) {
        setIsLoading(true);
        await signOut(auth);
        setShowAuthModal(false);
        navigate("/");
      }
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const adminUserIds = [
    "u1eBSrG3padEmsMnfrkuV0o9MmX2",
    "kT1vMgwwiPdJLDXFN8nFvrausKw2",
  ]; // Agrega los IDs de los usuarios administradores aquí

  const fetchUserData = () => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{ display: "flex", flexDirection: "column", width: "100%" }}
    >
      <div
        className="navbar-icons"
        style={{ display: "flex", width: "100%", justifyContent: "flex-end" }}
      >
        <div className="search-icon" onClick={toggleSearchModal}>
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className="cart-icon" onClick={toggleCartModal}>
          <FontAwesomeIcon icon={faShoppingCart} />
          <span style={{ fontSize: "16px" }}>{totalUniqueItems}</span>
        </div>
        {user ? (
          <Dropdown show={showAuthModal} onToggle={toggleAuthModal}>
            <Dropdown.Toggle as="div" className="auth-icon">
              <FontAwesomeIcon icon={faUser} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={handleLogout}>
                Cerrar Sesión
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <div className="auth-icon" onClick={toggleAuthModal}>
            <FontAwesomeIcon icon={faUser} />
          </div>
        )}
      </div>
      <div style={{ width: "100%" }}>
        <div
          className="container"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link className="navbar-brand" to="/">
            <span className="logo">DogWoah</span>
          </Link>
          <ul className="navbar-nav ml-auto">
            {user &&
              adminUserIds.includes(user.uid) && ( // Mostrar solo para usuarios administradores
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/productlist">
                    Administrador
                  </Link>
                </li>
              )}
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Dropdown
                show={showCategoriesMenu}
                onToggle={toggleCategoriesMenu}
              >
                <Dropdown.Toggle as="span" className="nav-link">
                  <Link style={{ textDecoration: "none" }} to="/produtos">
                    Productos
                  </Link>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item className="nav-link">
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/produtos/banho"
                    >
                      Baño
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item className="nav-link">
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/produtos/alimento"
                    >
                      Alimentos
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item className="nav-link">
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/produtos/brinquedo"
                    >
                      Brinquedos
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
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
          </ul>
        </div>
      </div>
      <Modal show={showSearchModal} onHide={toggleSearchModal}>
        <SearchModal
          toggleModal={toggleSearchModal}
          searchFunction={yourSearchFunction}
        />
      </Modal>
      <Modal show={showAuthModal} onHide={toggleAuthModal}>
        <Auth />
      </Modal>
    </nav>
  );
};
