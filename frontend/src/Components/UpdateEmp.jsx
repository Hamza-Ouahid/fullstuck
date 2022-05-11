import { Box,Text, ButtonGroup, Radio } from "@chakra-ui/react";
import { Formik } from "formik";
import {
  InputControl,
  NumberInputControl,
  PercentComplete,
  RadioGroupControl,
  ResetButton,
  SubmitButton
} from "formik-chakra-ui";
import * as React from "react";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";

const UpdateEmp = () => {

const [employee, setemployee] = useState(undefined);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


const initialValues = {
first_name: "",
last_name: "",
address : "",
intigration_date:"",
birth_day:"",
registration_number: "",
business_unit: "",
ssn: "",
phone_number: "",
position: "",
};
const validationSchema = Yup.object({
    first_name: Yup.string().required(),
    last_name: Yup.string().required(),
    address: Yup.string().required(),
    intigration_date: Yup.date().required(),
    birth_day: Yup.date().required(),
    registration_number: Yup.number().required().positive().integer(),
    business_unit: Yup.string().required(),
    ssn: Yup.number().required().positive().integer(),
    phone_number: Yup.number().required().positive().integer(),
    position: Yup.string().required(),
});

   
    const onSubmit = (values) => {
        
         fetch("http://localhost:8080/employee/add",{
            method: "POST",
            headers: {"Content-type":"application/json"},
            body:JSON.stringify(values)
        }).then(()=>{console.log("success")}) ;
      };
      
    
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, values, errors ,setFieldValue }) => (
        <Box
          borderWidth="1px"
          rounded="lg"
          shadow="1px 1px 3px rgba(0,0,0,0.3)"
          maxWidth={800}
          p={6}
          m="10px auto"
          as="form"
          onSubmit={handleSubmit}
        >
          <InputControl name="first_name" label="First Name" />
          <InputControl name="last_name" label="Last Name" />
        <InputControl name="address" label="Address" />
         <Text>Birth day</Text>
         <Box borderWidth="1px"rounded="lg" shadow="1px 1px 3px rgba(0,0,0,0.3)">
         <DatePicker 
                    
                     borderWidth="1px"
                      selected={values.intigration_date}
                      dateFormat="MMMM d, yyyy"
                      className="form-control"
                      name="intigration_date"
                      onChange={date => setFieldValue('intigration_date', date)}
         />
        </Box>
          <Text>Intigration date</Text>
          <Box
          borderWidth="1px"
          rounded="lg"
          shadow="1px 1px 3px rgba(0,0,0,0.3)">
          <DatePicker borderWidth="1px"
                      selected={values.birth_day}
                      dateFormat="MMMM d, yyyy"
                      className="form-control"
                      name="birth_day"
                      onChange={date => setFieldValue('birth_day', date)}
                    />
        </Box>
          <RadioGroupControl name="gender" label="gender">
            <Radio value="Male">Male</Radio>
            <Radio value="Female">Female</Radio>
          </RadioGroupControl>
          <NumberInputControl name="registration_number" label="registration number" />
          <InputControl name="business_unit" label="Business unit" />
          <NumberInputControl name="ssn" label="Social Security Number" />
          <NumberInputControl name="phone_number" label="Phone Number" />
          <InputControl name="position" label="Position" />

          <PercentComplete />
          <ButtonGroup>
            <SubmitButton>Submit</SubmitButton>
            <ResetButton>Reset</ResetButton>
          </ButtonGroup>

          <Box as="pre" marginY={10}>
            {JSON.stringify(values, null, 2)}
            <br />
            {JSON.stringify(errors, null, 2)}
          </Box>
        </Box>
      )}
    </Formik>
  );
};

export default UpdateEmp;
