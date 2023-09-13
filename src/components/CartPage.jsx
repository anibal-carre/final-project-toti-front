import { useCart } from "react-use-cart";
import "./CartPage.css";
import { Navbar } from "./Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import { Footer } from "./Footer";

export const CartPage = () => {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();

  return (
    <div>
      <Navbar />
      {/* Portada de la categoría */}
      <div className="cart-container">
        {items.length === 0 ? (
          <p className="empty-cart">El carrito de compras está vacío.</p>
        ) : (
          <ul>
            <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
            {items.map((item) => (
              <li className="cart-item" key={item.id}>
                <span className="text-cart">
                  {item.quantity} x {item.name} - {item.price * item.quantity}
                </span>
                <div>
                  <button
                    style={{
                      marginLeft: "5px",
                      fontSize: "15px",
                      padding: "6px 12px",
                    }}
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <button
                    style={{
                      marginLeft: "5px",
                      fontSize: "15px",
                      padding: "6px 12px",
                    }}
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                  <button
                    style={{
                      marginLeft: "5px",
                      fontSize: "15px",
                      padding: "6px 12px",
                    }}
                    onClick={() => removeItem(item.id)}
                  >
                    x
                  </button>
                </div>
              </li>
            ))}
            <p className="cart-total">
              Total: R${" "}
              {items
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toFixed(2)}
            </p>
            <div className="links-div">
              <a href="/" className="continue-shopping">
                Continuar Comprando
              </a>
              <a href="/finish" className="continue-shopping">
                Finalizar compra
              </a>
            </div>
          </ul>
        )}
      </div>
      <Footer />
    </div>
  );
};
