import './ProductCard.css';
import { useToast } from "@chakra-ui/react";
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Image,
  Text,
  Input,
  InputGroup,
  InputLeftAddon,

} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";


export const ProductCard = ({ item, handleClick }) => {
  const navigation = useNavigate();
  const [toastMessage, setToastMessage] = useState("");
  const toast = useToast();
  const [quantity, setQuantity] = useState(1);


  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (newQuantity > item.stock) {
      setToastMessage("Cantidad superior al stock");
      toast({
        title: "Error",
        description: "Cantidad superior al stock",
        status: "error",
        duration: 2000,
        isClosable: true,
      });

    } else {
      setQuantity(newQuantity);
    }
  };


  return (
    <Card className="cardTarget" maxW="xs">
      <CardBody >
        <Image
          alignItems='center'
          src={item.image}
          alt="Ofimueble"
          borderRadius="lg"
          w={"auto"}
          h={"250px"}
        />
        <Stack alignItems='center' mt="6" spacing="2">
          <Heading color="blue.400" size="md">{item.title}</Heading>
          <Text color="blue.400" fontSize="2xl">
            ${item.price}
          </Text>
          <Text color="blackAlpha.700" fontSize="sm">
            Stock:
            {item.stock}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <InputGroup >
        <InputLeftAddon className='inputCant' w='80px' children='Cantidad' />
        <Input
          w='55px'
          type='number'
          placeholder=''
          variant='outline'
          value={quantity}
          onChange={handleQuantityChange}
          min={1}
          max={item.stock} />
      </InputGroup>
      <CardFooter>

        <ButtonGroup spacing="2">
          <Button
            variant="solid"
            colorScheme="red"
            onClick={() => handleClick(item, quantity)}
            isDisabled={quantity > item.stock}
          >

            Agregar al carrito
          </Button>
          <Button
            variant="solid"
            colorScheme="blue"
            onClick={() => navigation(`/item/${item.id}`)}
          >
            Detalle
          </Button>
        </ButtonGroup>

      </CardFooter>
    </Card>
  );
};

