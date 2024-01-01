import React from 'react'
import Layout from '../components/Layout'
import { Form, Row, Col, InputGroup, Button } from 'react-bootstrap'
import CustomInput from '../components/CustomInput'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const inputs = [{
        label: "Email",
        name: 'email',
        type: 'email',
        required: true,
        placeholde: "sam@sam.com"
    },
    {
        label: "Password",
        name: 'password',
        type: 'password',
        required: true,
        placeholder: "******"
    },]

    const handleOnSubmit = (e)=>{
        e.preventDefault()
        navigate("/dashboard")

    }
    return (
        <Layout>
            <div className="w-50 m-auto">
                <Form onSubmit={handleOnSubmit} className="mt-5 border p-3 py-5 rounded shadow-lg" >
                    <h3>Welcome back!</h3>
                    <hr />
                    {inputs.map((item, index) => (
                        <CustomInput {...item} />
                    ))}
                    <div className="d-grid mt-3">
                    <Button type="submit" variant='primary'>Submit</Button>
                    </div>
                    
                    <div className="text-end">
                        Forget Password? <a href='/password-reset'>Reset</a> now
                    </div>

                </Form>
            </div>

        </Layout>
    )
}

export default Login
