import React, { useState } from 'react';

const ProjectList = ({ projects }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProjects = projects
        .filter(project => project.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div>
            <input
                type="text"
                placeholder="Search projects"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
            <ul>
                {filteredProjects.map(project => (
                    <li key={project.id}>{project.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectList;
