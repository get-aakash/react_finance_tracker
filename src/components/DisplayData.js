import React from 'react'
import { Button, Table } from 'react-bootstrap'

const DisplayData = ({listData}) => {
    console.log(listData)
  return (
    <Table striped bordered hover className='mt-5 '>
      <thead>
        <tr>
          <th>#</th>
          <th>Type</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Income</th>
          <th>Expense</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {listData.map((data,index)=>(
            <tr>
            <td>{index + 1}</td>
            <td>{data.type}</td>
            <td>{data.description}</td>
            <td>{data.amount}</td>
            <td>{data.date}</td>
            <td></td>
            <td></td>
            <td><Button variant='danger'>Delete</Button></td>
          </tr> 

        ))}
        
      </tbody>
    </Table>
  )
}

export default DisplayData
