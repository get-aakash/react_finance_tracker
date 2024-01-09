import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import InputForm from '../components/InputForm'
import DisplayData from '../components/DisplayData'
import Layout from '../components/Layout'
import { setUser } from '../redux/user/UserSlice'


const Dashboard = () => {
    const [listData, setListData] = useState([])
    const addTransaction = (data)=>{
      
      setListData([...listData, data])
    }
    useEffect(() => {
      const userStr = sessionStorage.getItem("logedInUser");
      if (userStr) {
        setUser(JSON.parse(userStr));
      }
  
      //pars json
      //set stat
      console.log(userStr)
    }, []);
    
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
