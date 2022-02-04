import React, { useState, useEffect } from 'react'

const Dashboard = ({ setAuth }) => {
    const [name, setName] = useState('')

    const getName = async () => {
        try{
            const response = await fetch('/api/dashboard', {
                method: 'GET',
                headers: { token: localStorage.token }
            })
            const data = await response.json()

            setName(data.user_name)
        }
        catch(err){
            console.error(err.message)
        }
    }
    
    useEffect(() => {
        getName()
    }, [])

    const handleLogout = () => {
        setAuth(false)
        localStorage.removeItem('token')
    }
    
    return (
        <div>
            <h1>{name}'s Dashboard</h1>
            <button onClick={() => console.log('does this reload the page?')}>Reload???</button>

            <button onClick={handleLogout}>Log Out</button>
        </div>
    )
}

export default Dashboard