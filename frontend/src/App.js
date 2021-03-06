import {  ChakraProvider, Heading} from "@chakra-ui/react";
import * as React from "react";
import Form from "./Components/Form";
import Header from "./Components/Header";
import Employees from "./Components/Employees";
import UpdateEmp from "./Components/UpdateEmp";
import {BrowserRouter as Router,Switch,Route,Routes} from "react-router-dom";
function App() {
  return (
    <ChakraProvider>
      <Router>
      <Header/>
      <Routes>
      <Route path="/" element={<Employees/>}> </Route>
    <Route path="/Add" element={ <Form />}></Route>
    <Route path="/Update/:id" element={ <UpdateEmp />}></Route>
   
    </Routes>
    </Router>
  </ChakraProvider>
    );
}

export default App;
