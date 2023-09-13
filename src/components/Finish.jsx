import { useCart } from "react-use-cart";
import "./Finish.css";
import { Navbar } from "./Navbar";
import Modal from "react-bootstrap/Modal";

import { Footer } from "./Footer";
import React, { useState, useEffect } from "react";

import "./AlimentosPage.css";

export const FinishPage = () => {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();

  const [showPreviewModal, setShowPreviewModal] = useState(false);

  const togglePreviewModal = () => {
    setShowPreviewModal(!showPreviewModal);
  };

  const toggleBuy = () => {
    setShowPreviewModal(!showPreviewModal);
    alert("Compra realizada com sucesso");
  };

  return (
    <div>
      <Navbar />
      {/* Portada de la categoría */}

      <div className="finish-container">
        <div className="cards-container">
          {items.map((item) => (
            <div key={item.id} className="product-cart-card">
              <span style={{ fontWeight: "600", color: "gray" }}>
                {item.name}
              </span>
              <span>R$ {item.price}</span>
            </div>
          ))}
        </div>

        <div className="divider"></div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <h3 className="total">
            Total: R${" "}
            {items
              .reduce((total, item) => total + item.price * item.quantity, 0)
              .toFixed(2)}
          </h3>

          <button onClick={togglePreviewModal} className="btn btn-primary">
            Pagar
          </button>
        </div>

        <Modal show={showPreviewModal} onHide={togglePreviewModal}>
          <div className="div-modal">
            <p>Opções de Pagamento</p>

            <div className="card-payment">
              <span>
                Pix{" "}
                <img
                  src="https://devtools.com.br/img/pix/logo-pix-png-icone-520x520.png"
                  alt=""
                  height={30}
                />
              </span>
              <span>
                {items
                  .reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )
                  .toFixed(2)}
              </span>
            </div>

            <div className="card-payment">
              <span>
                Boleto{" "}
                <img
                  src="https://logodownload.org/wp-content/uploads/2019/09/boleto-logo.png"
                  alt=""
                  height={30}
                />
              </span>
              <span>
                12 x{" "}
                {items
                  .reduce(
                    (total, item) => total + (item.price * item.quantity) / 12,
                    0
                  )
                  .toFixed(2)}
              </span>
            </div>

            <button className="btn btn-primary" onClick={toggleBuy}>
              Comprar
            </button>
          </div>
        </Modal>
      </div>
      <Footer />
    </div>
  );
};
