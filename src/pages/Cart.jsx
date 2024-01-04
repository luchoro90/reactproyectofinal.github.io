import { useContext } from "react";
import CartContext from "../context/cart.context";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import CartSummaryTable from "../components/CartSummaryTable";

function Cart() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  if (cart.items.length === 0) return <Text>El carrito está vacío</Text>;

  return (
    <Flex flexDir={"column"}>
      <h1>TU COMPRA</h1>
      <CartSummaryTable cart={cart} />
      <div align='center'>
        <Button w="190px" alignItems="center" colorScheme='blue' onClick={() => navigate("/checkout")}>Finalizar Compra</Button>
      </div>
    </Flex>
  );
}

export default Cart;
