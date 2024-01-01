import React from 'react'
import { Form } from 'react-bootstrap'

const CustomInput = ({label, ...rest}) => {
    return (
        <Form.Group >
            <Form.Label>{label}</Form.Label>
            <Form.Control
                {...rest}
                 />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
    )
}

export default CustomInput
