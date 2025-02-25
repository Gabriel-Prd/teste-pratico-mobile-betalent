import { View } from 'react-native';
import React, { useState, useEffect } from 'react';
import EmployeesItem from '../employeesList/item';
import TableHeader from '../tableHeader';
import Search from '../search';

export interface employeesProps {
  id: string;
  name: string;
  job: string;
  admission_date: Date;
  phone: string;
  image: string;
}

const EmployeesList = () => {
  const [employees, setEmployees] = useState<employeesProps[]>([]);
  const [filteredEmployees, setFilteredEmployees] = useState<employeesProps[]>([]);
  const [search, setSearch] = useState(''); 

  useEffect(() => {
    async function getEmployees() {
      const response = await fetch('http://192.168.0.108:3000/employees');
      const data = await response.json();
      setEmployees(data);
      setFilteredEmployees(data);  
    }

    getEmployees();
  }, []);

  
  const filterEmployees = (searchText: string) => {
    const lowercasedSearch = searchText.toLowerCase();
    const filtered = employees.filter((employee) => {
      return (
        employee.name.toLowerCase().includes(lowercasedSearch) ||
        employee.job.toLowerCase().includes(lowercasedSearch) ||
        employee.phone.includes(lowercasedSearch) 
      );
    });
    setFilteredEmployees(filtered);
  };

 
  const handleSearchChange = (text: string) => {
    setSearch(text);
    filterEmployees(text);  
  };

  return (
    <View>
      <Search search={search} onSearchChange={handleSearchChange} />
      <TableHeader />
      {filteredEmployees.map((item) => (
        <EmployeesItem item={item} key={item.id} />
      ))}
    </View>
  );
};

export default EmployeesList;
