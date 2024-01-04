import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CartProvider from "./context/cart.provider.jsx";
import { ChakraProvider } from "@chakra-ui/react";


ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ChakraProvider>
);
