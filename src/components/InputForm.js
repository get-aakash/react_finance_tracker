import React, { useState } from 'react'
import { Button, Col, Form, FormControl, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getTransaction, postTransaction } from '../redux/transaction/Transaction'
import { addDoc, collection } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { db } from '../firebase/firebase-config'


const initialState = {
    type:"",
    description:"",
    amount:"",
    date:"",

}
const InputForm = ({ addTransaction }) => {
    const [formData, setFormData] = useState(initialState)
    const dispatch = useDispatch()

    const {userInfo} = useSelector((state)=>state.user)
   


    const handleOnChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleOnSubmit = async(e) => {
        e.preventDefault()
        console.log(formData)
        
        const obj = {
            ...formData, userId: userInfo.uid, createdAt: Date.now()
        }

        const docRef = await addDoc(collection(db,"transactions"), obj)
        if(docRef?.id){
            setFormData(initialState)
            dispatch(getTransaction(userInfo.uid))
            return toast.success("The transaction has been added")
        }
       
        
    }
    return (
        <div className='wrapper'>
            <h2 className='heading text-center m-3'>Finance Tracker</h2>
            <Form className='container' onSubmit={handleOnSubmit}>
                <Row className='gap-2'>
                    <Col md={2}>
                        <Form.Select  aria-label="Default select example" name="type" onChange={handleOnChange} required defaultValue={formData.type}>
                            <option>Select Type...</option>
                            <option value="income" selected={formData.type==="income"}>Income</option>
                            <option value="expense" selected={formData.type==="expense"}>Expense</option>
                           
                        </Form.Select>
                    </Col>
                    <Col md={4}>
                        <Form.Control placeholder="Description" name='description' value={formData.description} onChange={handleOnChange} />
                    </Col>
                    <Col md={2}>
                        <Form.Control type='number' placeholder="Amount" name='amount' value={formData.amount} onChange={handleOnChange} />
                    </Col>
                    <Col>
                        <FormControl type='date' name='date' value={formData.date} onChange={handleOnChange} />
                    </Col>
                    <Col md={2}>
                        <Button type='submit'>Add</Button>
                    </Col>
                </Row>
            </Form>
            <hr />


        </div>
    )
}

export default InputForm
