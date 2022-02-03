import React, { useState } from 'react'
import AuthService from '../services/AuthService'
import { Link } from 'react-router-dom'

const Register = ({ setAuth }) => {
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        name: ''
    })

    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name] : e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try{
            const data = await AuthService.register(inputs)
            console.log(data)

            localStorage.setItem('token', data.token)

            setAuth(true)
        }
        catch(err){
            console.error(err.message)
        }
    }

    return (
        <div>
            <h1 className="text-center my-5">Register</h1>

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
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Name" 
                    className="form-control my-3"
                    value={inputs.name}
                    onChange={handleChange} />
                <button 
                    className="btn btn-success btn-block"
                    onClick={handleSubmit} >
                        Submit
                </button>
            </form>
            <Link to="/login">Login</Link>
        </div>
    )
}


export default Register
