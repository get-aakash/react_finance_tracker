import React from 'react'
import { Button, Table } from 'react-bootstrap'

const DisplayData = ({listData, handleOnDelete}) => {
    console.log(listData)

    const total = listData.reduce((acc, item)=>{
      if(item.type=== "income"){
        return acc + +item.amount
      }
      else{
        return acc - +item.amount
      }
    },0)
    
  return (
    <Table striped bordered hover className='mt-5 '>
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Description</th> 
          <th>Income</th>
          <th>Expense</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {listData.map((data,index)=>(
            <tr key={index}>
            <td>{index + 1}</td>
            <td>{data.date}</td>
            <td>{data.description}</td>
            {data.type==="income" ? (<><td className='text-success'>{data.amount}</td>
            <td></td></>):(<><td></td>
            <td className='text-danger fw-bolder'>-{data.amount}</td></>)}
            
            
            <td><Button variant='danger fw-bolder' onClick={()=>handleOnDelete(index)}>Delete</Button></td>
          </tr> 
          

        ))}
        <tr>
          <td colSpan={5} className='fw-bolder fs-3'>Total</td>
          <td>{total}</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default DisplayData
