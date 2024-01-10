import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { Form, Row, Col, InputGroup, Button } from 'react-bootstrap'
import CustomInput from '../components/CustomInput'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../redux/user/UserSlice'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebase-config'
import { toast } from 'react-toastify'

const Login = () => {
    const [formData, setFormData]= useState({})
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {userInfo} = useSelector(state=>state.user)

    useEffect(()=>{
        userInfo?.uid && navigate('/dashboard')

    },[userInfo])
    
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
    const handleOnChange = (e)=>{
        const {name,value} = e.target
        setFormData({
            ...formData, [name]: value

        })
    }
    const handleOnSubmit = async (e)=>{
        e.preventDefault()
        try {
            const responsePending = signInWithEmailAndPassword(auth, formData.email, formData.password)
        toast.promise(responsePending,{
            pending:"please wait..."
        })
        const {user} = await responsePending
        if(user?.uid){
            sessionStorage.setItem("accessToken", user.accessToken)
            localStorage.setItem("refreshToken", user.refreshToken)
            sessionStorage.setItem("logedInUser", JSON.stringify(user));
            const userObj = {
                uid: user.uid,
                email: user.email,
                displayName: user.displayName
            }
            setTimeout(() => {
                dispatch(setUser(userObj));
              }, 2000);
              console.log(userInfo)
              return toast.success("Logged in successfully, Redirecting now");
            }
        
        
            
        } catch (error) {
            let msg = error.message
            if(error.message.includes("(auth/wrong-password)"))(
                msg = "Invalid login details"
            )
            toast.error(msg)
            
        }
        

    }
    return (
        <Layout>
            <div className="w-50 m-auto">
                <Form onSubmit={handleOnSubmit} className="mt-5 border p-3 py-5 rounded shadow-lg" >
                    <h3>Welcome back!</h3>
                    <hr />
                    {inputs.map((item, index) => (
                        <CustomInput key={index} {...item} onChange={handleOnChange} />
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
