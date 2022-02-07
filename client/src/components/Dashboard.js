import React, { useState, useEffect } from 'react'

const Dashboard = ({ setAuth }) => {
    const [name, setName] = useState('')

    const getName = () => {
        fetch('/api/dashboard', {
                method: 'GET',
                headers: { token: localStorage.token }
            })
            .then(response => response.json())
            .then(data => {
                if (data === "Not Authorized")
                    setAuth(false)
                else{
                    setName(data.user_name)
                    setAuth(true)
                }
            })
            .catch(err => console.error(err.message))
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