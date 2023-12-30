import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const Display = () => {
    const response = useSelector((state)=>state.data)
    const[trans, setTrans] = useState([])
    setTrans(response)
    console.log(trans)
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Type</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {trans.map((res)=>(
            <tr>
            <td>1</td>
            <td>{res.type}</td>
            <td>{res.description}</td>
            <td>{res.amount}</td>
            <td>{res.date}</td>
            <td>Edit/Delete</td>
          </tr>
        ))}
        
      
        
      </tbody>
    </Table>
  )
}

export default Display
