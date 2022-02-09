import React, { useState, useEffect } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Projects from './Projects'
import Teams from './Teams'
import Tasks from './Tasks'

import { Tabs, ImageIcon } from '@mantine/core'


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


            <Tabs variant="pills">
                <Tabs.Tab label="Projects">
                    <Projects />
                </Tabs.Tab>
                <Tabs.Tab label="Teams">
                    <Teams />
                </Tabs.Tab>
                <Tabs.Tab label="Tasks">
                    <Tasks />
                </Tabs.Tab>
            </Tabs>

            <Link to="/dashboard/projects">Projects</Link>
            <Link to="/dashboard/teams">Teams</Link>
            <Link to="/dashboard/tasks">Tasks</Link>

            <Switch>
                <Route path="/dashboard/projects">
                    <Projects />
                </Route>
                <Route path="/dashboard/teams">
                    <Teams />
                </Route>
                <Route path="/dashboard/tasks">
                    <Tasks />
                </Route>
            </Switch>



        </div>
    )
}

export default Dashboard