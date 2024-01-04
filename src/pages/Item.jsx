import { useParams } from "react-router-dom";
import useItemById from "../hooks/useItemById";
import { ProductCard } from "../components/ProductCard";
import { useContext } from "react";
import CartContext from "../context/cart.context";
import '../components/Item.css';
import { CircularProgress } from '@chakra-ui/react'
import Carousel from 'react-bootstrap/Carousel';


function Item() {
  const params = useParams();
  const { item, isLoading } = useItemById(params.itemId);
  const { addItem } = useContext(CartContext);


  if (isLoading) {
    return <CircularProgress size='120px' thickness='10px' isIndeterminate color='blue.300' />;
  }

  if (!item) return <div>No hay productos con la id: {params.itemId}</div>;

  return (

    <>
      <h1>Producto</h1>
      <div className="detalle" >
        <ProductCard item={item} handleClick={addItem} />
        <div className="detalle-text">
          <h4> {item.description} </h4>
          <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        className="d-flex w-50 h-100"
                        src={item.image1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-flex w-50 h-100"
                        src={item.image2}
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-flex w-50 h-100"
                        src={item.image3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
      </div>
      
    </>

  );
}

export default Item;
