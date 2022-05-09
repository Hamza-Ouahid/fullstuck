package com.app.demo.service;

import com.app.demo.Model.Employee;
import org.springframework.stereotype.Service;

import java.util.List;

public interface EmployeeService {
    public Employee saveEmployee(Employee employee);
    public List<Employee> getAllEmployee();

    public Employee getEmployee(int id);

    public Employee updateEmployee(int id, Employee employee);
}
