package com.app.demo.service;

import com.app.demo.Model.Employee;
import com.app.demo.Repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class EmployeeServiceImpl implements EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public Employee saveEmployee(Employee employee) {
        return  employeeRepository.save(employee);
    }

    @Override
    public List<Employee> getAllEmployee() {
        return  employeeRepository.findAll();
    }

    @Override
    public Employee getEmployee(int id) {
        return employeeRepository.findById(id).get();
    }

    @Override
    public Employee updateEmployee(int id, Employee employee) {
        Employee emp = employeeRepository.findById(id).get();
        return employeeRepository.save(emp);
    }
}
