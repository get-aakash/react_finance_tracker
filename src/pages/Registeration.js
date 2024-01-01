import React from 'react'
import Layout from '../components/Layout'
import { Form, Button } from 'react-bootstrap'
import CustomInput from '../components/CustomInput'

const Registeration = () => {
    const inputs = [{
        label: "First Name",
        name: 'fName',
        required: true,
        placeholder: "sam"
    },
    {
        label: "Last Name",
        name: 'lName',
        
        required: true,
        placeholder: "smith"
    },{
        label: "Email",
        name: 'email',
        type: 'email',
        required: true,
        placeholder: "sam@sam.com"
    },
    {
        label: "Password",
        name: 'password',
        type: 'password',
        required: true,
        placeholder: "******"
    },
    {
        label: "Confirm Password",
        name: 'cPassword',
        type: 'password',
        required: true,
        placeholder: "******"
    },]
    return (
        <Layout>
            <div className="w-50 m-auto">
                <Form className="mt-5 border p-3 py-5 rounded shadow-lg" >
                    <h3>Join Our System Now!!!</h3>
                    <hr />
                    {inputs.map((item, index) => (
                        <CustomInput {...item} />
                    ))}
                    <Button type="submit" variant='primary'>Submit</Button>
                    <div className="text-end">
                        Forget Password? <a href='/password-reset'>Reset</a> now
                    </div>

                </Form>
            </div>

        </Layout>
    )
}

export default Registeration
