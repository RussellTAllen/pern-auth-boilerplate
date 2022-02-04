import React, { useState } from 'react'
import AuthService from '../services/AuthService'
import { Link } from 'react-router-dom'

const Login = ({ setAuth }) => {
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name] : e.target.value })        
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try{
            const data = await AuthService.login(inputs)

            if (data.token){
                localStorage.setItem('token', data.token)
                setAuth(true)
            }else
                alert('Incorrect email/password!')
        }
        catch(err){
            console.error(err.message)
        }
    }
    

    return (
        <div>
            <h1 className="text-center my-5">Login</h1>

            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="E-mail" 
                    className="form-control my-3"
                    value={inputs.email}
                    onChange={handleChange} />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    className="form-control my-3"
                    value={inputs.password}
                    onChange={handleChange} />
                <button className="btn btn-success btn-block" onClick={handleSubmit}>Login</button>
            </form>
            <Link to="/register">Register</Link>
        </div>
    )
}

export default Login

