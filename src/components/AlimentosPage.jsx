import React, { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { useCart } from "react-use-cart";
import "./AlimentosPage.css";

export const AlimentosPage = () => {
  const [productosBanho, setProductosBanho] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const { addItem } = useCart();

  const togglePreviewModal = (product) => {
    setSelectedProduct(product);
    setShowPreviewModal(!showPreviewModal);
  };

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products")
      .then((response) => response.json())
      .then((data) => {
        if (data.products && Array.isArray(data.products)) {
          // Filtrar los productos por categoría "banho"
          const productosBanho = data.products.filter(
            (producto) => producto.category === "alimento"
          );

          setProductosBanho(productosBanho);
        } else {
          console.error(
            "La respuesta no contiene un arreglo de productos válidos."
          );
        }
      })
      .catch((error) => {
        console.error("Error al obtener productos destacados", error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      {/* Portada de la categoría */}
      <div className="category-cover-alimentos">
        <h2>Alimentos</h2>
        {/* Puedes agregar una imagen de fondo aquí si lo deseas */}
      </div>

      {/* Lista de productos */}
      <div className="destacados-list">
        {productosBanho.map((product) => (
          <div key={product.id} className="destacados-card">
            <Link to={`produtos/${product.category}/${product.name}`}>
              <img
                src={`http://127.0.0.1:8000/storage/${product.image}`} // Usar producto.image en lugar de selectedProduct.image
                alt={product.name}
                onClick={() => togglePreviewModal(product)}
                style={{ height: "190px", width: "230px" }}
              />
            </Link>

            <h3>{product.name}</h3>
            <button onClick={() => togglePreviewModal(product)}>
              Vista prévia
            </button>
          </div>
        ))}
        <Modal show={showPreviewModal} onHide={togglePreviewModal}>
          {selectedProduct && (
            <div className="preview-modal">
              <img
                src={`http://127.0.0.1:8000/storage/${selectedProduct.image}`}
                alt={selectedProduct.name}
                style={{ height: "180px", width: "200px" }}
              />
              <h3>{selectedProduct.name}</h3>
              {selectedProduct.price !== undefined ? (
                <p>Preço: ${selectedProduct.price}</p>
              ) : (
                <p>Precio no disponible</p>
              )}
              <p>
                Quantidade desejada: <input type="number" />
              </p>
              <button
                onClick={() =>
                  addItem({
                    ...selectedProduct,
                    totalPrice: selectedProduct.price,
                  })
                }
              >
                Adicionar ao carrinho
              </button>
            </div>
          )}
        </Modal>
      </div>
      <Footer />
    </div>
  );
};
