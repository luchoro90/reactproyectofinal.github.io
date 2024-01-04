
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Presentacion from "./pages/Presentacion";
import Layout from "./Layouts/Layout";
import Cart from "./pages/Cart";
import Item from "./pages/Item";
import Category from "./pages/Category";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index path="/" element={<Presentacion />} />
          <Route index path="/home" element={<Home />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/item/:itemId" element={<Item />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
