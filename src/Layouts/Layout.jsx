import { Box } from "@chakra-ui/react";
import CartWidget from "../components/CartWidget";
import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import './Layout.css';

function Layout({ children }) {
  const location = useLocation();
  return (
    <>
      <div className="page-container">
        <div className="content-wrap">
          <NavBar />
          <div>
            <Box marginLeft={"auto"}>
              {location.pathname !== "/cart"  && <CartWidget />}
            </Box>
          </div>
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
