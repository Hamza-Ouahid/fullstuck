import * as React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from '@chakra-ui/react'
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    const getEmployees = async () => {
      const employeesFromServer = await fetchEmployees();
     
      setEmployees(employeesFromServer);
      
    };
    getEmployees();
  }, []);
  
  const fetchEmployees = async () => {
    const res = await fetch("http://localhost:8080/employee/getAll");
    const data = await res.json();
    return data;
    
  };

  console.log(employees);



  return (
    <TableContainer>
    <Table variant='striped' colorScheme='gray'>
      <TableCaption>List of Employees</TableCaption>
      <Thead>
        <Tr>
          <Th>Id</Th>
          <Th>First Name</Th>
          <Th>Last Name</Th>
          <Th>Integration Date</Th>
          <Th>Registration Number</Th>
          <Th>Bunsiness Unite</Th>
          <Th>Phone Number</Th>
          <Th>Position</Th>
          <Th>Responsible</Th>
        </Tr>
      </Thead>
       <Tbody>
      {employees.map((employee)=>{
        return(
         <Tr key ={employee.id}>
        <Td>{employee.id}</Td>
         <Td>{employee.first_name}</Td>
         <Td>{employee.last_name}</Td>
         <Td>{employee.intigration_date}</Td>
         <Td>{employee.registration_number}</Td>
         <Td>{employee.business_unit}</Td>
         <Td>{employee.phone_number}</Td>
         <Td>{employee.position}</Td>
         <Td>{employee.responsible}</Td>
         <Td ><Link to={"Update/"+employee.id}><Button >Update</Button></Link></Td>
       </Tr>
        )

      })}
      
       
      </Tbody>
    </Table>
  </TableContainer>
  )
}
