import React, { useState, useEffect } from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import "./BanhoDetails.css";
import { useParams } from "react-router-dom";
import { useCart } from "react-use-cart";

const BanhoDetails = () => {
  const [productosDestacados, setProductosDestacados] = useState([]);
  const [product, setProduct] = useState(null); // Estado para el producto seleccionado
  const { addItem } = useCart();

  useEffect(() => {
    fetch(
      "https://api-toti-laravel-production-14ae.up.railway.app/api/products"
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.products && Array.isArray(data.products)) {
          setProductosDestacados(data.products);
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

  const params = useParams();

  useEffect(() => {
    // Busca el producto correspondiente a través del parámetro 'name'
    const selectedProduct = productosDestacados.find(
      (product) => product.name === params.name
    );
    setProduct(selectedProduct);
  }, [params.name, productosDestacados]);

  return (
    <div>
      <Navbar />

      <div>
        <h2>Banho</h2>
      </div>

      {product ? ( // Verifica si product está definido
        <div className="product-list">
          <div className="card-details">
            <div className="product-image">
              <div className="image-container">
                <img
                  alt="product-img"
                  className="principal-img"
                  src={`https://api-toti-laravel-production-14ae.up.railway.app/storage/${product.image}`}
                />
              </div>
            </div>
            <div className="product-details">
              <div className="details-container">
                <h2>{product.name}</h2>

                <span className="price">${product.price}</span>
                <p>{product.description}</p>
                <div className="btn-container">
                  <button className="product-btn">Comprar Agora</button>
                  <button
                    className="product-btn"
                    onClick={() =>
                      addItem({
                        ...product,
                        totalPrice: product.price,
                      })
                    }
                  >
                    Adicionar ao carrinho
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Producto no encontrado</p>
      )}

      <Footer />
    </div>
  );
};

export default BanhoDetails;
