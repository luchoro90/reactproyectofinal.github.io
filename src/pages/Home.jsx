import { Wrap, WrapItem } from "@chakra-ui/react";
import { ProductCard } from "../components/ProductCard";
import useItems from "../hooks/useItems";
import { useContext } from "react";
import CartContext from "../context/cart.context";
import { CircularProgress } from '@chakra-ui/react';
import '../components/Home.css';

const Home = () => {
  const { items, isLoading } = useItems();
  const { addItem } = useContext(CartContext);

  if (isLoading) {
    return <CircularProgress size='100px' thickness='10px' isIndeterminate color='blue.300' />;
  }

  return (
    <div id="home">
      <Wrap px="15" spacing="50px">
        {items.map((item) => (
          <WrapItem key={item.id}>
            <ProductCard item={item} handleClick={addItem} />
          </WrapItem>
        ))}
      </Wrap>
    </div>
  );
};

export default Home;
