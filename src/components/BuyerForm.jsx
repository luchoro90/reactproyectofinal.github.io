import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import './BuyerForm.css'

function BuyerForm({ onSubmit, values, handleChange }) {
  return (
    <div id="form">
      <form onSubmit={onSubmit}>
        <FormControl isRequired >
          <FormLabel  >Nombre</FormLabel>
          <Input
            value={values.name}
            name="name"
            type="text"
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isRequired >
          <FormLabel>Apellido</FormLabel>
          <Input
            value={values.lastName}
            name="lastName"
            type="text"
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isRequired >
          <FormLabel>Teléfono</FormLabel>
          <Input
            value={values.phone}
            name="phone"
            type="text"
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isRequired >
          <FormLabel>Email</FormLabel>
          <Input
            value={values.email}
            name="email"
            type="email"
            onChange={handleChange}
          />
        </FormControl>
        <FormControl w="290px" isRequired >
          <FormLabel>Repita email por favor</FormLabel>
          <Input
            value={values.email2}
            name="email2"
            type="email"
            onChange={handleChange}
          />
        </FormControl>
        <div className="button">
          <Button w="150px" alignItems="center" colorScheme='blue' type="submit">
            Comprar
          </Button>
        </div>
      </form>
    </div>
  );
}

export default BuyerForm;
