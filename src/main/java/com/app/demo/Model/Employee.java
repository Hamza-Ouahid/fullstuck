package com.app.demo.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String first_name;
    private String last_name;
    private String address;
    private LocalDate intigration_date;
    private LocalDate birth_day;
    private String gender;
    private Integer registration_number;
    private String business_unit;
    private Integer ssn;
    private Integer phone_number;
    private String position;
    private int responsible;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = first_name + last_name;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public LocalDate getIntigration_date() {
        return intigration_date;
    }

    public void setIntigration_date(LocalDate intigration_date) {
        this.intigration_date = intigration_date;
    }

    public LocalDate getBirth_day() {
        return birth_day;
    }

    public void setBirth_day(LocalDate birth_day) {
        this.birth_day = birth_day;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Integer getRegistration_number() {
        return registration_number;
    }

    public void setRegistration_number(Integer registration_number) {
        this.registration_number = registration_number;
    }

    public String getBusiness_unit() {
        return business_unit;
    }

    public void setBusiness_unit(String business_unit) {
        this.business_unit = business_unit;
    }

    public Integer getSsn() {
        return ssn;
    }

    public void setSsn(Integer ssn) {
        this.ssn = ssn;
    }

    public Integer getPhone_number() {
        return phone_number;
    }

    public void setPhone_number(Integer phone_number) {
        this.phone_number = phone_number;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public int getResponsible() {
        return responsible;
    }

    public void setResponsible(int responsible) {
        this.responsible = responsible;
    }

    public Employee() {
    }
}







