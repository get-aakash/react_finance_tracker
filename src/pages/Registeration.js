import React, { useState } from 'react'
import Layout from '../components/Layout'
import { Form, Button } from 'react-bootstrap'
import CustomInput from '../components/CustomInput'
import { toast } from 'react-toastify'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, db } from '../firebase/firebase-config'
import { useNavigate } from 'react-router-dom'
import { doc, setDoc } from 'firebase/firestore'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/user/UserSlice'

const Registeration = () => {
    const [formData, setFormData] = useState({})
    const [error, setError] = useState("")

    const navigate = useNavigate()
    const dispatch = useDispatch()
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
    }, {
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

    const handleOnChange = (e) => {
        const { name, value } = e.target
        if(name === "password"){
            setError("")
            value.length < 6 && setError("password must be 6 characters long")
            !/[0-9]/.test(value)&& setError("Number is required")
            !/[A-Z]/.test(value)&& setError("Upper Case is required")
            !/[a-z]/.test(value)&& setError("Lower Case is required")
        }
        setFormData({
            ...formData, [name]: value

        })
    }
    const handleOnSubmit = async (e) => {
        e.preventDefault()
        const {cPassword, ...rest} = formData

        if(cPassword !== rest.password){
            return toast.error("Password do not match!!!")
        }
        const responsePromise=  createUserWithEmailAndPassword(auth, formData.email, formData.password )
        toast.promise(responsePromise,{
            pending:"Please wait..."
        })
        try {
            const {user} = await responsePromise
            if(user?.uid){
                
                
                updateProfile(user,{
                    displayName: formData.fName
                })
                const userObj = {
                    fName: formData.fName,
                    lName: formData.lName,
                    email: formData.email,
                }
                await setDoc(doc(db, "users", user.uid ),userObj)
                toast.success("Your account is created and redirecting to Dashboard")
                dispatch(setUser({...userObj, uid: user.uid}))
                navigate('/dashboard')
            }
            
        } catch (error) {
            let msg = error.message
            if(msg.includes("auth/email-already-in-use")){
                msg = "Email already in use"
            }
            toast.error(msg)
            
        }
        
        
    }
    return (
        <Layout>
            <div className="w-50 m-auto">
                <Form onSubmit={handleOnSubmit} className="mt-5 border p-3 py-5 rounded shadow-lg" >
                    <h3>Join Our System Now!!!</h3>
                    <hr />
                    {inputs.map((item, index) => (
                        <CustomInput key={index} {...item} onChange={handleOnChange} />
                    ))}
                    <Form.Text>
                        Your password must be atleast 6 characters including number, uppercase and lowercase!!!
                    </Form.Text>
                    {error && <ul>
                        <li className='text-danger fw-bolder mt-3'>
                            {error}
                            </li></ul>}
                    <div className="d-grid py-3">
                        <Button type="submit" variant='primary'>Register</Button>
                    </div>

                    <div className="text-end">
                        Forget Password? <a href='/password-reset'>Reset</a> now
                    </div>

                </Form>
            </div>

        </Layout>
    )
}

export default Registeration
