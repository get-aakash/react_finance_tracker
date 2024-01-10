import React, { useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getTransaction } from '../redux/transaction/Transaction'

const DisplayData = () => {
    const dispatch = useDispatch()
    const {userInfo} = useSelector(state => state.user)
    const {trans} = useSelector(state => state.transaction)

    useEffect(()=>{
        dispatch(getTransaction(userInfo.uid))
    },[dispatch])
    const total = trans.reduce((acc, item)=>{
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
        {trans.map((data,index)=>(
            <tr key={index}>
            <td>{index + 1}</td>
            <td>{data.date}</td>
            <td>{data.description}</td>
            {data.type==="income" ? (<><td className='text-success'>{data.amount}</td>
            <td></td></>):(<><td></td>
            <td className='text-danger fw-bolder'>-{data.amount}</td></>)}
            
            
            <td><Button variant='danger fw-bolder' >Delete</Button></td>
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
