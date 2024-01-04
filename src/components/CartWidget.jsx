import { useContext } from "react";
import CartContext from "../context/cart.context";
import { Button, Flex, Spacer } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import './Cartwidget.css'


const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <>
    <Flex className="cartwidget" alignItems='center' gap="20">
      <Spacer />
      <Flex gap="10" flexDir={"row"}>
        <span className="span">
          Elementos en el carrito:{" "}
          {cart.items.reduce((acc, curr) => acc + curr.quantity, 0)}
        </span>
        <span className="span">Total: ${cart.total}</span>
      </Flex>
      <Button classname="botonCarrito" mr="2" variant="outline" colorScheme='blue' onClick={() => navigate("/cart")}>Ver carrito</Button>
    </Flex>
    <div className='slashRgb'></div>
    </>
  );
};
export default CartWidget;
