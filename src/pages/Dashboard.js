import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import InputForm from '../components/InputForm'
import DisplayData from '../components/DisplayData'
import Layout from '../components/Layout'


const Dashboard = () => {
    const [listData, setListData] = useState([])
    const addTransaction = (data)=>{
      
      setListData([...listData, data])
    }
    console.log(listData)
    const handleOnDelete = (id)=>{
      if(window.confirm("Are you sure to delete this transaction?")){
        const response = listData.filter((item,i)=>i !== id)
      setListData(response)
      }
      
    }
  return (
    <Layout>
        <Container>
        <InputForm addTransaction={addTransaction} />
      
      <DisplayData listData= {listData} handleOnDelete={handleOnDelete} />
      
    </Container>

    </Layout>
    
  )
}

export default Dashboard
