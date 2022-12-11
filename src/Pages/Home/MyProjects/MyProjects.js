import React, { useEffect, useState } from 'react';
import ProjectsCard from '../ProjectsCard/ProjectsCard';

const MyProjects = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div className='my-5'>
            <h1 className='text-3xl font-bold text-center'>My Projects</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:px-10 lg:px-56'>
                {
                    projects.map(project => <ProjectsCard
                        key={project.project_id}
                        project={project}
                    ></ProjectsCard>)
                }
            </div>
        </div>
    );
};

export default MyProjects;