import React, { useState } from 'react'
import { Button, Col, Form, FormControl, Row } from 'react-bootstrap'

import { useDispatch } from 'react-redux'
import { create } from '../redux/formSlice'

const InputForm = ({ addTransaction }) => {
    const [formData, setFormData] = useState({})
    const dispatch = useDispatch()


    const handleOnChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        dispatch(create(formData))
        addTransaction(formData)
    }
    return (
        <div className='wrapper'>
            <h2 className='heading text-center m-3'>Finance Tracker</h2>
            <Form className='container' onSubmit={handleOnSubmit}>
                <Row className='gap-2'>
                    <Col md={2}>
                        <Form.Select  aria-label="Default select example" name="type" onChange={handleOnChange}>
                            <option>Select Type...</option>
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>
                           
                        </Form.Select>
                    </Col>
                    <Col md={4}>
                        <Form.Control placeholder="Description" name='description' onChange={handleOnChange} />
                    </Col>
                    <Col md={2}>
                        <Form.Control type='number' placeholder="Amount" name='amount' onChange={handleOnChange} />
                    </Col>
                    <Col>
                        <FormControl type='date' name='date' onChange={handleOnChange} />
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
