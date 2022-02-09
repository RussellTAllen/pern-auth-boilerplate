import React, { useState, useEffect } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Projects from './Projects'
import Teams from './Teams'
import Tasks from './Tasks'

import { Container, Tabs } from '@mantine/core'


const Dashboard = ({ setAuth }) => {
    const [name, setName] = useState('')
    const [activeTab, setActiveTab] = useState(0)

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

    const handleTabChange = (active, tabKey) => {
        setActiveTab(active)
        console.log('tabkey:' +tabKey)
    }
    
    return (
        <Container h="xs">
            <h1>{name}'s Dashboard</h1>

            <button onClick={handleLogout}>Log Out</button>


            <Tabs variant="pills" active={activeTab} onTabChange={handleTabChange}>
                <Tabs.Tab label="Projects" tabKey="projects">
                    <Projects />
                </Tabs.Tab>
                <Tabs.Tab label="Tasks" tabKey="tasks">
                    <Tasks />
                </Tabs.Tab>
                <Tabs.Tab label="Teams" tabKey="teams">
                    <Teams />
                </Tabs.Tab>
            </Tabs>
        </Container>
    )
}

export default Dashboard