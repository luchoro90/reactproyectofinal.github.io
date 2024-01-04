import React, { useContext } from "react";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Button,
  Tfoot,
} from "@chakra-ui/react";
import './CartSummaryTable.css'
import CartContext from "../context/cart.context";


function CartSummaryTable({ }) {
  const { cart, removeItem } = useContext(CartContext);
  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };
  return (
    <>
    <div className="table">
      
      <TableContainer size="sm">
        <Table size="sm" variant="striped">
          <Thead >
            <Tr >
              <Th id="Th" textAlign="center" >Producto</Th>
              <Th id="Th" textAlign="center" >Nombre</Th>
              <Th textAlign="center">Cantidad</Th>
              <Th textAlign="center">Precio Unitario</Th>
              <Th textAlign="center">Precio total</Th>
              <Th textAlign="center">Accion</Th>
            </Tr>
          </Thead>
          <Tbody >
            {cart.items.map(({ item, quantity }) => (
              <Tr textAlign="center" key={item.id}>
                <Td textAlign="center"><img className="img-cart" src={item.image} alt={item.title} /></Td>
                <Td textAlign="center">{item.title}</Td>
                <Td textAlign="center">{quantity}</Td>
                <Td textAlign="center">${item.price}</Td>
                <Td textAlign="center">${item.price * quantity}</Td>
                <Button id="button-eliminar" colorScheme="blue" onClick={() => handleRemoveItem(item.id)}> Eliminar </Button>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
    </>
  );
}

export default CartSummaryTable;
