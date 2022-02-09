import React, { useState } from 'react';
import { Container, Select } from '@mantine/core'

const mockProjectData = [
  { value: 'PostgreSQL project', label: 'SQL project', group: 'Learning'},
  { value: 'Redux Project', label: 'Redux project', group: 'Learning' },
  { value: 'Tenders', label: 'Tenders project' }
]



const Projects = () => {
  const [project, setProject] = useState('')

  return (
    <Container>
        <h1>Projects</h1>

        <Select
          label="Project"
          placeholder="Project"
          data={ mockProjectData }
          value={project}
          onChange={setProject}
        />

        <h2>{ project }</h2>
    </Container>
  )
};

export default Projects;
