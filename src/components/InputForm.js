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
        dispatch(create(formData))
        addTransaction(formData)
    }
    return (
        <div className='wrapper'>
            <h2 className='heading text-center m-3'>Finance Tracker</h2>
            <Form className='container' onSubmit={handleOnSubmit}>
                <Row>
                    <Col xs={2}>
                        <Form.Select aria-label="Default select example">
                            <option>Select Type...</option>
                            <option value="1">...</option>
                           
                        </Form.Select>
                    </Col>
                    <Col xs={3}>
                        <Form.Control placeholder="Description" name='description' onChange={handleOnChange} />
                    </Col>
                    <Col xs={2}>
                        <Form.Control placeholder="Amount" name='amount' onChange={handleOnChange} />
                    </Col>
                    <Col>
                        <FormControl type='date' name='date' onChange={handleOnChange} />
                    </Col>
                    <Col>
                        <Button type='submit'>Add</Button>
                    </Col>
                </Row>
            </Form>
            <hr />


        </div>
    )
}

export default InputForm
