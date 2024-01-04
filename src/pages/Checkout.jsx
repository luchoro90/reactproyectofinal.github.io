import { Flex, useToast } from "@chakra-ui/react";
import CartSummaryTable from "../components/CartSummaryTable";
import { useContext } from "react";
import CartContext from "../context/cart.context";
import useForm from "../hooks/useForm";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import BuyerForm from "../components/BuyerForm";
import '../components/CartSummaryTable'


function Checkout() {
  const { cart } = useContext(CartContext);
  const toast = useToast();

  const [values, handleChange] = useForm({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    email2: "",
  });


  if (cart.items.length === 0) return <div className="carrito-vacio"><h3>El carrito está vacío</h3></div>;

  const onSubmit = (e) => {
    e.preventDefault();

    for (const key in values) {
      if (values[key] === "") {
        toast({
          title: "Error",
          description: "Todos los campos son obligatorios",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        return;
      }
    }

    if (values.email !== values.email2) {
      toast({
        title: "Error",
        description: "Los emails no coinciden",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    sendOrder();
  };

  const sendOrder = () => {
    const db = getFirestore();

    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, {
      ...cart,
      buyer: {
        name: values.name,
        lastName: values.lastName,
        phone: values.phone,
        email: values.email,
      },
      date: new Date(),
    }).then(({ id }) => {
      toast({
        title: "Orden enviada",
        description: `El id de la orden es: ${id}`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    });
  };

  return (
    <Flex flexDir={"column"} justifyContent={"space-between"} gap={5}>
      <Flex flexDir={"column"}>
        <h1  id="titulo-checkout">Resumen del carrito</h1>
        <CartSummaryTable cart={cart} />
      </Flex>
      <Flex flexDir={"column"}>
        <h1 id="titulo-checkout">Formulario de compra</h1>
        <BuyerForm
          onSubmit={onSubmit}
          values={values}
          handleChange={handleChange}
        />
      </Flex>
    </Flex>
  );
}

export default Checkout;
