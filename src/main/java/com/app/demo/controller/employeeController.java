package com.app.demo.controller;

import com.app.demo.Model.Employee;
import com.app.demo.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employee")
@CrossOrigin
public class employeeController {
    @Autowired
    private EmployeeService employeeService;


    @PostMapping("/add")
    public String add(@RequestBody Employee employee){
        employeeService.saveEmployee(employee);
        return "employee Added";
    }

    @GetMapping("/getAll")
    public List<Employee> getAllEmployee(){
        return  employeeService.getAllEmployee();

    }
    @GetMapping("/{id}")
    public Employee getEmployee(@PathVariable("id") int id){
        return  employeeService.getEmployee(id);
    }
    @PutMapping("/{id}")
    public Employee updateEmployee(@PathVariable("id") int id , @RequestBody Employee employee){
        return employeeService.updateEmployee(id,employee);
    }

}
