import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


 function Employee() {
  const paperStyle = {padding : '50px 20px',width:600,margin:"20px auto"};
  const [employee, setemployee] = useState({
    name: "",
    address: ""
  });
  const [employees, setEmployees] = useState([])

  function handle(e){
    const newEmployee = {...employee}
    newEmployee[e.target.id]=e.target.value
    setemployee(newEmployee)
  }
  const onSubmit=(e)=>{ 
    e.preventDefault();
   console.log(employee)
   fetch("http://localhost:8080/employee/add",{
      method: "POST",
      headers: {"Content-type":"application/json"},
      body:JSON.stringify(employee)
  }).then(()=>{console.log("success")})}

  useEffect(() => {
    const getEmloyees = async () => {
      const employeesFromServer = await fetchemployees();
      setEmployees(employeesFromServer);
    };
    getEmloyees();
  }, []);
  const fetchemployees = async () => {
    const res = await fetch("http://localhost:8080/employee/getAll");
    const data = await res.json();
    return data;
  };
  

  return (
    <Box sx={{ '& > :not(style)': { m: 1 }}} >
      <Container  >
        <Paper elevation={3} style = {paperStyle} >
          
          <h1 style={{ color: "blue"}} > Add Employee</h1>
        <form >
      <Box sx={{ display: 'flex', alignItems: 'flex-end'}} >
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField 
        id="name"
        value={employee.name}
        onChange={(e)=>handle(e)} 
        label="name" 
        variant="standard" fullWidth/>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <DriveFileRenameOutlineIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField 
        id="address"
        onChange={(e)=>handle(e)} 
        value={employee.address} 
        label="address"
        variant="standard" 
        fullWidth/>
      </Box>
      <Button style={{ margin: "20px" } } onClick={onSubmit} endIcon={<SendIcon />}> Send </Button>
</form>
      </Paper>
      <Paper elevation={3} style = {paperStyle} >
        {employees.map(employee =>(
          <Paper elevation={6} style={{ margin:"10px" , padding:"15px",textAlign:"left"}} key={employee.id}>
            Id: {employee.id} <br/>
            Name: {employee.name}<br/> 
            Address: {employee.address}
          </Paper>
        ))}
      </Paper>
      </Container>
    </Box>
  );
}

export default Employee;