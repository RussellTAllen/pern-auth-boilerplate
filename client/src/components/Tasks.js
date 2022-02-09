import React, { useState } from 'react';
import { Container, TextInput, Textarea, Button } from '@mantine/core';

const initialState = {
    title: '',
    desc: '',
    priority: 'low'
}

const Tasks = () => {
    const [inputs, setInputs] = useState(initialState)
    const [tasks, setTasks] = useState([])

    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name] : e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setTasks([...tasks, inputs])
        setInputs(initialState)
    }

    return (
        <Container>
            <h1>Tasks</h1>

            <form onSubmit={handleSubmit}>
                <TextInput name='title' value={inputs.title} placeholder="Task Title" onChange={handleChange} />
                <Textarea name='desc' value={inputs.desc} placeholder="Task Description" onChange={handleChange} />
                <Button variant="outline" onClick={handleSubmit}>Create Task</Button>
            </form>

            <h3>Tasklist</h3>
            <ul>
                { tasks.map((task, idx) => {
                   return (
                    <li key={idx}>
                            <h4>{ task.title }</h4>
                            <p>{ task.desc }</p>
                    </li>
                   )
                })}
            </ul>

        </Container>
    )
};

export default Tasks;
