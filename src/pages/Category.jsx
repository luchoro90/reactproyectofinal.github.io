import { useParams } from "react-router-dom";
import useItemsByCategory from "../hooks/useItemsByCategory";
import { ProductCard } from "../components/ProductCard";
import { Flex, Wrap, WrapItem } from "@chakra-ui/react";
import { useContext } from "react";
import CartContext from "../context/cart.context";
import { CircularProgress } from '@chakra-ui/react';
import '../components/Home.css';

function Category() {
  const params = useParams();
  const { items, isLoading } = useItemsByCategory(params.categoryName);
  const { addItem } = useContext(CartContext);

  if (isLoading) {
    return <CircularProgress size='120px' thickness='10px' isIndeterminate color='blue.300' />;
  }

  if (items.length === 0)
    return <div>No hay productos con la categoría: {params.categoryName}</div>;
  return (
    <Flex flexDir={"column"} gap="3">
      <h1>Categoría: {params.categoryName}</h1>
      <Wrap spacing={"30px"}>
        {items.map((item) => (
          <WrapItem key={item.id}>
            <ProductCard item={item} handleClick={addItem} />
          </WrapItem>
        ))}
      </Wrap>
    </Flex>
  );
}

export default Category;
