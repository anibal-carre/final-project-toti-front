import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { BanhoPage } from "./components/BanhoPage";
import { Contact } from "./components/Contact";
import { ShippingForm } from "./components/ShippingForm";
import { CartPage } from "./components/CartPage";
import { AlimentosPage } from "./components/AlimentosPage";
import { BrinquedosPage } from "./components/BrinquedosPage";
import BanhoDetails from "./components/details/BanhoDetails";
import AlimentosDetails from "./components/details/AlimentosDetails";
import BrinquedosDetails from "./components/details/BrinquedosDetails";
import { AdminProducts } from "./components/admin/produtcs/AdminProducts";
import { CartProvider, useCart } from "react-use-cart";
import { Productos } from "./components/Produtos";
import { FinishPage } from "./components/Finish";

export function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/envios" element={<ShippingForm />} />
            <Route exact path="/cart" element={<CartPage />} />

            <Route
              exact
              path="/produtos/alimento"
              element={<AlimentosPage />}
            />
            <Route
              exact
              path="/produtos/brinquedo"
              element={<BrinquedosPage />}
            />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/produtos/banho" element={<BanhoPage />} />
            <Route path="/produtos/banho/:name" element={<BanhoDetails />} />
            <Route
              path="/produtos/alimento/:name"
              element={<AlimentosDetails />}
            />
            <Route
              path="/produtos/brinquedo/:name"
              element={<BrinquedosDetails />}
            />

            <Route
              exact
              path="/admin/productlist"
              element={<AdminProducts />}
            />
            <Route exact path="/produtos" element={<Productos />} />
            <Route exact path="/finish" element={<FinishPage />} />
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
