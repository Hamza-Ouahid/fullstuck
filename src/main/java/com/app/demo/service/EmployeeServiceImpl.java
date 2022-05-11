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
        emp.setFirst_name(employee.getFirst_name());
        emp.setLast_name(employee.getLast_name());
        emp.setAddress(employee.getAddress());
        emp.setIntigration_date(employee.getIntigration_date());
        emp.setBirth_day(employee.getBirth_day());
        emp.setGender(employee.getGender());
        emp.setRegistration_number(employee.getRegistration_number());
        emp.setBusiness_unit(employee.getBusiness_unit());
        emp.setSsn(employee.getSsn());
        emp.setPhone_number(employee.getPhone_number());
        emp.setPosition(employee.getPosition());
        emp.setResponsible(employee.getResponsible());

        return employeeRepository.save(emp);
    }
}
