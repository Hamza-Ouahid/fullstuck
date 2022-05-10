import {  ChakraProvider, Heading} from "@chakra-ui/react";
import * as React from "react";
import Form from "./Components/Form";
function App() {
  return (
    <ChakraProvider>
    <Heading as="h1" size="xl" textAlign="center">
      Welcom to the app
    </Heading>
    <Form />
  </ChakraProvider>
    );
}

export default App;
