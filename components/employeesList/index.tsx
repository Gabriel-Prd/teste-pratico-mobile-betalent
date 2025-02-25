import { View } from 'react-native'
import React from 'react'
import TableHeader from '../tableHeader'
import EmployeesItem from './item'

export interface employeesProps{
    id: string,
    name: string,
    job: string,
    admission_date: Date,
    phone: string,
    image: string
  }

const EmployeesList = ({ employees }: { employees: employeesProps[] }) => {
  return (
    <View>
      <TableHeader/>
      {employees.map( item => (
          <EmployeesItem item={item} key={item.id}/>
      ))}

    </View>
  )
}

export default EmployeesList
